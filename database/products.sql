CREATE DATABASE IF NOT EXISTS products;
USE products;
CREATE TABLE IF NOT EXISTS products (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(120), description VARCHAR(120), price DECIMAL, image VARCHAR(120), category VARCHAR(30), PRIMARY KEY (id));

INSERT INTO products (name, description, price, image, category)
VALUES 
("Detangling Brush", "Designed for wet or dry hair. Gently detangles hair.", 30.00, "https://s7d5.scene7.com/is/image/Anthropologie/51174878_001_b?$an-category$&qlt=80&fit=constrain", "tools"),
("Shampoo", "Ideal for all hair types. This cleanser strengthens and moisturizes hair.", 20.00, "images/shampoo.jpg", "haircare"),
("Eyeliner", "Soft and creamy pencil blends effortlessly to achieve a range of looks.", 30.00, "images/redPencils.jpg", "makeup"),
("Brush Set", "Set of six brushes to blend, buff, blush, and contour like a professional.", 130.00, "images/blueBrushset.jpg", "makeup"),
("Premium Eyeliner", "Soft and creamy pencil blends effortlessly to achieve a range of looks.", 24.00, "images/goldEyeliner.jpg", "makeup"),
("Gift Set", "A six-piece set of bestsellers to treat your skin.", 120.00, "images/giftset.jpg", "gift"),
("Body Oil", "Luxurious body oil stimulates and moisturizes skin with marula oil.", 30.00, "images/bodyOil.jpg", "skincare"),
("Eyeshadow", "Highly pigmented shades to create neutral looks for both day and night", 90.00, "images/eyeshadow.jpg", "makeup"),
("Foundation", "Charlotte-owned skincare brand that provides healthier foundation alternatives", 39.00, "images/foundation.jpg", "makeup"),
("Crystal Facial Roller", "Reducing the appearance of fine lines and wrinkles with use.", 28.00, "https://s7d5.scene7.com/is/image/Anthropologie/48551378_030_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100", "skincare"),
("Dry Shampoo", "Absorbs excess oil and add volume and texture to your hair.", 20.00, "https://s7d5.scene7.com/is/image/Anthropologie/54415401_010_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100", "haircare"),
("Curling Cream", "Nourishes your hair while helping to define curls for a bouncy, frizz-free finish.", 30.00, "https://s7d5.scene7.com/is/image/Anthropologie/59450478_010_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=100", "haircare");