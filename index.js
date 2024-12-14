const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Default user for XAMPP
    password: '', // Default password is empty
    database: 'television_networks'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});


// Channel Management Routes

// Get all channels
app.get('/api/channels', (req, res) => {
    db.query('SELECT * FROM channels', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Create a new channel
app.post('/api/channels', (req, res) => {
    const { name, status = 1 } = req.body; // Default active status
    if (status === 0) {
        return res.status(400).json({ message: 'Cannot create an inactive channel.' });
    }
    db.query('INSERT INTO channels (name, status) VALUES (?, ?)', [name, status], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: result.insertId, name, status });
    });
});

// Update a channel
app.put('/api/channels/:id', (req, res) => {
    const { id } = req.params;
    const { name, status } = req.body;
    db.query('UPDATE channels SET name = ?, status = ? WHERE id = ?', [name, status, id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ id, name, status });
    });
});

// Delete a channel
app.delete('/api/channels/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM channels WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json(err);
        res.sendStatus(204);
    });
});

// Get the count of active channels
app.get('/api/channels/count', (req, res) => {
    db.query('SELECT COUNT(*) AS count FROM channels WHERE status = 1', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json({ count: results[0].count });
    });
});


// Type Management Routes

// Get all types
app.get('/api/types', (req, res) => {
    db.query('SELECT * FROM types', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Create a new type
app.post('/api/types', (req, res) => {
    const { name } = req.body;
    db.query('INSERT INTO types (name) VALUES (?)', [name], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: result.insertId, name });
    });
});

// Update a type
app.put('/api/types/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    db.query('UPDATE types SET name = ? WHERE id = ?', [name, id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ id, name });
    });
});

// Delete a type
app.delete('/api/types/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM types WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json(err);
        res.sendStatus(204);
    });
});


// Category Management Routes
 

// Get all categories
app.get('/api/categories', (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Create a new category
app.post('/api/categories', (req, res) => {
    const { name } = req.body;
    db.query('INSERT INTO categories (name) VALUES (?)', [name], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: result.insertId, name });
    });
});

// Update a category
app.put('/api/categories/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    db.query('UPDATE categories SET name = ? WHERE id = ?', [name, id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ id, name });
    });
});

// Delete a category
app.delete('/api/categories/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM categories WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json(err);
        res.sendStatus(204);
    });
});

// Program Management Routes

// Get all programs
app.get('/api/programs', (req, res) => {
    db.query('SELECT * FROM programs', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Get a specific program by ID
app.get('/api/programs/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM programs WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.status(404).json({ message: 'Program not found' });
        res.json(results[0]);
    });
});

// Create a new program
app.post('/api/programs', (req, res) => {
    const { title, duration, description, typeId, channelId, categoryId, status = 1 } = req.body; // Default active status
    db.query('SELECT status FROM channels WHERE id = ?', [channelId], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0 || results[0].status === 0) {
            return res.status(400).json({ message: 'Cannot create a program with an inactive channel.' });
        }
        db.query('INSERT INTO programs (title, duration, description, typeId, channelId, categoryId, status) VALUES (?, ?, ?, ?, ?, ?, ?)', 
                 [title, duration, description, typeId, channelId, categoryId, status], (err, result) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({ id: result.insertId, title, status });
        });
    });
});

// Update a program
app.put('/api/programs/:id', (req, res) => {
    const { id } = req.params;
    const { title, duration, description, typeId, channelId, categoryId, status } = req.body;
    db.query('UPDATE programs SET title = ?, duration = ?, description = ?, typeId = ?, channelId = ?, categoryId = ?, status = ? WHERE id = ?', 
             [title, duration, description, typeId, channelId, categoryId, status, id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ id, title, status });
    });
});

// Delete a program
app.delete('/api/programs/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM programs WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json(err);
        res.sendStatus(204);
    });
});

// Get program count
app.get('/api/programs/count', (req, res) => {
    db.query('SELECT COUNT(*) AS count FROM programs', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json({ count: results[0].count });
    });
});

// Get channel count (active only)
app.get('/api/channels/count', (req, res) => {
    db.query('SELECT COUNT(*) AS count FROM channels WHERE status = 1', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json({ count: results[0].count });
    });
});


// User Login Route
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    // Check if username exists
    db.query('SELECT * FROM login WHERE username = ?', [username], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error.' });
        }
        
        // If user not found
        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        const user = results[0];

        // Compare password (assuming passwords are hashed)
        if (user.password !== password) { // In production, use a secure comparison method
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        // Successful login
        res.json({ message: 'Login successful', userId: user.id });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});