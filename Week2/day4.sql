SELECT SUM(s.grade)
FROM Students AS s;

SELECT AVG(s.grade)
FROM Students AS s;

SELECT MIN(s.grade)
FROM Students AS s;

SELECT MAX(s.grade)
FROM Students AS s;

SELECT AVG(s.grade)
FROM Students AS s
GROUP BY s.course_id;

SELECT s.course_id, AVG(s.grade), COUNT(s.student_id)
FROM Students AS s
WHERE s.course_id IS NOT NULL
GROUP BY s.course_id;

SELECT s.course_id, AVG(s.grade), COUNT(s.student_id)
FROM Students AS s
WHERE s.course_id IS NOT NULL GROUP BY s.course_id
HAVING COUNT(s.student_id) > 1;

SELECT c.course_title, AVG(s.grade), COUNT(s.student_id)
FROM Students AS s
INNER JOIN Courses as c ON c.course_id = s.course_id
GROUP BY c.course_id, c.course_title;



