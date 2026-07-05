function getString(name: string): string {
    return "Amit";
}

getString("pramod");
// getFirstResult(123);

function getFirstResult<T>(results: T[]) {
    return results[0]!;
}

let firstCode = getFirstResult<number>([200, 400, 500]);
let firstTest = getFirstResult<string>(["Login", "Signup", "Cart"]);

console.log("First code:", firstCode);
console.log("First test:", firstTest);
