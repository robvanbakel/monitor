# Monitor

Monitor regularly performs certain checks for different projects and logs any errors found. Logs are saved as `/logs/<TimestampISO>_<projectId>.<testId>.log`.

### Adding new tests to an existing project
* Create a new `ts` file in the project's directory with a descriptive identifier as its name
* In the `try` block of the exported function, write the test's logic
* Import and call the newly created function in the project's directory `index.ts` file

### Adding a new project
* Add a new directory in `/src` with the project's identifier as its name
* Create an `index.ts` file and follow steps for adding new tests to an existing project
* In the `/src/index.ts` file, import the project and call its exported function in `schedule()`
