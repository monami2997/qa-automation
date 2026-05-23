let isPresent = true;
let isDisplayed = true;
let isEnabled = false;


validateElementState(isPresent, isDisplayed, isEnabled);



function validateElementState(isPresent, isDisplayed, isEnabled) {

    let status;
    if (!isPresent) {
        status = "NOT FOUND";
    } else if (isPresent && isDisplayed && isEnabled) {
        status = "READY";
    } else if (isPresent && isDisplayed && !isEnabled) {
        status = "DISABLED";
    } else if (isPresent && !isDisplayed) {
        status = "HIDDEN";
    }

    const severity = !isPresent ? "CRITICAL" : (!isDisplayed || !isEnabled) ? "WARNING" : "OK";

    let action;
    if (!isPresent) {
        action = "Element not found.";
    } else if (isPresent && isDisplayed && isEnabled) {
        action = "Element is ready.";
    } else if (isPresent && isDisplayed && !isEnabled) {
        action = "Element is visible but disabled.Wait for enable state or check preconditions.";
    } else if (isPresent && !isDisplayed) {
        action = "Element is not visible.";
    }

    console.log(`Status: ${status}`);
    console.log(`Severity: ${severity}`);
    console.log(`Action: ${action}`);
}
