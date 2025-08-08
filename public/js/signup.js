class SignupForm {
    constructor() {
        this.form = document.getElementById('signupForm');
        this.submitButton = this.form.querySelector('.login-btn');
        this.init();
    }
    
    init() {
        this.bindEvents();
    }
    
    bindEvents() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Role selection
        document.querySelectorAll('.role-card').forEach(card => {
            card.addEventListener('click', () => {
                document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                document.getElementById('role').value = card.dataset.role;
            });
        });
        
        // Password toggles
        document.getElementById('signupPasswordToggle').addEventListener('click', () => {
            this.togglePasswordVisibility('newPassword', 'signupPasswordToggle');
        });
        
        document.getElementById('confirmPasswordToggle').addEventListener('click', () => {
            this.togglePasswordVisibility('confirmPassword', 'confirmPasswordToggle');
        });
    }
    
    togglePasswordVisibility(inputId, toggleId) {
        const input = document.getElementById(inputId);
        const type = input.type === 'password' ? 'text' : 'password';
        input.type = type;
        document.getElementById(toggleId).querySelector('.toggle-icon')
            .classList.toggle('show-password', type === 'text');
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) return;
        
        this.setLoading(true);
        
        try {
            const userData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('newEmail').value.trim(),
                password: document.getElementById('newPassword').value,
                role: document.getElementById('role').value
            };
            
            // Send to server
            const response = await fetch('http://localhost:3001/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Signup failed');
            }
            
            // Redirect to login page after successful signup
            window.location.href = 'login.html?signupSuccess=true';
            
        } catch (error) {
            alert(error.message);
        } finally {
            this.setLoading(false);
        }
    }
    
    validateForm() {
        let isValid = true;
        
        // Validate name
        if (!document.getElementById('name').value.trim()) {
            this.showError('name', 'Full name is required');
            isValid = false;
        }
        
        // Validate email
        const email = document.getElementById('newEmail').value.trim();
        if (!email) {
            this.showError('email', 'Email is required');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            this.showError('email', 'Invalid email format');
            isValid = false;
        }
        
        // Validate password
        const password = document.getElementById('newPassword').value;
        if (!password) {
            this.showError('password', 'Password is required');
            isValid = false;
        } else if (password.length < 6) {
            this.showError('password', 'Password must be at least 6 characters');
            isValid = false;
        }
        
        // Validate confirm password
        if (password !== document.getElementById('confirmPassword').value) {
            this.showError('confirmPassword', 'Passwords do not match');
            isValid = false;
        }
        
        // Validate role
        if (!document.getElementById('role').value) {
            this.showError('role', 'Please select your role');
            isValid = false;
        }
        
        return isValid;
    }
    
    showError(field, message) {
        const errorElement = document.getElementById(`${field}Error`);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
        
        const input = document.getElementById(field);
        if (input) input.closest('.form-group')?.classList.add('error');
    }
    
    setLoading(loading) {
        this.submitButton.classList.toggle('loading', loading);
        this.submitButton.disabled = loading;
    }
}

document.addEventListener('DOMContentLoaded', () => new SignupForm());