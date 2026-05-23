
// Using var for global counters (global scope)
var globalTestCounter = 0;
var globalPassCount = 0;
var globalFailCount = 0;
var globalErrorCount = 0;

// Using const for fixed values and configuration
const TEST_ID_PREFIX = "TC-";
const TEST_CASES = [
    { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
    { name: "Login response has token", actual: "abc123token", expected: "abc123token", type: "strictEqual" },
    { name: "User ID matches", actual: 42, expected: "42", type: "looseEqual" },
    { name: "API response is not null", actual: { data: "test" }, expected: null, type: "notNull" },
    { name: "Error message is string", actual: "Connection timeout", expected: "string", type: "typeCheck" },
    { name: "Array is truthy", actual: [1, 2, 3], expected: true, type: "truthy" },
    { name: "Response time less than 1000ms", actual: 750, expected: 1000, type: "lessThan" },
    { name: "Retry count is 5", actual: 5, expected: 5, type: "strictEqual" },
    { name: "Database connection successful", actual: true, expected: true, type: "strictEqual" },
    { name: "Empty array length check", actual: [].length, expected: 0, type: "strictEqual" }
];

// Using let for result storage
let testResults = [];

// ===== FOR LOOP: Run all test cases =====
console.log("=== Running All Tests ===\n");
for (let i = 0; i < TEST_CASES.length; i++) {
    // Using let for loop variables
    let testCase = TEST_CASES[i];
    let testId = `${TEST_ID_PREFIX}${String(i + 1).padStart(2, "0")}`;

    globalTestCounter++;

    // Execute test and store result
    let testResult = executeTest(testId, testCase);
    testResults.push(testResult);

    // Print individual test result
    let statusIcon = testResult.passed ? "✅" : "❌";
    console.log(`${statusIcon} ${testId}: ${testCase.name} → ${testResult.status}`);
    console.log(`   ${testResult.details}`);
}

// ===== WHILE LOOP: Find consecutive passes from start =====
console.log("\n=== Analyzing Consecutive Passes from Start ===");
let consecutivePassIndex = 0;
while (consecutivePassIndex < testResults.length && testResults[consecutivePassIndex].passed) {
    consecutivePassIndex++;
}
let consecutivePasses = consecutivePassIndex;
console.log(`Consecutive passes from start: ${consecutivePasses} test(s)`);

// ===== DO...WHILE: Find first failure =====
console.log("\n=== Finding First Failure ===");
let firstFailureIndex = -1;
let searchIndex = 0;
do {
    if (!testResults[searchIndex].passed) {
        firstFailureIndex = searchIndex;
        break;
    }
    searchIndex++;
} while (searchIndex < testResults.length);

// Using ternary operator to display first failure
let firstFailureMessage = firstFailureIndex !== -1
    ? `First failure: ${TEST_ID_PREFIX}${String(firstFailureIndex + 1).padStart(2, "0")} - ${TEST_CASES[firstFailureIndex].name}`
    : "All tests passed! 🎉";
console.log(firstFailureMessage);

// Using let for calculated metrics
let passedTests = testResults.filter(result => result.passed).length;
let failedTests = testResults.filter(result => !result.passed).length;
let passRate = (passedTests / testResults.length * 100).toFixed(2);

// Using const for report labels
const REPORT_LABELS = {
    total: "Total Tests:",
    passed: "Passed:",
    failed: "Failed:",
    passRate: "Pass Rate:",
    status: "Overall Status:"
};

// Display summary report
console.log(`${REPORT_LABELS.total.padEnd(20)} ${testResults.length}`);
console.log(`${REPORT_LABELS.passed.padEnd(20)} ${passedTests}`);
console.log(`${REPORT_LABELS.failed.padEnd(20)} ${failedTests}`);
console.log(`${REPORT_LABELS.passRate.padEnd(20)} ${passRate}%`);

// Using ternary operator for overall status
let overallStatus = passedTests === testResults.length
    ? "✅ PASSED"
    : failedTests <= 2
        ? "⚠️ WARNING"
        : "❌ FAILED";
console.log(`${REPORT_LABELS.status.padEnd(20)} ${overallStatus}`);

console.log("\n" + "═".repeat(56) + "\n");

// Function to execute individual test
function executeTest(testId, testCase) {
    // Using let for local test variables
    let passed = false;
    let details = "";

    // Using switch for different comparison types
    switch (testCase.type) {
        case "strictEqual":
            // Strict equality (===)
            passed = testCase.actual === testCase.expected;
            details = `${testCase.actual} === ${testCase.expected}`;
            break;

        case "looseEqual":
            // Loose equality (==)
            passed = testCase.actual == testCase.expected;
            details = `${testCase.actual} == ${testCase.expected}`;
            break;

        case "notEqual":
            // Not equal (!==)
            passed = testCase.actual !== testCase.expected;
            details = `${testCase.actual} !== ${testCase.expected}`;
            break;

        case "typeCheck":
            // typeof check
            passed = typeof testCase.actual === testCase.expected;
            details = `typeof ${testCase.actual} === "${testCase.expected}"`;
            break;

        case "truthy":
            // Truthy check (using logical operator)
            passed = !!testCase.actual === testCase.expected;
            details = `Truthy value check: ${!!testCase.actual}`;
            break;

        case "lessThan":
            // Comparison operator
            passed = testCase.actual < testCase.expected;
            details = `${testCase.actual} < ${testCase.expected}`;
            break;

        case "notNull":
            // Nullish coalescing check
            passed = (testCase.actual ?? null) !== testCase.expected;
            details = `${testCase.actual ?? "undefined"} !== null`;
            break;

        default:
            passed = false;
            details = `Unknown test type: ${testCase.type}`;
    }

    // Track counts using if-else with logical operators
    if (passed) {
        globalPassCount++;
    } else {
        globalFailCount++;
    }

    // Using ternary to set status
    let status = passed ? "PASS" : "FAIL";

    return {
        passed: passed,
        status: status,
        details: details,
        type: testCase.type
    };
}
