// Initialize with demo users if none exist
const initDatabase = () => {
    if (!localStorage.getItem('users')) {
        const demoUsers = [
            {
                id: 1,
                email: 'student@school.edu',
                password: 'student123',
                username: 'student1',
                role: 'student',
                division: 'A',
                year: 'third',
                fullName: 'John Student'
            },
            {
                id: 2,
                email: 'teacher@school.edu',
                password: 'teacher123',
                username: 'teacher1',
                role: 'teacher',
                subjects: ['Mathematics', 'Physics'],
                fullName: 'Jane Teacher'
            },
            {
                id: 3,
                email: 'admin@school.edu',
                password: 'admin123',
                username: 'admin',
                role: 'admin',
                fullName: 'Admin User'
            }
        ];
        localStorage.setItem('users', JSON.stringify(demoUsers));
        localStorage.setItem('passwordResetTokens', JSON.stringify([]));
    }
};

// Auto-store new users on login
const storeNewUser = (email, password) => {
    const users = getUsers();
    
    // Check if user already exists
    if (!users.some(user => user.email === email)) {
        const newUser = {
            id: users.length + 1,
            email,
            password, // Note: In real apps, NEVER store plain text passwords
            username: email.split('@')[0],
            role: 'student', // Default role
            fullName: 'New User',
            division: 'A',
            year: 'first'
        };
        
        users.push(newUser);
        setUsers(users);
        return newUser;
    }
    return null;
};

const getUsers = () => JSON.parse(localStorage.getItem('users')) || [];
const setUsers = (users) => localStorage.setItem('users', JSON.stringify(users));

// Initialize database
initDatabase();

export { getUsers, setUsers, storeNewUser };