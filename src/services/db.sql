
DROP TABLE IF EXISTS RecargoMora;
DROP TABLE IF EXISTS VectoFiscal;
DROP TABLE IF EXISTS Retenciones;
DROP TABLE IF EXISTS Nomina;
DROP TABLE IF EXISTS Gastos;
DROP TABLE IF EXISTS Facturas;
DROP TABLE IF EXISTS Ingresos;
DROP TABLE IF EXISTS Empleado;
DROP TABLE IF EXISTS Negocio;
DROP TABLE IF EXISTS Contribuyente;
DROP TABLE IF EXISTS Tributos;
DROP TABLE IF EXISTS ElementoGasto;
DROP TABLE IF EXISTS PartidaGasto;
DROP TABLE IF EXISTS Actividad;

-- Tabla Actividad
CREATE TABLE IF NOT EXISTS Actividad (
  id VARCHAR(5) PRIMARY KEY,
  nombre VARCHAR NOT NULL UNIQUE
);

-- Tabla PartidaGasto
CREATE TABLE IF NOT EXISTS PartidaGasto (
  id VARCHAR(5) PRIMARY KEY,
  nombre VARCHAR NOT NULL UNIQUE,
  tipo VARCHAR NOT NULL DEFAULT 'APD' CHECK(tipo IN ('APD','DBI','ENIEIAMFP'))
);

-- Tabla ElementoGasto
CREATE TABLE IF NOT EXISTS ElementoGasto (
  id VARCHAR(2) PRIMARY KEY,
  nombre VARCHAR NOT NULL UNIQUE,
  partida_gasto_id INT,
  FOREIGN KEY (partida_gasto_id) REFERENCES PartidaGasto (id)
);

-- Tabla Tributos
CREATE TABLE IF NOT EXISTS Tributos (
  parrafo VARCHAR PRIMARY KEY,
  nombre VARCHAR NOT NULL UNIQUE
);

-- Tabla Contribuyente
CREATE TABLE IF NOT EXISTS Contribuyente (
  id VARCHAR(11) PRIMARY KEY,
  nit VARCHAR(11) NOT NULL,
  nombre VARCHAR NOT NULL,
  apellidos VARCHAR NOT NULL,
  telefono VARCHAR(8) UNIQUE,
  celular VARCHAR(8) UNIQUE,
  email VARCHAR UNIQUE,
  calle_avenida VARCHAR NOT NULL,
  numero VARCHAR NOT NULL,
  apto VARCHAR,
  reparto VARCHAR,
  municipio VARCHAR NOT NULL,
  provincia VARCHAR NOT NULL,
  codigo_zona VARCHAR,
  actividad_id VARCHAR NOT NULL,
  inicio_operacion DATE NOT NULL,
  creado DATE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (actividad_id) REFERENCES Actividad (id)
);

-- Tabla Negocio
CREATE TABLE IF NOT EXISTS Negocio (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  contribuyente_id VARCHAR NOT NULL,
  nombre VARCHAR NOT NULL,
  calle_avenida VARCHAR NOT NULL,
  numero VARCHAR NOT NULL,
  apto VARCHAR,
  reparto VARCHAR,
  municipio VARCHAR NOT NULL DEFAULT 'Camagüey',
  provincia VARCHAR NOT NULL DEFAULT 'Camagüey',
  codigo_zona VARCHAR,
  apertura DATE DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (contribuyente_id) REFERENCES Contribuyente(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Tabla Empleado
CREATE TABLE IF NOT EXISTS Empleado (
  id VARCHAR(11) PRIMARY KEY,
  nombre VARCHAR NOT NULL,
  apellidos VARCHAR NOT NULL,
  tipo VARCHAR NOT NULL CHECK(tipo IN ('CONTRATO', 'AYUDA FAMILIAR')),
  alta DATE NOT NULL,
  baja DATE,
  municipio VARCHAR NOT NULL DEFAULT 'Camagüey',
  actividad_id VARCHAR,
  contribuyente_id VARCHAR NOT NULL,
  creado DATE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (actividad_id) REFERENCES Actividad (id)
  FOREIGN KEY (contribuyente_id) REFERENCES Contribuyente (id)
);

-- Tabla Ingresos
CREATE TABLE IF NOT EXISTS Ingresos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fecha DATE,
  tipo VARCHAR NOT NULL DEFAULT 'INGRESOS OBTENIDOS' CHECK (tipo IN ('INGRESOS OBTENIDOS', 'NO CONSIDERADOS A EFECTOS DE IMPUESTOS')),
  activiad VARCHAR NOT NULL DEFAULT 'VENTA' CHECK (activiad IN ('VENTA', 'SERVICIO')),
  efectivo_en VARCHAR NOT NULL DEFAULT 'CAJA' CHECK (efectivo_en IN ('CAJA', 'BANCO')),
  importe FLOAT NOT NULL CHECK (importe > 0),
  contribuyente_id VARCHAR,
  detalles TEXT,
  creado DATE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (contribuyente_id) REFERENCES Contribuyente (id)
);

-- Tabla Facturas
CREATE TABLE IF NOT EXISTS Facturas (
  id VARCHAR (3) PRIMARY KEY,
  fecha DATE NOT NULL,
  monto FLOAT NOT NULL CHECK (monto > 0),
  tasa_cambio INT NOT NULL DEFAULT 1,
  importe FLOAT AS (monto * tasa_cambio) STORED,
  imagen BLOB NOT NULL,
  contribuyente_id VARCHAR,
  creado DATE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (contribuyente_id) REFERENCES Contribuyente (id)
);

-- Tabla Gastos
CREATE TABLE IF NOT EXISTS Gastos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fecha DATE NOT NULL,
  efectivo_en VARCHAR NOT NULL DEFAULT 'CAJA' CHECK (efectivo_en IN ('CAJA', 'BANCO')),
  comprobante BOOLEAN NOT NULL DEFAULT 0 CHECK(comprobante IN (0, 1)),
  monto FLOAT NOT NULL CHECK (monto > 0),
  tasa_cambio INT NOT NULL DEFAULT 1,
  importe FLOAT AS (monto * tasa_cambio) STORED,
  elemento_gasto_id VARCHAR,
  contribuyente_id VARCHAR,
  factura_id VARCHAR,
  creado DATE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (elemento_gasto_id) REFERENCES ElementoGasto (id),
  FOREIGN KEY (contribuyente_id) REFERENCES Contribuyente (id)
  FOREIGN KEY (factura_id) REFERENCES Facturas (id)
);

-- Tabla Nómina
CREATE TABLE IF NOT EXISTS Nomina (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fecha DATE NOT NULL,
  empleado_id VARCHAR,
  importe FLOAT NOT NULL CHECK (importe > 0),
  smt FLOAT NOT NULL,
  creado DATE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (empleado_id) REFERENCES Empleado (id)
);

-- Tabla Retenciones
-- TODO: Revisar mas tarde
CREATE TABLE IF NOT EXISTS Retenciones (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nomina_id INT,
  importe FLOAT NOT NULL CHECK (importe > 0),
  creado DATE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (nomina_id) REFERENCES Nomina (id)
);

-- Tabla Tributos
CREATE TABLE IF NOT EXISTS VectoFiscal (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  codigo VARCHAR(10) NOT NULL,
  tributos_id VARCHAR,
  fecha_a_pagar DATE NOT NULL,
  importe_a_pagar FLOAT CHECK (importe_a_pagar > 0),
  fecha_de_pago DATE CHECK (fecha_de_pago >= fecha_a_pagar),
  forma_de_pago VARCHAR DEFAULT 'EN BANCO' CHECK(forma_de_pago IN ('EN BANCO', 'ELECTRONICA')),
  importe_pagado FLOAT CHECK (importe_pagado > 0),
  descuento FLOAT,
  contribuyente_id VARCHAR,
  creado DATE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (tributos_id) REFERENCES Tributos (parrafo),
  FOREIGN KEY (contribuyente_id) REFERENCES Contribuyente (id)
);

-- Tabla RecargoMora
CREATE TABLE IF NOT EXISTS RecargoMora (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fecha_de_pago DATE,
  forma_de_pago VARCHAR DEFAULT 'EN BANCO' CHECK(forma_de_pago IN ('EN BANCO', 'ELECTRONICA')),
  retrazo INT CHECK (retrazo > 0),
  importe_a_pagar FLOAT CHECK (importe_a_pagar > 0),
  importe_pagado FLOAT CHECK (importe_pagado > 0),
  descuento FLOAT,
  vector_id INT,
  creado DATE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (vector_id) REFERENCES VectoFiscal (id)
);
