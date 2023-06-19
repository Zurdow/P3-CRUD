-- Creando la bases dedatos

CREATE DATABASE warehose_of_players;

--Utilizando la base de datos

USE warehose_of_players;

-- Creando una tabla

CREATE TABLE players(
	ID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	Nombre VARCHAR(50) NOT NULL,
	Cedula VARCHAR(15) NOT NULL,
	Peso VARCHAR(5) NOT NULL,
	Estatura VARCHAR(5) NOT NULL,
	Posicion VARCHAR(50) NOT NULL,	
	Telefono VARCHAR(15)
);

-- Para mostrar las tablas

SHOW TABLES;

-- Para describir la tabla

DESCRIBE players;