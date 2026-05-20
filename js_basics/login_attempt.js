// Track failed login attempts and lock the account after 3 failed attempts.
const failedAttempts = 3;
if (failedAttempts >= 3) {
        console.log("🔒 Account Locked — Contact support");
    } 
else if (failedAttempts === 2) {
        console.log("1 attempt left before lockout");
    }
 else if (failedAttempts === 1) {
        console.log('2 attempts left before logout');
    } 
else {
        console.log("Login successful");
    }

