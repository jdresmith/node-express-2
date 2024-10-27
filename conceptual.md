### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JSON Web Tokens are a URL-safe means of representing claims for authorization and authentication for web applications.

- What is the signature portion of the JWT?  What does it do?
Signatures are a combiantion of the encoded header, secret/priavte key and the encoded payload using the specified algorithm. The signature is used to verify that the message has not been changed along the way and confirm the identify of the sender of the JWT.

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes they are able to see the contents of payload as it is encoded, not encrypted and can be decoded from the Base64 encoding.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
1) The user is authenticated by logging in with their credentials which is then verified by the server. This is then encoded into the payload of the JWT

2) the server generates a JWT token containing information on the user which is then encoded into the payload

3) The server sends the JWT token back to the client as a part of the authentication response which is then saved to local storage or a cookie for other requests.

4) The JWT is verified during every request for authenticity and integrity using the secret/privatye key assigned to it.

5) the server decodes the JWT's payload to gather infromation on the user.

6) The user is authorized based on information gather from the JWT. if authorized, the server processes the request.

- Compare and contrast unit, integration and end-to-end tests.
Unit tests focus on testing individual components such as functions to quickly identify any problems within the code. Integration tests are used to test how multiple components work together as a whole. End to end tests are used to tests the enetire application to make sure it runs to full completion.

- What is a mock? What are some things you would mock?
A mock is a simulated object or component that mimics the behavior of a real object or component within a software system. Mocks are commonly used in unit testing to isolate the unit under test from its dependencies, allowing the unit to be tested in isolation.

- What is continuous integration?
Continuous Integration (CI) is a software development practice that involves frequently integrating code changes into a shared repository.

- What is an environment variable and what are they used for?
An environment variable is a named value that can affect the behavior of running processes or programs on a computer's operating system.

- What is TDD? What are some benefits and drawbacks?
Test-Driven Development is a software development methodology in which tests are written before the actual implementation code. It allows for more well designed code with clear interfaces, also allowing for bugs and errors to be caught during the development process. It is however much more difficult to impliment and very time consuming.

- What is the value of using JSONSchema for validation?
JSONSchema provides a standardized and flexible approach to validating JSON data, offering benefits such as schema definition, validation, error reporting, data transformation, schema evolution, and interoperability.

- What are some ways to decide which code to test?
It is important to test code that is most complex and error-prone especially that which is critical business logic or has core functionality to the application. 

- What does `RETURNING` do in SQL? When would you use it?
RETURNING is a clause in SQL that is used in conjunction with INSERT, UPDATE, or DELETE statements to return the values of columns that were affected by the operation. It allows you to retrieve the values of specific columns from the rows that were inserted, updated, or deleted as part of the SQL operation.

- What are some differences between Web Sockets and HTTP?
 HTTP is well-suited for traditional client-server interactions and resource retrieval, Web Sockets provide a more efficient and flexible communication channel for real-time, interactive, and streaming applications that require bi-directional communication and low latency. 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

I prefered express but that was mostly because of how hard it was to fix flask errors as well as install packages.