import pool from './db.js';

export const query1 = async () => {
    try {
        const [rows] = await pool.query(
            "SELECT COUNT(*) AS total FROM customers WHERE country = 'France';"
        );
        return rows[0].total;
    } catch (err) {
        console.error(err);

    }
};

export const query2 = async () => {
    try {
        const [rows] = await pool.query(
            "SELECT firstName, lastName FROM employees WHERE reportsTo = 1143;"
        );
        return rows;
    } catch (err) {
        console.error(err);

    }
};

export const query3 = async () => {
    try {
        const [rows] = await pool.query(
            "SELECT SUM(quantityInStock) AS total FROM products WHERE productLine = 'Classic Cars';"
        );
        return rows[0].total;
    } catch (err) {
        console.error(err);

    }
};