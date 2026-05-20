// Track failed login attempts and lock the account after 3 failed attempts.
const failedAttempts = 3;
if (failedAttempts >= 3) {
        console.log('Account locked due to 3 or more failed login attempts.');
    } 
else if (failedAttempts === 2) {
        console.log('Warning: 2 failed attempts. One more will lock the account.');
    }
 else if (failedAttempts === 1) {
        console.log('Login failed once. You have 2 attempts left.');
    } 
else {
        console.log('No failed attempts. Account is active.');
    }

