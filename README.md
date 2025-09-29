/*Pizza Store API*/

The application demonstrates CRUD (Create, Read, Update, Delete) operations on pizza items stored in memory. The system allows adding new pizzas, viewing available pizzas, updating pizza details, and deleting pizzas. The application is tested using Postman, a widely used API testing tool. It is made using front end(JavaScript) and backend(Node.js) technologies.

 OBJECTIVES:-
 
>To build a backend system using Node.js.

>To perform CRUD operations on pizza items.

>To test the REST API endpoints using Postman.

>To understand the workflow of a typical backend system.


 API ENDPOINTS:-

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| POST   | `/items`     | Add a new item          |
| GET    | `/items`     | Retrieve all items      |
| GET    | `/items/:id` | Retrieve an item by ID  |
| PUT    | `/items/:id` | Update an  item         |
| DELETE | `/items/:id` | Delete an item          |

**Example Request (POST /items)**

```json
{
  "name": "Margherita Pizza",
  "price": 250,
  "category": "Veg"
}
```


POSTMAN TESTING:-

##Import Postman Collection

* Import `Pizza Store API.postman_collection.json` from this repo into Postman.


REPOSITORY STRUCTURE:-

```
postman-api-testing/
 ├── /server.js                 # backend code
 ├── docs/screenshots/    # Postman screenshots
 ├── Pizza Store API.postman_collection.json
 └── README.md
```


