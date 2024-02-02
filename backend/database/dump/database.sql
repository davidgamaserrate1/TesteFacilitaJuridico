------------------
-- CLIENT TABLE
------------------
CREATE TABLE client (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    mail VARCHAR(50) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    x_coordinate INTEGER NOT NULL
    y_coordinate INTEGER NOT NULL
);
