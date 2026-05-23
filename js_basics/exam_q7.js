// Example 1: SLA Violated
let responseTimes = [120, 230, 450, 510, 180, 620];
const SLA_LIMIT = 500;

console.log("=== Example 1: SLA Violated ===");
analyzePerformance(responseTimes, SLA_LIMIT);

// Example 2: All Responses Within SLA
console.log("\n=== Example 2: All Responses Within SLA ===");
responseTimes = [100, 150, 200, 250, 300, 400];
analyzePerformance(responseTimes, SLA_LIMIT);

// Example 3: Mixed Scenario
console.log("\n=== Example 3: Mixed Scenario (High Variance) ===");
responseTimes = [50, 480, 520, 600, 100, 490, 510, 99];
analyzePerformance(responseTimes, SLA_LIMIT);

// Function to analyze performance metrics using while loop
function analyzePerformance(responseTimes, slaLimit) {
    let index = 0;
    let minResponse = responseTimes[0];
    let maxResponse = responseTimes[0];
    let totalTime = 0;
    let slaBreaches = 0;

    // Use while loop to iterate through response times
    while (index < responseTimes.length) {
        const responseTime = responseTimes[index];

        // Track min using comparison operators
        if (responseTime < minResponse) {
            minResponse = responseTime;
        }

        // Track max using comparison operators
        if (responseTime > maxResponse) {
            maxResponse = responseTime;
        }

        // Accumulate total time for average calculation
        totalTime += responseTime;

        // Count SLA breaches
        if (responseTime > slaLimit) {
            slaBreaches++;
        }

        index++;
    }

    // Calculate metrics
    const totalRequests = responseTimes.length;
    const avgResponse = (totalTime / totalRequests).toFixed(2);
    const slaBreachPercentage = ((slaBreaches / totalRequests) * 100).toFixed(2);

    // Determine overall status
    const overallStatus = slaBreaches === 0 ? "✅ SLA MET" : "❌ SLA VIOLATED";

    // Print performance report
    console.log(`Total Requests: ${totalRequests}`);
    console.log(`Min Response: ${minResponse}ms`);
    console.log(`Max Response: ${maxResponse}ms`);
    console.log(`Average Response: ${avgResponse}ms`);
    console.log(`SLA Breaches: ${slaBreaches} (${slaBreachPercentage}%)`);
    console.log(`SLA Limit: ${slaLimit}ms`);
    console.log(`Overall Status: ${overallStatus}`);
}
