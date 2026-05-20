let passedPercent = 89;
 if (passedPercent === 100) {
        console.log("🟢 Green Build");
    } else if (passedPercent >= 90 && passedPercent <= 99) {
        console.log ("🟡 Stable — Investigate failures");
    } else if (passedPercent >= 70 && passedPercent <= 89) {
        console.log("🟠 Unstable");
    } else {
        console.log ("🔴 Broken Build — Block deployment");
    }


