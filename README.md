# TOPIC: Middleware2

## Authentication with JWT
- Token generation
- Token verification

## Assignment
- For this assignment you have to create a new branch - **assignment/auth-3**
- Your user document should look like this
```
 	{
    "_id" : ObjectId("6226e3d2b98f22b349ca58be"),
    "firstName" : "Sabiha",
    "lastName" : "Khan",
    "mobile" : "9898909087",
    "emailId" : "sk@gmail.com",
    "password" : "password123",
    "gender" : "female",
	"isDeleted": false, //default value is false 
    "age" : 12,
    "createdAt" : ISODate("2022-03-08T05:04:18.737Z"),
    "updatedAt" : ISODate("2022-03-08T05:04:18.737Z"),
    "__v" : 0
}
```


- Write a POST api to register a user from the user details in request body. 
- Write a POST api to login a user that takes user details like email and password from the request body. If the credentials don't match with any user's data return a suitable error.
On successful login, generate a JWT token and return it both in response body.
- Write a GET api to fetch user details. Pass the userId as path param in the url. Check that request must contain x-auth-token header. If absent, return a suitable error.
If present, check that the token is valid.
- Write a PUT api to update user details. Pass the userId as path param in the url and update the attributes received in the reauest body. Check that request must contain x-auth-token header. If absent, return a suitable error.
- Write a DELETE api that takes the userId in the path params and marks the isDeleted attribute for a user as true. Check that request must contain x-auth-token header. If absent, return a suitable error.
- Once, all the apis are working fine, move the authentication related code in a middleware called auth.js
- Add this middleware at route level in the routes where applicale.

```diff
+ Please note that you have to also write the logic for authorisation so that a logged in user can only modify or fetch their own data.

``` 

