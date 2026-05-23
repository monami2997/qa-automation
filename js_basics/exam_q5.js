var globalUserCount = 0;

const DOMAIN = "@testingacademy.com";
const ROLES = ["admin", "editor", "viewer", "tester", "manager"];
const TOTAL_USERS = 8;
const testUsers = [];

for (let i = 1; i <= TOTAL_USERS; i++) {

    let userId = `USR-${String(i).padStart(4, "0")}`;
    let userName = `TestUser_${i}`;
    let userEmail = `testuser${i}${DOMAIN}`;
    let roleIndex = (i - 1) % ROLES.length;
    let userRole = ROLES[roleIndex];

    let userStatus = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";

    globalUserCount++;


    const user = {
        id: userId,
        name: userName,
        email: userEmail,
        role: userRole,
        status: userStatus
    };

    testUsers.push(user);
}

// Print header
console.log("Test User Data Report");
console.log("ID       | Name        | Email                          | Role    | Status");
console.log("---------|-------------|--------------------------------|---------|--------");

// Print user data in table format
for (const user of testUsers) {
    console.log(
        `${user.id} | ${user.name.padEnd(11)} | ${user.email.padEnd(30)} | ${user.role.padEnd(7)} | ${user.status}`
    );
}

console.log("\n=== Summary ===");
console.log(`Total Users Generated: ${globalUserCount}`);
console.log(`Active Users: ${testUsers.filter(u => u.status === "ACTIVE").length}`);
console.log(`Inactive Users: ${testUsers.filter(u => u.status === "INACTIVE").length}`);
