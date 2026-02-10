## Steps to create Backend
    1.Generate package.json
        npm init -y
    2.Create HTTP Server
        a.Install and import "express" module
            npm install express
        b. import express module
    3.create API
    API has request handlers
# HTTP Request types(CRUD Opertions)
   * GET - Read all resources
   * POST - Create a new resource
   * PUT - Update a resource
   * DELETE - delete a resource
 http://localhost:3000 -> base url which is runnaing in local machine on port 3000
 http://127.0.0.1:3000 -> lookback IP address which is running on local machine on port 3000

GET http://127.0.0.1:3000/users  --> to get all users
POST http://127.0.0.1:3000/user    --> to create a new user
PUT http://127.0.0.1:3000/users/<id> --> t update user with id
DELETE http://127.0.0.1:3000/users/<id> --> to delete user with id

1.data: the collection of raw facts 
2.data vs information: processed data 
3.database:is a storage base used t store data
4.database server: a software that provides database services to others
5.DBMS