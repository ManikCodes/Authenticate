Folder and File Descriptions
controllers/:

authController.js: Contains the logic for user registration, login, and authentication.
itemController.js: Contains the logic for handling CRUD operations on items.
middlewares/:

authMiddleware.js: Contains middleware for protecting routes and ensuring the user is authenticated.
errorMiddleware.js: Contains middleware for handling errors and sending appropriate responses.
models/:

itemModel.js: Defines the schema for items in the MongoDB database.
userModel.js: Defines the schema for users in the MongoDB database.
routes/:

authRoutes.js: Defines routes for user authentication-related endpoints.
itemRoutes.js: Defines routes for item-related endpoints.
utils/:

generateToken.js: Utility function for generating JSON Web Tokens (JWT).
.env: Contains environment variables for the application.

.gitignore: Specifies files and directories to be ignored by Git.

server.js: The main entry point of the application, sets up the Express server and connects to MongoDB.

package.json: Lists the dependencies and scripts for the project.
