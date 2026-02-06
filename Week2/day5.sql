USE w3schools;

/*
	I used Cluade Sonnet 4.5 to generate some sample
    bussines questions for me to answer using SQL querys.
    Here is the exact prompt I used "Based on the data provided
    in this SQL give me 5 business questions I could answer by
    querying this data. Don't provide me with the actual SQL queries
    or any hints". I also provided the LLM with the database schema.
    
    Here was the LLM's response:
		"1. Which employees are the top performers in terms of total sales revenue
        generated, and how does their performance compare across different time periods?
        
		2. What are the most profitable product categories, and which suppliers are providing
        the best-selling products in those categories?
        
        3. Which customers have the highest order frequency and total spending, and what geographic
        patterns emerge from customer purchasing behavior?
        
		4. How does shipping carrier selection correlate with order volume and customer location,
        and are there opportunities to optimize shipping costs?
        
		5. What seasonal or temporal trends exist in product demand, and how can inventory planning
        be improved based on historical order patterns?"
*/

# Which employees are the top performers in terms of total sales revenue generated?
SELECT concat(e.FirstName, ' ', e.LastName) AS employee_name, round(sum(p.price * od.quantity), 2) AS total_revenue_generated,
	count(DISTINCT o.orderID) AS orders_fulfilled
FROM Employees as e
	JOIN Orders as o
		ON e.EmployeeID = o.EmployeeID
	JOIN OrderDetails as od
		on o.OrderID = od.OrderID
	JOIN Products as p
		on od.ProductID = p.ProductID
GROUP BY e.EmployeeID, employee_name
ORDER BY total_revenue_generated DESC, orders_fulfilled DESC;

# Which high valaue customers have the highest order frequency, and what geographic patterns emerge?
SELECT c.CustomerName, c.City, c.Country, ROUND(SUM(p.Price * od.Quantity), 2) AS total_spending,
	COUNT(DISTINCT o.OrderID) as order_count, ROUND((SUM(p.Price * od.Quantity) / COUNT(DISTINCT o.OrderID)), 2) as avg_order_cost
FROM Customers AS c
	JOIN Orders AS o
		ON c.CustomerID = o.CustomerID
	JOIN OrderDetails as od
		ON o.OrderID = od.OrderID
	JOIN Products as p
		ON od.ProductID = p.ProductID
GROUP BY c.CustomerID, c.CustomerName, c.City, c.Country
HAVING total_spending >= 20000
ORDER BY order_count DESC, total_spending DESC;

# Who were our top Suppliers in 1996?
SELECT s.SupplierName, s.City, s.Country, COUNT(DISTINCT o.OrderID) AS fuffiled_orders,
	ROUND(SUM(p.Price * od.Quantity), 2) AS fuffiled_revenue
FROM Suppliers as s
	JOIN Products as p
		ON s.SupplierID = p.SupplierID
	JOIN OrderDetails as od
		ON p.ProductID = od.ProductID
	JOIN Orders as o
		ON od.OrderID = o.OrderID
WHERE o.OrderDate BETWEEN '1996-01-01' AND  '1996-12-31'
GROUP BY s.SupplierID, s.SupplierName
ORDER BY fuffiled_orders DESC, fuffiled_revenue DESC
LIMIT 10;
	
# Find our top customer in 1996
SELECT c.CustomerName, c.City, c.Country, ROUND(SUM(p.Price * od.Quantity), 2) AS total_spending,
	COUNT(DISTINCT o.OrderID) as order_count, ROUND((SUM(p.Price * od.Quantity) / COUNT(DISTINCT o.OrderID)), 2) as avg_order_cost
FROM Customers AS c
	JOIN Orders AS o
		ON c.CustomerID = o.CustomerID
	JOIN OrderDetails as od
		ON o.OrderID = od.OrderID
	JOIN Products as p
		ON od.ProductID = p.ProductID
WHERE o.OrderDate BETWEEN '1996-01-01' AND  '1996-12-31'
GROUP BY c.CustomerID, c.CustomerName, c.City, c.Country
ORDER BY total_spending DESC, order_count DESC
LIMIT 1;
