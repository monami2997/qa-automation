// Example 1: Staging Environment
let envName = "staging";
console.log("=== Example 1: Staging Environment ===");
getEnvironmentConfig(envName);

// Example 2: Development Environment
console.log("\n=== Example 2: Development Environment ===");
envName = "dev";
getEnvironmentConfig(envName);

// Example 3: QA Environment
console.log("\n=== Example 3: QA Environment ===");
envName = "qa";
getEnvironmentConfig(envName);

// Example 4: Production Environment
console.log("\n=== Example 4: Production Environment ===");
envName = "prod";
getEnvironmentConfig(envName);

// Example 5: Production (Full name)
console.log("\n=== Example 5: Production (Full name) ===");
envName = "production";
getEnvironmentConfig(envName);

// Example 6: Invalid Environment
console.log("\n=== Example 6: Invalid Environment ===");
envName = "invalid";
getEnvironmentConfig(envName);

// Function to get environment configuration using switch statement
function getEnvironmentConfig(environment) {
    // Using const for fixed values
    const ENV_CONFIGS = {
        dev: {
            name: "DEVELOPMENT",
            url: "http://localhost:3000",
            apiKeyPrefix: "dev_key",
            timeout: 5000,
            description: "Local development environment"
        },
        staging: {
            name: "STAGING",
            url: "https://staging-api.testingacademy.com",
            apiKeyPrefix: "stg_key",
            timeout: 8000,
            description: "Staging - Pre-production mirror"
        },
        qa: {
            name: "QA",
            url: "https://qa-api.testingacademy.com",
            apiKeyPrefix: "qa_key",
            timeout: 10000,
            description: "QA - Testing environment for quality assurance"
        },
        prod: {
            name: "PRODUCTION",
            url: "https://api.testingacademy.com",
            apiKeyPrefix: "prod_key",
            timeout: 15000,
            description: "Production - Live environment"
        },
        production: {
            name: "PRODUCTION",
            url: "https://api.testingacademy.com",
            apiKeyPrefix: "prod_key",
            timeout: 15000,
            description: "Production - Live environment"
        }
    };

    // Using let for assembled config
    let config;
    let apiKeyExample;

    // Switch statement to select environment configuration
    switch (environment.toLowerCase()) {
        case "dev":
            config = ENV_CONFIGS.dev;
            apiKeyExample = `${config.apiKeyPrefix}_xxxx-xxxx`;
            break;
        case "staging":
            config = ENV_CONFIGS.staging;
            apiKeyExample = `${config.apiKeyPrefix}_xxxx-xxxx`;
            break;
        case "qa":
            config = ENV_CONFIGS.qa;
            apiKeyExample = `${config.apiKeyPrefix}_xxxx-xxxx`;
            break;
        case "prod":
        case "production":
            config = ENV_CONFIGS.prod;
            apiKeyExample = `${config.apiKeyPrefix}_xxxx-xxxx`;
            break;
        default:
            console.log(`❌ ERROR: Unknown environment '${environment}'`);
            console.log("Supported environments: dev, staging, qa, prod, production");
            return;
    }

    // Print environment configuration
    console.log(`Environment: ${config.name}`);
    console.log(`Base URL: ${config.url}`);
    console.log(`API Key: ${apiKeyExample}`);
    console.log(`Timeout: ${config.timeout}ms`);
    console.log(`Description: ${config.description}`);
}
