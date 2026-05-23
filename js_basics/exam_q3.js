let attempts = 0;
const max_attempts = 5;
let success = false;

do {
    attempts++;
    const randomValue = Math.random();
    const isSuccess = randomValue > 0.6;

    if (isSuccess) {
        success = true;
        console.log(`Attempt ${attempts}: ✅ SUCCESS (Response 200 OK)`);
    } else {
        console.log(`Attempt ${attempts}: ❌ FAILED (Timeout/Error)`);
    }

} while (!success && attempts < max_attempts);

if (success) {
    console.log(`API call PASSED after ${attempts} attempt(s).`);
} else {
    console.log(`API call FAILED after ${max_attempts} attempts.`);
}
