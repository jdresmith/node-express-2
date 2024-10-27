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


