SELECT *
FROM Students AS s
INNER JOIN Courses as c ON s. course_id = c. course_id;

SELECT s. name, c. course_title
FROM Students AS s
INNER JOIN Courses as c ON s. course_id = c. course_id;

SELECT s. name, c. course_title
FROM Students AS s
LEFT JOIN Courses as c ON s. course_id = c. course_id;

SELECT s. name, c. course_title, s. grade
FROM Students AS s
INNER JOIN Courses as c ON s. course_id = c. course_id
WHERE s. grade > 75;

SELECT s. name, c. course_title, s. grade
FROM Students AS s
INNER JOIN Courses as c ON s. course_id = c. course_id
WHERE S. grade > 75
ORDER BY s. grade DESC;