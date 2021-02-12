CREATE DATABASE IF NOT EXISTS products;
USE products;
CREATE TABLE IF NOT EXISTS products (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(120), description VARCHAR(120), price DECIMAL, image VARCHAR(120), category VARCHAR(30), PRIMARY KEY (id));

INSERT INTO products (name, description, price, image, category)
VALUES 
("Salon Tools", "Salon Latori this is Kat test. Lorem ipsum lorem haircare", 300.00, "images/salonTools.jpg", "tools"),
("Shampoo", "Salon Latori ipsum lorem. Lorem ipsum lorem haircare", 20.00, "images/shampoo.jpg", "haircare"),
("Eyeliner", "Salon Latori ipsum lorem. Lorem ipsum lorem haircare", 30.00, "images/redPencils.jpg", "makeup"),
("Brush Set", "Salon Latori ipsum lorem. Lorem ipsum lorem haircare", 130.00, "images/blueBrushset.jpg", "makeup"),
("Premium Eyeliner", "Salon Latori ipsum lorem. Lorem ipsum lorem haircare", 24.00, "images/goldEyeliner.jpg", "makeup"),
("Gift Set", "Salon Latori ipsum lorem. Lorem ipsum lorem haircare", 120.00, "images/giftset.jpg", "gift"),
("Body Oil", "Salon Latori ipsum lorem. Lorem ipsum lorem haircare", 30.00, "images/bodyOil.jpg", "skincare"),
("Eyeshadow", "Salon Latori ipsum lorem. Lorem ipsum lorem haircare", 90.00, "images/eyeshadow.jpg", "makeup"),
("Foundation", "Salon Latori ipsum lorem. Lorem ipsum lorem haircare", 39.00, "images/foundation.jpg", "makeup"),
("Crystal Facial Roller", "Salon Latori ipsum lorem. Lorem ipsum lorem haircare", 28.00, "https://s7d5.scene7.com/is/image/Anthropologie/48551378_030_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100", "skincare"),
("Dry Shampoo", "Salon Latori ipsum lorem. Lorem ipsum lorem haircare", 20.00, "https://s7d5.scene7.com/is/image/Anthropologie/54415401_010_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100", "haircare"),
("Curling Cream", "Salon Latori ipsum lorem. Lorem ipsum lorem haircare", 30.00, "https://s7d5.scene7.com/is/image/Anthropologie/59450478_010_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100", "haircare");