# QA Automation

This repository contains automation scripts and resources for QA testing, primarily using Playwright for end-to-end testing.

## Project Structure

- `js_basics/`: Contains basic JavaScript files and lab exercises
  - `Day_1.js`: Introduction to JavaScript basics
  - `05_Js _lab.js`: JavaScript lab exercises
  - `health_report.js`: CI build health reporter based on passed test percentage
  - `login_attempt.js`: Failed login tracker with account lockout after 3 tries
  - `vscode_shortcuts.md`: VS Code keyboard shortcuts for Windows

- `.vscode/`: VS Code settings and configurations

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/monami2997/qa-automation.git
   ```

2. Navigate to the project directory:
   ```bash
   cd qa-automation
   ```

3. Install dependencies (if any):
   ```bash
   npm install
   ```

## Usage

- Run JavaScript files using Node.js:
  ```bash
  node js_basics/Day_1.js
  node js_basics/health_report.js 95
  node js_basics/login_attempt.js 3
  ```

- For Playwright tests (if added in the future):
  ```bash
  npx playwright test
  ```

## Contributing

Feel free to contribute by adding more automation scripts or improving existing ones.

## License

This project is for educational purposes.