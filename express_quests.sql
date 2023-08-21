DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
  id int primary key NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  director varchar(255) NOT NULL,
  year varchar(255) NOT NULL,
  color varchar(255) NOT NULL,
  duration int NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;

INSERT INTO
  movies (title, director, year, color, duration)
VALUES
  (
    'Citizen Kane',
    'Orson Wells',
    '1941',
    '0',
    120
  ),
  (
    'The Godfather',
    'Francis Ford Coppola',
    '1972',
    '1',
    180
  ),
  (
    'Pulp Fiction',
    'Quentin Tarantino',
    '1994',
    '1',
    180
  ),
  (
    'Apocalypse Now',
    'Francis Ford Coppola',
    '1979',
    '1',
    150
  ),
  (
    '2001 a space odyssey',
    'Stanley Kubrick',
    '1968',
    '1',
    160
  ),
  (
    'The Dark Knight',
    'Christopher Nolan',
    '2008',
    '1',
    150
  );

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id int primary key NOT NULL AUTO_INCREMENT,
    firstname varchar(255) NOT NULL,
    lastname varchar(255) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    city varchar(255) DEFAULT NULL,
    language varchar(255) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

ALTER TABLE users ADD hashedPassword varchar(255) NOT NULL;

INSERT INTO
  users (firstname, lastname, email, city, language)
VALUES
  (
    'John',
    'Doe',
    'john.doe@example.com',
    'Paris',
    'English'
  ),
  (
    'Valeriy',
    'Appius',
    'valeriy.appius@example.com',
    'Moscow',
    'Russian'
  ),
  (
    'Ralf',
    'Geronimo',
    'ralf.geronimo@example.com',
    'New York',
    'Italian'
  ),
  (
    'Maria',
    'Iskandar',
    'maria.iskandar@example.com',
    'New York',
    'German'
  ),
  (
    'Jane',
    'Doe',
    'jane.doe@example.com',
    'London',
    'English'
  ),
  (
    'Johanna',
    'Martino',
    'johanna.martino@example.com',
    'Milan',
    'Spanish'
  );


  UPDATE users SET hashedPassword = 'hashedPassword1' WHERE email = 'john.doe@example.com';
UPDATE users SET hashedPassword = 'hashedPassword2' WHERE email = 'valeriy.appius@example.com';
UPDATE users SET hashedPassword = 'hashedPassword3' WHERE email = 'ralf.geronimo@example.com';
UPDATE users SET hashedPassword = 'hashedPassword4' WHERE email = 'maria.iskandar@example.com';
UPDATE users SET hashedPassword = 'hashedPassword5' WHERE email = 'jane.doe@example.com';
UPDATE users SET hashedPassword = 'hashedPassword6' WHERE email = 'johanna.martino@example.com';

