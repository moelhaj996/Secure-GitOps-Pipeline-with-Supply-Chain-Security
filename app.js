const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Define User Schema properly
const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String
});

const User = mongoose.model('User', userSchema);

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

// Updated MongoDB query to use safer methods
app.get('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Improved error handler with less information disclosure
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.error('MongoDB connection error:', err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 