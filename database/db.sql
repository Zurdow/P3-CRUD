-- Creando la bases dedatos

CREATE DATABASE warehose_of_players;

--Utilizando la base de datos

use warehose_of_players;

-- Creando una tabla

CREATE TABLE players(
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL,
	cedula VARCHAR(15) NOT NULL,
	peso VARCHAR(5) NOT NULL,
	estatura VARCHAR(5) NOT NULL,
	posicion VARCHAR(50) NOT NULL,	
	telefono VARCHAR(15)
);

-- Para mostrar las tablas

SHOW TABLES;

-- Para describir la tabla

describe players;