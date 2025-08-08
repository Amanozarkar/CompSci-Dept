// Authentication functions
export async function loginUser(email, password) {
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        return await response.json();
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, message: 'Network error' };
    }
}

export async function generateResetToken(email) {
    try {
        const response = await fetch('/api/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });
        
        return await response.json();
    } catch (error) {
        console.error('Password reset error:', error);
        return { success: false, message: 'Failed to generate reset token' };
    }
}

export function setRememberMe(email) {
    localStorage.setItem('rememberedEmail', email);
}

export function getRememberedEmail() {
    return localStorage.getItem('rememberedEmail');
}