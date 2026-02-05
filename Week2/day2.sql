SELECT *
FROM students;

SELECT name
FROM students;

SELECT name
FROM students
WHERE name = 'John Doe';

SELECT name
FROM students
ORDER BY name ASC;

SELECT id, name
FROM students
ORDER BY id DESC;

SELECT id, name
FROM students
ORDER BY id DESC
LIMIT 1;