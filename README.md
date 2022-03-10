# Currently Listening to...
A podcast player where you can save pocasts to your playlist and search podcasts from the Listen Notes API.

https://springboot-podcasts.herokuapp.com/

## About
This project was created as an exercise to learn Java and build a fullstack application. The focus is on a backend service using Java that can be interacted in various ways by the user. Coming from JavaScript, I researched the Express equivalent for Java and landed on using the Spring Boot framework to create the backend and host the frontend. I chose to make a podcast player as I've been into audiobooks recently.

## Technologies Used
- Java 11
- PostgreSQL 10
- Spring Boot 2.6.4
- React.js
- Node.js v16.14.0

## Setup
#### Setup for project on local environment:
- Git clone this repository into your desired directory
```sh
git clone git@github.com:magilo/podcast-app-v1.git
```

#### Setup database:
- You will need to have PostgreSQL installed and running.
- Create database for project on command line:
```sh
createdb  springboot-podcastsdb
```

#### API Key:
- To use search functionality, you will need an Listen Notes API key.
Get it here: https://www.listennotes.com/api/
- Here is a [tutorial](https://harith-sankalpa.medium.com/think-twice-before-adding-plain-text-passwords-to-your-code-5587af5ca998) on how to load the key into your system environment variables.

#### Run project and start local server:
```sh
./mvnw spring-boot:run
```
- Open `http://localhost:8080/` in your browser.
- `spring-boot-devtools` plugin will watch for any changes in the files


#### Notes:
- The React app can be run on it's own by going into the `src/main/app` and running `npm start`.


## Architectural Overview
The application is created with the Spring Boot framework and separated into two main parts.
### - backend service
`spring-pg-backend/src/main/java/com/mlo/springpgbackend`
<br/>
<img width="222" alt="spring-pg-backend file directory" src="https://user-images.githubusercontent.com/53962625/157700958-6e525aa3-f0d6-455e-abdc-e4a2854edee0.png">
<br/>
This directory hosts the API for the backend service. See architectural pattern section for in-depth details on how the class components and data models interact.

#### controller directory
- Contains contoller classes that handle API requests from the client side.
  - Podcast Controller
  - Search Controller

#### model directory
- Contains data model definition for Podcast. The podcasts table acts as the storage for the current playlist as podcasts are added.
  - Podcast

#### repository directory
- Contains repository classes that inherit from the JPA interface to create convenience methods for interacting with the database
  - PodcastRepository

#### Service directory
- Contains methods for various domain logic to process data
  - PodcastService


### - React app
`spring-pg-backend/src/main/app/src`
<br/>
<img width="221" alt="frontend file directory" src="https://user-images.githubusercontent.com/53962625/157701007-55c3c379-dbf4-4688-ac65-6c118b269932.png">
<br/>
This directory hosts a full React app along with React components for frontend functionality. It is integrated into Spring Boot through the `frontend-maven-plugin`. See architectural pattern section for in-depth details on how the React components interact.
<br/>
chart of React components with parent-child relationships
<br/>
![frontend-components drawio](https://user-images.githubusercontent.com/53962625/157700196-0f718863-5290-45d2-a3f0-9dbc272ddb18.png)


## Architectural Requirements
### Features
- User can search for a list of podcasts by title or author
- User can view details of a podcast
- User can play/pause a podcast
- User can save a podcast to their current playlist
- User can sort their playlist by title or author


### Architectural Pattern
The overall application uses a MVC architectural pattern.

#### - Model -
The model is represented on server side by the data model class Podcast along with data request services like the PodcastService class. It also includes ORM functionality through the JPA interface class in order interact with the database easier through code.

#### - View -
The view is represented by the client made with React components. It handles user requests that communicate with the API provided by the controller classes on the server. I strived to have all components handle only rendering logic after receiving data. Any data manipulation was separated out as requests to the API to take care of through the backend service.

Although it is considered the View within my overall application structure, the structure of the React components on my frontend uses a MVP architectural pattern. It focuses on a top level component Podcasts that acts as the presenter and communicates with the model (the backend service) to get data. When the backend service sends data back, the presenter then sends the response to the respective view components.

#### - Controller -
The controller is represented by all of the controller classes such as the PodcastController and the SearchController. I separated them out to handle different contexts of requests. For the PodcastController, it communicates with the model to update the podcasts table in the database. The SearchController communicates with an exteral third-party API using methods from PodcastService.



### Backend Service
need to integrate postman route examples

The backend service is created via Spring Boot with JPA and PostgreSQL.
The service is saved in the `src/main/java/com/mlo/springpgbackend` folder.
The API has separate controllers for search routes and podcast routes that interact with the database. See views for more details on how the client interacts with the API.
There are CRUD operations to interact with the database such as:
- adding a podcast
- getting a list of podcasts
- deleting a podcast by id
- updating the like counter <<< addd thissss before submit

### 3rd Party RESTful API
[Listen Notes](https://www.listennotes.com/api/docs/)

### Object Oriented Principles
review concepts

## Project Preview (video)

## Screenshots for each view and
## Views and Overall User Flow
- descriptions for the overall user flow
- anywhere you made distinct design decisions
My application view is divided into three main view sections: search for podcasts, view selected podcast and current playlist.

### search view
The Search View interface allows for the user to search the Listen Notes API.
- the User can input their search term and select whether they want to search by "author" or "title.
- It will display a list of the results after hitting enter or clicking the search icon.
When submitting the user request, the client will send a request to the the search route in the SearchController of my backend API. The backend service then communicates with the Listen Notes API by sending a get request with the user's search term and parameters. When the response is recieved by my backend service, the data is parsed to work with my application's podcast data model and then the result is sent back to the client for the User to see.
After a User gets the result list back, they can interact with the list by selecting to view the details of a specific podcast. This will be rendered in the Podcast View. The user can also select a specific podcast to add to their curent
playlist and save it there.
<br />
Add button - triggers a callback function that sends a client POST request to the backend service with the selected podcast's data and adds the podcast to the database. A GET request is sent subsequently to get an updated list from the database and pass the updated props to the Playlist view.
<br />
Info button - triggers a callback function to send the selected podcasts's data as updated props to the Podcast View component
A distinct design decision I made in the Search View was to set up the search route so that it accepts the user's search term and parameters but not implement any sort of searching method on the sample data that I was initially working with. I had decided ahead of time to research and integrate a third party API and knew that the API would have it's own search functionality that I could take advantage of. If the app had access to different types of data sets, I would then build out my search function to handle searches from different APIs or existing data sets depending on the format.

### podcast view
The Podcast View interface allows the user to view the details of a specific podcast. They can see the title, image, author, description and a audio bar that allows them to play or pause the podcast. This view is rendered when the User interacts with Search View or Playlist View by clicking on the info button of a podcast and the client passes the selected podcast's data to the Podcast view React component as props. The component itself does not communicate with my backend API to get podcast data by id as the data is already available when the lists are rendered in Search and Playlist. Clicking the info button on a podcast triggers a callback function on the item in the list to pass data back to the top level component.
(maybe it does communicate for likes and dislikes)

### playlist view
The Playlist View interface allows the user to add podcasts from the search results and save them to a playlist. They can then select a podcast to see more details in the Podcast View or remove a podcast from the playlist by clicking the delete button. The data rendered in the playlist is persistent as it comes from the database. Playlist receives props from the top level component.
<br />
Delete button - triggers a callback function that sends a client DELETE by id request to the backend service with the selected podcast's id. The podcast is removed from the database. A GET request is sent subsequently to get an updated list from the database and pass the updated props to the Playlist view.
<br />
Info button - triggers a callback function to send the selected podcasts's data as updated props to the Podcast View component




<!-- ## Room for Improvement -->

## Acknowledgements
[CRUD API using Spring Boot :Part 1 (without DB)](https://medium.com/analytics-vidhya/crud-using-spring-boot-part-1-without-db-385a48e8578b)

[Getting JSON Data From a RESTful API Using JAVA](https://medium.com/swlh/getting-json-data-from-a-restful-api-using-java-b327aafb3751)

[Spring Boot, JPA/Hibernate, PostgreSQL example with Maven](https://www.bezkoder.com/spring-boot-postgresql-example/)

[Run React and SpringBoot on the same port and Package them as a single artifact !!](https://medium.com/codex/run-react-frontend-and-springboot-backend-on-the-same-port-and-package-them-as-a-single-artifact-a790c9e10ac1)

[Including React in your Spring Boot maven build](https://medium.com/@itzgeoff/including-react-in-your-spring-boot-maven-build-ae3b8f8826e)

[React.js and Spring Data REST](https://spring.io/guides/tutorials/react-and-spring-data-rest/)

[How To Provide Secrets To A Java Or Node Application](https://harith-sankalpa.medium.com/think-twice-before-adding-plain-text-passwords-to-your-code-5587af5ca998)

[Accessing config var values from code](https://devcenter.heroku.com/articles/config-vars#accessing-config-var-values-from-code)
