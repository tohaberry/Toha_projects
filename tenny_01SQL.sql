INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');

UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;

DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';

SELECT COUNT(column_name)
FROM table_name
WHERE condition;
The AVG() function returns the average value of a numeric column. 

AVG() Syntax
SELECT AVG(column_name)
FROM table_name
WHERE condition;
The SUM() function returns the total sum of a numeric column. 

SUM() Syntax
SELECT SUM(column_name)
FROM table_name
WHERE condition;


SELECT AVG(Price)
FROM Products;

SELECT SUM(Quantity)
FROM OrderDetails;

to select a single letter 
SELECT * FROM Customers
WHERE CustomerName LIKE 'a%';

        
		The following SQL statement selects all customers with a ContactName that starts with "a" and ends with "o":

Example
SELECT * FROM Customers
WHERE ContactName LIKE 'a%o';

SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;

SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID
ORDER BY Customers.CustomerName;

SELECT City FROM Customers
UNION
SELECT City FROM Suppliers
ORDER BY City;




SELECT
  COUNT(*) as total,
  COUNT(
    SELECT * from foo where score between 0 and 3;
  ) as low,
  COUNT(
    SELECT * from foo where score between 4 and 6;
  ) as mid,
  COUNT(
    SELECT * from foo where score between 7 and 10;
  ) as high
FROM foo;