-- Database: ServiceRequest_log

-- DROP DATABASE IF EXISTS "ServiceRequest_log";

CREATE DATABASE "ServiceRequest_log"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_India.1252'
    LC_CTYPE = 'English_India.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

	CREATE TABLE tickets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  contact VARCHAR(100),
  product VARCHAR(255),
  issue TEXT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
