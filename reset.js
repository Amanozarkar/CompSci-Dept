import { generateResetToken, validateResetToken, resetPassword, validatePassword } from './auth.js';

class PasswordReset {
    constructor() {
        this.requestForm = document.getElementById('requestResetForm');
        this.newPasswordForm = document.getElementById('newPasswordForm');
        this.resetError = document.getElementById('reset-error');
        this.resetSuccess = document.getElementById('reset-success');
        this.passwordError = document.getElementById('password-error');
        this.passwordSuccess = document.getElementById('password-success');
        this.resetSubtitle = document.getElementById('reset-subtitle');
        
        this.token = new URLSearchParams(window.location.search).get('token');
        this.email = new URLSearchParams(window.location.search).get('email');
        
        this.init();
    }
    
    init() {
        if (this.token && this.email) {
            this.showNewPasswordForm();
        }
        
        this.requestForm.addEventListener('submit', (e) => this.handleResetRequest(e));
        this.newPasswordForm.addEventListener('submit', (e) => this.handlePasswordUpdate(e));
        document.getElementById('newPassword').addEventListener('input', () => this.showPasswordRequirements());
    }
    
    showNewPasswordForm() {
        this.requestForm.style.display = 'none';
        this.newPasswordForm.style.display = 'block';
        this.resetSubtitle.textContent = 'Enter your new password';
    }
    
    showPasswordRequirements() {
        const password = document.getElementById('newPassword').value;
        const validation = validatePassword(password);
        
        const requirements = document.getElementById('password-requirements');
        requirements.innerHTML = `
            <strong>Password Requirements:</strong>
            <ul>
                <li class="${validation.requirements.minLength ? 'valid' : 'invalid'}">At least 8 characters</li>
                <li class="${validation.requirements.hasUpperCase ? 'valid' : 'invalid'}">At least one uppercase letter</li>
                <li class="${validation.requirements.hasLowerCase ? 'valid' : 'invalid'}">At least one lowercase letter</li>
                <li class="${validation.requirements.hasNumbers ? 'valid' : 'invalid'}">At least one number</li>
                <li class="${validation.requirements.hasSpecialChars ? 'valid' : 'invalid'}">At least one special character</li>
            </ul>
        `;
    }
    
    async handleResetRequest(e) {
        e.preventDefault();
        this.resetError.textContent = '';
        this.resetSuccess.textContent = '';
        
        const email = document.getElementById('resetEmail').value.trim();
        
        if (!email) {
            this.resetError.textContent = 'Please enter your email';
            return;
        }
        
        const token = generateResetToken(email);
        
        if (token) {
            this.resetSuccess.textContent = `Password reset link has been sent to ${email}. 
                This is a demo - in a real app you would receive an email with a link like:
                reset-password.html?token=${token}&email=${encodeURIComponent(email)}`;
            
            console.log(`Reset link: reset-password.html?token=${token}&email=${encodeURIComponent(email)}`);
        } else {
            this.resetError.textContent = 'No account found with that email address';
        }
    }
    
    async handlePasswordUpdate(e) {
        e.preventDefault();
        this.passwordError.textContent = '';
        this.passwordSuccess.textContent = '';
        
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Validate token
        if (!validateResetToken(this.token, this.email)) {
            this.passwordError.textContent = 'Invalid or expired reset link';
            return;
        }
        
        // Validate passwords
        if (newPassword !== confirmPassword) {
            this.passwordError.textContent = 'Passwords do not match';
            return;
        }
        
        const passwordValidation = validatePassword(newPassword);
        if (!passwordValidation.isValid) {
            this.passwordError.textContent = 'Password does not meet requirements';
            return;
        }
        
        // Update password
        if (resetPassword(this.email, newPassword)) {
            this.passwordSuccess.textContent = 'Password has been reset successfully!';
            
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        } else {
            this.passwordError.textContent = 'Failed to reset password';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PasswordReset();
});