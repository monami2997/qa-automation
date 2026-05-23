let frequency = "always";
let impact = "blocker";
console.log("P0 - Critical");
classifyBugSeverity("Checkout page crashes on applying coupon", frequency, impact);

console.log("P1 - High Priority");
frequency = "always";
impact = "major";
classifyBugSeverity("Login form submission fails intermittently", frequency, impact);

console.log("P2 - Medium Priority");
frequency = "often";
impact = "blocker";
classifyBugSeverity("Dashboard search takes 10 seconds to load", frequency, impact);

console.log("P3 - Low Priority");
frequency = "often";
impact = "minor";
classifyBugSeverity("Navigation menu alignment issue on mobile", frequency, impact);

console.log("P4 - Lowest Priority");
frequency = "rarely";
impact = "minor";
classifyBugSeverity("Font color inconsistency in tooltip", frequency, impact);

function classifyBugSeverity(bugTitle, frequency, impact) {
    let priority;
    let severity;
    let message;

    if (frequency === "always") {
        if (impact === "blocker") {
            priority = "P0";
            severity = "Critical";
            message = "Stop release immediately";
        } else if (impact === "major") {
            priority = "P1";
            severity = "High";
            message = "Fix before release";
        } else if (impact === "minor") {
            priority = "P2";
            severity = "Medium";
            message = "Fix in next iteration if time permits";
        }
    } else if (frequency === "often") {
        if (impact === "blocker") {
            priority = "P1";
            severity = "High";
            message = "Fix before release";
        } else if (impact === "major") {
            priority = "P2";
            severity = "Medium";
            message = "Fix in next iteration if time permits";
        } else if (impact === "minor") {
            priority = "P3";
            severity = "Low";
            message = "Can be deferred to future release";
        }
    } else if (frequency === "rarely") {
        if (impact === "blocker") {
            priority = "P2";
            severity = "Medium";
            message = "Fix in next iteration if time permits";
        } else if (impact === "major") {
            priority = "P3";
            severity = "Low";
            message = "Can be deferred to future release";
        } else if (impact === "minor") {
            priority = "P4";
            severity = "Lowest";
            message = "Document and consider for backlog";
        }
    } else {
        priority = "UNKNOWN";
        severity = "Unclassified";
        message = "Invalid frequency or impact value";
    }

    console.log(`Bug Title: ${bugTitle}`);
    console.log(`Frequency: ${frequency}`);
    console.log(`Impact: ${impact}`);
    console.log(`Severity: ${priority} - ${severity}: ${message}`);
}
