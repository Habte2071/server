const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const app = express();
const port = 3001;
const jwt = require('jsonwebtoken');



app.use(cors());
app.use(bodyParser.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '', 
    database: 'television_networks'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});



// Get all channels
app.get('/api/channels', (req, res) => {
    db.query('SELECT * FROM channels', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Create a new channel
app.post('/api/channels', (req, res) => {
    const { name, status = 1 } = req.body; 
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
    const { title, duration, description, typeId, channelId, categoryId, status = 1 } = req.body;
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

    if (!id) {
        return res.status(400).json({ error: 'Program ID is required' });
    }

    db.query('DELETE FROM programs WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Error executing delete query:', err);
            return res.status(500).json({ error: 'Failed to delete program' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Program not found' });
        }

        res.sendStatus(204); 
    });
});

// Get program count
app.get('/api/programs/count', (req, res) => {
    db.query('SELECT COUNT(*) AS count FROM programs WHERE status = 1', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        const count = results.length > 0 ? results[0].count : 0;
        res.json({ count });
    });
});


app.get('/api/channels/count', (req, res) => {
    db.query('SELECT COUNT(*) AS count FROM channels WHERE status = 1', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json({ count: results[0].count });
    });
});

const SECRET_KEY = '3x@mpl3K3y$D0nT$h@r3!';
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM login WHERE username = ?', [username], async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) {
            console.log('No user found with that username'); 
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const user = results[0];
        console.log('Retrieved user:', user); 

        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Password match result:', isMatch); 

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    });
});









app.post('/api/register', async (req, res) => {
    const { username, password, firstname, lastname, email, phone, role, department } = req.body;

    if (!username || !password || !firstname || !lastname || !email || !phone || !role || !department) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    db.query(
        'INSERT INTO login (username, password, firstname, lastname, email, phone, role, department) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [username, hashedPassword, firstname, lastname, email, phone, role, department],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'User registered successfully' });
        }
    );
});




// Search channels by name
app.get('/api/channels/search', (req, res) => {
    const search = req.query.name; // Get the search term from query parameters
    const sql = 'SELECT * FROM channels WHERE name LIKE ?';
    const params = [`%${search}%`]; // Use wildcards for partial matches

    db.query(sql, params, (err, results) => {
        if (err) {
            console.error("Database query error:", err); // Log any errors
            return res.status(500).json({ error: "Database query error" });
        }
        res.json(results); // Send the results as JSON
    });
});




// Get channels with pagination
app.get('/api/channels', (req, res) => {
    const page = Math.max(1, parseInt(req.query.page, 10) || 1); // Ensure page is at least 1
    const limit = Math.min(Math.max(1, parseInt(req.query.limit, 10) || 10), 100); // Limit between 1 and 100
    const offset = (page - 1) * limit;

    // Main query to fetch paginated channels
    const query = 'SELECT * FROM channels LIMIT ? OFFSET ?';
    db.query(query, [limit, offset], (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, error: "Failed to fetch channels.", details: err });
        }

        // Count total channels
        db.query('SELECT COUNT(*) AS total FROM channels', (err, countResults) => {
            if (err) {
                return res.status(500).json({ success: false, error: "Failed to fetch channel count.", details: err });
            }

            const totalChannels = countResults[0].total;
            const totalPages = Math.ceil(totalChannels / limit);

            res.json({
                success: true,
                data: {
                    page,
                    totalPages,
                    totalChannels,
                    channels: results,
                },
            });
        });
    });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});