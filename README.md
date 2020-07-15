# Kommunicate.io-Assessment

Design a REST API where the actor can submit the data containing the list of movies with movie name, start date and end date and the API should return the total amount that he can make along with the final list of movies to select.

## _**A movie actor wants to make the max. money by picking the right movies in a given year.**_

# Rules:

-Consider that the actor gets a fixed amount of 1 Crore for each movie that he does, irrespective of
the duration of the money.
-Movies have a contract where the actor is not allowed to work on other movies whose date conflicts with the selected movies date. For example if the actor have selected a movie from 10th Jan to 20th Jan (both dates inclusive) then the actor can’t select any movies which has a start or end date between 10th to 20th Jan.
-Actors are not worried about optimization of ‘less work and more money’. His aim is to get the max. money even if he has to work for all the days of the year.

## _**PLEASE READ THIS TO SET UP THIS PROJECT**_

### _**INSTRUCTIONS TO START THIS PROJECT ON LOCALHOST**_ -

## Setup/Installations

- Install Node js(https://nodejs.org/en/)
- Clone this Repository
- Go to root directory
- Open CLI and type npm install
- Go to client directory run npm install
- To Start server on Localhost: go to root directory and type npm start on CLI
- Now your server is up on running : You can now make an POST call on http://localhost:5000/api/v1/ profitable-movie-list

##### LIVE URL

- Base url
  `http://kommunicate-io-assessment.herokuapp.com`

* Endpoint
  `/api/v1/profitable-movie-list`

##### Method

POST

##### Data Params

    data = {
    "data" : [{
    "movie_name" : String,
    "start_date" : String,
    "end_date" : String
    }]
    }

##### Success Response

- Code: 200  
  Content:
  `{ "movies": [ { "movie_name": String, "start_date": String, "end_date": String }], "profit": Integer,"message":String }`

##### Error Response

- Code: 422  
  Content:
  ```
  {
    "errors": [
        {
            "message": String
        }
    ]
  }
  ```

##### Sample Request

## Pass json in below format In case you want to test this api through postman.

```javascript
{
    "data": [
      { "movie_name": "Bala", "start_date": "8 Jan", "end_date": "28 Jan" },
      { "movie_name": "Rock", "start_date": "20 Jan", "end_date": "30 Jan" },
      { "movie_name": "PolicyMaker", "start_date": "29 Jan", "end_date": "16 Feb" },
      { "movie_name": "Brave", "start_date": "02 Feb", "end_date": "14 Feb" },
      { "movie_name": "Drive", "start_date": "10 Feb", "end_date": "18 Feb" },
      { "movie_name": "Race", "start_date": "15 Feb", "end_date": "28 Feb" }
    ]
  }


```

##### Sample Response

```javascript
{
    "error": false,
    "data": [
        {
            "movie_name": "Bala",
            "start_date": "8 Jan",
            "end_date": "28 Jan"
        },
        {
            "movie_name": "Brave",
            "start_date": "02 Feb",
            "end_date": "14 Feb"
        },
        {
            "movie_name": "Race",
            "start_date": "15 Feb",
            "end_date": "28 Feb"
        }
    ],
    "profit": 3,
    "message": "Max Profit : 3 Crore"
}
```

## Getting Started

This project will hold both the client application and the server application there will be node modules in two different places. First run `npm install` from the root. After this you will run `npm run-script install-all` from the root. From now on run this command anytime you want to install all modules again. This is a script we have defined in package.json. Alternatively your group may choose to simplify this process by using yarn workspaces as specified [here](https://yarnpkg.com/lang/en/docs/workspaces/).

This app can be deployed directly to heroku since there is a script defined in package.json which will automatically handle building and deploying the app. For more information on deploying to heroku reference the extra resources at the bottom of this file.

## Available Scripts

Please note that any time the server is run in these scripts `nodemon` is used in place of `node` for easier development. If you are interested in how this works follow the nodemon In the project directory, you can run:

### `npm run-script dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run-script client`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run-script server`

Runs just the server in development mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## File structure

#### `client` - Holds the client application

- #### `public` - This holds all of our static files
- #### `src`
  - #### `assets` - This folder holds assets such as images, docs, and fonts
  - #### `components` - This folder holds all of the different components that will make up our views
  - #### `views` - These represent a unique page on the website i.e. Home or About. These are still normal react components
  - #### `App.js` - This is what renders all of our browser routes and different views
  - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client

#### `server` - Holds the server application

- #### `config` - This holds our configuration files, like mongoDB uri
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `tests` - This holds all of our server tests that we have defined
- #### `server.js` - Defines npm behaviors and packages for the client

#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README

#### `.gitignore` - Tells git which files to ignore

#### `README` - This file!

## Learn More

To learn how to setup a local MongoDB instance for testing, check out how to [connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).

To learn how to deploy a full-stack web app to heroku, check out [this great guide](https://daveceddia.com/deploy-react-express-app-heroku/).

To learn React, check out the [React documentation](https://reactjs.org/).
