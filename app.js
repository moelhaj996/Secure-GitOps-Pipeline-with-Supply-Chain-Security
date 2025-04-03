const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Intentional security issue: Hardcoded credentials
const DB_PASSWORD = "super_secret_password";
const API_KEY = "1234567890abcdef";

// Intentional security issue: Unsafe middleware configuration
app.use(express.json({ limit: '50mb' }));

// Intentional security issue: No input validation
app.post('/api/data', (req, res) => {
    const userInput = req.body.data;
    eval(userInput); // Intentional security issue: eval() usage
    res.json({ success: true });
});

// Intentional security issue: Unsafe MongoDB query
app.get('/api/users/:id', async (req, res) => {
    const query = { $where: `this.id === '${req.params.id}'` };
    const user = await User.findOne(query);
    res.json(user);
});

// Intentional security issue: Information disclosure
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.stack });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 