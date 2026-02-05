USE w3schools;

SELECT o.OrderID, c.CustomerName, e.FirstName, s.ShipperName
FROM Orders AS o
	INNER JOIN Customers as c
		ON o.CustomerID = c.CustomerID
	INNER JOIN Employees as e
		ON o.EmployeeID = e.EmployeeID
	INNER JOIN Shippers as s
		ON o.ShipperID = s.ShipperID
LIMIT 5;

SELECT s.ShipperName, COUNT(o.OrderID) AS TotalOrders
FROM Orders AS o
	INNER JOIN Shippers as s
		ON o.ShipperID = s.ShipperID
GROUP BY s.ShipperID, s.ShipperName;

SELECT c.CustomerName, COUNT(o.OrderID) AS TotalOrders
FROM Orders AS o
	INNER JOIN Customers as c
		ON o.CustomerID = c.CustomerID
WHERE o.OrderDate > '1996-12-31'
GROUP BY c.CustomerID, c.CustomerName
HAVING TotalOrders > 2
ORDER BY TotalOrders DESC;

SELECT c.CustomerName, COUNT(o.OrderID) AS TotalOrders
FROM Orders AS o
	INNER JOIN Customers as c
		ON o.CustomerID = c.CustomerID
WHERE o.OrderDate > '1996-12-31'
GROUP BY c.CustomerID, c.CustomerName
ORDER BY TotalOrders DESC
LIMIT 1;

SELECT e.FirstName, e.LastName, COUNT(o.OrderID) AS TotalOrders
FROM Orders AS o
	INNER JOIN Employees as e
		ON o.EmployeeID = e.EmployeeID
GROUP BY e.EmployeeID, e.FirstName, e.LastName
ORDER BY TotalOrders DESC
LIMIT 5;