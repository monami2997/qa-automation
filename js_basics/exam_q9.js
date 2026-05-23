// Using var for global counter (global scope - accessible across function calls)
var globalAttemptCounter = 0;

// Using const for fixed values (credentials, threshold)
const VALID_CREDENTIALS = {
    username: "admin@testingacademy.com",
    password: "Test@1234"
};
const MAX_FAILED_ATTEMPTS = 3;

// Example 1: Account locked after 3 failures
console.log("=== Example 1: Brute Force Attack (3 Failed Attempts) ===");
const attempts1 = [
    { username: "admin@testingacademy.com", password: "wrong123" },
    { username: "admin@testingacademy.com", password: "wrongpass" },
    { username: "admin@testingacademy.com", password: "incorrect" },
    { username: "admin@testingacademy.com", password: "Test@1234" }
];
processLoginAttempts(attempts1);

// Example 2: Successful login on first attempt
console.log("\n=== Example 2: Successful Login (First Attempt) ===");
const attempts2 = [
    { username: "admin@testingacademy.com", password: "Test@1234" }
];
processLoginAttempts(attempts2);

// Example 3: Successful login after 2 failed attempts
console.log("\n=== Example 3: Successful Login (After 2 Failures) ===");
const attempts3 = [
    { username: "admin@testingacademy.com", password: "wrong1" },
    { username: "admin@testingacademy.com", password: "wrong2" },
    { username: "admin@testingacademy.com", password: "Test@1234" }
];
processLoginAttempts(attempts3);

// Function to process login attempts using do...while loop
function processLoginAttempts(loginAttempts) {
    // Using let for loop variables (block scope)
    let attemptIndex = 0;
    let failedAttempts = 0;
    let isAccountLocked = false;
    let isLoginSuccessful = false;

    // Reset global counter for each function call
    globalAttemptCounter = 0;

    // Use do...while loop to process login attempts
    do {
        globalAttemptCounter++;
        attemptIndex++;

        // Using let for current attempt data
        let currentAttempt = loginAttempts[attemptIndex - 1];

        // Validate credentials using strict equality (===) and logical operators (&&)
        let isUsernameValid = currentAttempt.username === VALID_CREDENTIALS.username;
        let isPasswordValid = currentAttempt.password === VALID_CREDENTIALS.password;
        let areCredentialsCorrect = isUsernameValid && isPasswordValid;

        if (isAccountLocked) {
            // Account is locked - reject attempt
            console.log(`Attempt ${attemptIndex}: 🔒 ACCOUNT LOCKED - Rejected`);
            isLoginSuccessful = false;
        } else if (areCredentialsCorrect) {
            // Login successful
            console.log(`Attempt ${attemptIndex}: ✅ SUCCESS - Login approved`);
            isLoginSuccessful = true;
        } else {
            // Failed attempt
            failedAttempts++;
            console.log(`Attempt ${attemptIndex}: ❌ FAILED - Strike ${failedAttempts}/${MAX_FAILED_ATTEMPTS}`);

            // Check if account should be locked
            if (failedAttempts === MAX_FAILED_ATTEMPTS) {
                isAccountLocked = true;
                console.log("🚨 ACCOUNT LOCKED");
            }
        }

    } while (attemptIndex < loginAttempts.length && !isLoginSuccessful && !isAccountLocked);

    // Print summary
    console.log("\n--- Login Summary ---");
    console.log(`Total Attempts: ${globalAttemptCounter}`);
    console.log(`Failed Attempts: ${failedAttempts}`);
    console.log(`Account Status: ${isAccountLocked ? "🔒 LOCKED" : "🔓 ACTIVE"}`);
    console.log(`Login Status: ${isLoginSuccessful ? "✅ SUCCESSFUL" : "❌ FAILED"}`);
}
