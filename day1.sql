CREATE DATABASE WEEK2;

USE WEEK2;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
) ;

INSERT INTO students (name) VALUES
('Alice Johnson'),
('Brian Smith'),
('Carlos Martinez');

CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (100) NOT NULL
);
INSERT INTO courses (title) VALUES
('Database Systems'),
('Operating Systems'),
('Software Engineering');


SELECT *
FROM students, courses;