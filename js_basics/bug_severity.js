let bug_severity=0
if (bug_severity>=9 && bug_severity<=10)
    console.log("Severity: Critical — Block release");
else if (bug_severity>=7 && bug_severity <=8)
    console.log("Severity: High");
else if (bug_severity>=4 && bug_severity <=6)
    console.log("Severity: Medium");
else if (bug_severity>=1 && bug_severity <=3)
    console.log("Severity: Low");
else
    console.log("Invalid");