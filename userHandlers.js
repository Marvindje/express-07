const argon2 = require('argon2');
const db = require('./dbConnection'); // Assurez-vous d'avoir une connexion à votre base de données ici

async function postUser(req, res) {
    try {
        const hashedPassword = await argon2.hash(req.body.password);
        const result = await db.query(
            "INSERT INTO users (firstname, lastname, email, city, language, hashedPassword) VALUES (?, ?, ?, ?, ?, ?)",
            [req.body.firstname, req.body.lastname, req.body.email, req.body.city, req.body.language, hashedPassword]
        );
        res.status(201).send({ id: result.insertId });
    } catch (error) {
        res.status(500).send({ error: "Erreur lors de la création de l'utilisateur" });
    }
}

async function updateUser(req, res) {
    try {
        let updateQuery = "UPDATE users SET firstname = ?, lastname = ?, email = ?, city = ?, language = ?";
        const values = [req.body.firstname, req.body.lastname, req.body.email, req.body.city, req.body.language];

        if (req.body.password) {
            const hashedPassword = await argon2.hash(req.body.password);
            updateQuery += ", hashedPassword = ?";
            values.push(hashedPassword);
        }

        updateQuery += " WHERE id = ?";
        values.push(req.params.id);

        await db.query(updateQuery, values);
        res.status(200).send({ message: "Utilisateur mis à jour avec succès" });
    } catch (error) {
        res.status(500).send({ error: "Erreur lors de la mise à jour de l'utilisateur" });
    }
}

async function getUser(req, res) {
    try {
        const user = await db.query(
            "SELECT id, firstname, lastname, email, city, language FROM users WHERE id = ?",
            [req.params.id]
        );
        if (user.length) {
            res.status(200).send(user[0]);
        } else {
            res.status(404).send({ error: "Utilisateur non trouvé" });
        }
    } catch (error) {
        res.status(500).send({ error: "Erreur lors de la récupération de l'utilisateur" });
    }
}

module.exports = {
    postUser,
    updateUser,
    getUser
};
