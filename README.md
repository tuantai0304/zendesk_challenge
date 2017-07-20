## Run code
1. Clone the repo, then go to a terminal.
2. Run <code>npm install</code>
3. Run <code>npm start</code>
4. The site is running on <code>http://localhost:3000</code>

## Run test
- Run <code>mocha</code> in the source folder.

You may need to install <code>npm install -g mocha</code> to be able to run test

## Some explaination about code
- The code is written in Javascript using NodeJS Express framework, and using Mocha and ChaiJS for testing.
- The authentication detail and Zendesk API Query is put in helper.js file. This makes API query can be reused and easier to test.
- The code can handle basic error. Eg, when changing to an incorrect auth detail in <b>helper</b> file, it will show <b>"Unauthorised"</b> error. Or, when trying to get detail of unfound tickets, it will show <b>"Not found".</b>
- The test files are in test folder.
