# Currently Listening to...
A podcast player where you can save pocasts to your playlist and search podcasts from the Listen Notes API.

## About

## Technologies Used


## Architectural Overview

## Architectural Requirements
### Features
- User can search for a list of podcasts by title or author
- User can view details of a podcast
- User can play/pause a podcast
- User can save a podcast to their current playlist
- User can sort their playlist by title or author

### Architectural Pattern
MVC for overall app.

MVP for React

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


## Set up

get your own api key

## Room for Improvement

## Acknowledgements
