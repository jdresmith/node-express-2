Bankly is a web app for a financial system, when run it produces the data from the databse necessary for either the admin or authorized users with all their financial information.

1) Use npm install to downlaod necessary packages
2) npm start to run the application.
3) npmm test to to test application.

This project utilizes JavaScript, SQL and Node.js to create a dynamic app. When given the project my goal was to fix several bugs that were present within it.

Through JSW tokens we can see user authentication through username and password to validate the information presented and draw specific user information in the project. 

We use test to determine if the project runs in a timely manor and also if it gathers the correct information when ran.

If incorrect username or password are given should return error 401.

It can return a list of users but this will only be visible to logged in users. Only a logged in user can retrieve information on a specific user, if one cannot be found a 404 error is returned.

User data can be updated by only the user themselves or an admin.

Users can be deleted by admins only.

BUG 1
In `auth.js` in the middleware folder the original code had the authUser function utalizing jwt.decode() rather than jwt.verify(). this means it would extract the payload without verifying the tokens signature.

Fixed by replacing with jwt.verify() and use SECRET_KEY for validation.

BUG 2
In `createToken.js` did not have catch block which would help with explainining failure of token creation. Without this the application could crash without proper explanation.

BUG 3
In `auth.js`, user.admin is passed to createTokenForUser. If the User.register or User.authenticate methods do not populate admin, this could result in a runtime error or unexpected behavior.

This was changed to `const token = createTokenForUser(username, user.admin || false);` to default to false if it is undefined.

This is tested on line 96 of routes.test.js.

BUG 4 
In `users.js` the `DELETE /:username` route is missing the await keyword, which means the route won't properly handle the promise returned by `User.delete`. By adding `await` we ensure the deltion is complete.



