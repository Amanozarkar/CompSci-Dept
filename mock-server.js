const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;
const USERS_FILE = path.join(__dirname, 'users.json');

// Initialize users file if it doesn't exist
if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([
        
        { email: "teacher@school.com", password: "teach123", name: "John Doe", role: "teacher" },
        { email: "student@school.com", password: "learn123", name: "Jane Smith", role: "student" }
    ], null, 2));
}

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// API Routes
app.post('/api/signup', (req, res) => {
    const { name, email, password, role } = req.body;
    
    if (!name || !email || !password || !role) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const users = JSON.parse(fs.readFileSync(USERS_FILE));
    
    if (users.some(user => user.email === email)) {
        return res.status(400).json({ error: 'Email already registered' });
    }

    const newUser = { 
        name, 
        email, 
        password, // In production, hash this password!
        role, 
        createdAt: new Date().toISOString() 
    };
    
    users.push(newUser);
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    
    res.json({ success: true });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const users = JSON.parse(fs.readFileSync(USERS_FILE));
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    res.json({ 
        success: true,
        user: {
            name: user.name,
            email: user.email,
            role: user.role
        }
    });
});

// Serve your main HTML file for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`API Endpoints:
  - POST /api/signup
  - POST /api/login`);
});