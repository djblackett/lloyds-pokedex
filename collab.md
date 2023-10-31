# Getting Involved in the Project

Welcome to the project repository! Here are some instructions to help you get started.

## Branch Protection

Currently, there is no branch protection on this project. Please keep this in mind when making changes.

## Linting and Building

1. Navigate to the `client` directory before merging any commits.

2. Before merging, make sure to run the following command to check the linting:

   ```bash
   npm run lint
   Ensure that all the linting checks pass successfully.
   ```

If the linting has passed, you can proceed to build a production version of the app. Run the following command:

```bash
npm run build
```

This command will generate a production version of the app.

Testing the Production Version
To test the production version, follow these steps:

Run the following command:

```bash
node .next/standalone/server.js
```

This will start the server and make the app available in the production environment.

Open your browser and navigate to the appropriate URL to access the production version of the app.

Note: Some CSS may be broken in the production version. Don't worry about it for now; the focus is on functionality.

That's it! You're now ready to get involved in the project.

Happy coding!
