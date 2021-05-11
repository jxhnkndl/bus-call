# Bus Call

![html](https://img.shields.io/github/languages/top/jxhnkndl/bus-call?style=plastic)
![commit](https://img.shields.io/github/last-commit/jxhnkndl/bus-call?style=plastic)
![license](https://img.shields.io/static/v1?label=license&message=MIT&color=orange&style=plastic)


## Table of Contents

- [Deployed Application](#deployed-application)
- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Local Database Setup](#local-database-setup)
- [Authentication](#authentication)
- [Usage](#usage)
- [Build](#build)
- [Application Demo](#application-demo)
- [License](#license)
- [Contact](#contact)


## Deployed Application

Visit the deployed application here: [Bus Call](https://bus-call.herokuapp.com/)


## Description

Taking a rock band on tour is no small venture. Between hiring and managing tour crew, coordinating travel and concert details for dozens of shows at a time, and keeping everyone in sync when information changes, it's easy for artists and tour managers to get overwhelmed by the task of keeping the buses running on time. 

That’s the point of **Bus Call** - it remembers the details so that you don’t have to. Created as a mobile-first web application, Bus Call is designed specifically for touring musicians and crew. Users can create and view tour dates, add and edit venue and show details, create virtual day sheets and stage schedules, and more. Users can view all of their schedule performances as an agency style tour routing or view individual concerts to access details. Rather than trying to distribute information through unstructured group texts, email chains, creating and recreating bulky PDF documents or physical tour books, or word of mouth, simply update gig details in the database and the changes will be immediately available to everyone else on your team. 

You play the shows. We'll handle the details. Get started today to make sure no one on in your tour family ever misses bus call again.


## Technologies

- React
- React-Bootstrap
- Sass/CSS
- Node.js
- Express
- MongoDB
- Mongoose
- Auth0
- Framer Motion
- React Toastify
- Day.js


## Installation

The front-end of Bus Call is a single-page application built using the `create-react-app` infrastruture and a variety of supplemental libraries. All of the individual components and source code can be found in `client/src`. Static assets served to the browser are stored in `client/public`. Lastly, `client/build` contains the bundled files used in the final production build.  

The back-end of Bus Call uses an Express server and API connected to a MongoDB database using Mongoose. `models` contains a schema for the gig documents central to the application's functionality. `controllers` receives requests passed through the API via `routes` and contains the primary back-end interface between the application's API and database. Lastly, `scripts` contains a seed file for resetting the database with five pre-formatted gig documents.  

To run this application locally, both `Node.js` and `npm` must be installed. To check whether `Node.js` and `npm` are installed locally, open a terminal and run:  

```
node -v
```

```
npm -v
```

If Node and npm are already installed, the commands above should return version numbers. Visit [Node.js](http://www.nodejs.org/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for full installation details and documentation.  

To install the project and both its front and back end npm dependencies, navigate to the project's root directory and run the following commands from a terminal:  

```
npm install
```

To see a complete list of the client-side dependencies and `npm` scripts, please refer to `client/package.json`. Similarly, to see a complete list of the server-side dependencies and `npm` scripts, please refer to the root directory's `package.json` file.


## Local Database Setup

This application uses a MongoDB database to store gigs created and saved by the user. The deployed application uses MongoDB Atlas to store its data in the cloud. To run the application locally, MongoDB must be installed and a local database must be created and connected to the application. `server.js` has been configured to make set up as easy as possible using Node environmental variables.

**Connect a local MongoDB database to Bus Call:**

1. Launch MongoDB and create a new database called `buscalldb`
2. Navigate the project's root directory
3. Run `npm install` to install project dependencies
4. Open `server.js`. There are `localdb` and `atlasdb` variables pre-configured with the connection strings needed to establish either a local database or the application's MongoDB Atlas database.
5. Note the insertion of variable expressions in `localdb`. These point to the environmental variables that will be used to privately store database credentials.
6. Navigate to the root directory and create a `.env` file. The application's `.gitignore` already knows not to track this file. 
7. Set up two environmental variables: one called `LOCALDB_HOST` set equal to the user's `localhost` or similar counterpart and one called `LOCALDB_NAME` set equal to the name of the local MongoDB database set up for this application (i.e. `gigs`). Note that `dotenv` or a similar library should be used to configure the workspace for using local environmental variables.
8. Run `npm start` to launch the application. The Mongoose connection is pre-configured to use the user's private environmental variables to connect the application to a local MongoDB database.

The application uses `mongoose.js` to define and enforce a schema on gig documents saved to the `gigs` collection. Each gig is written to the database as a single document containing a date, a venue object with details about the show's location, a series of boolean properties specifying the availability of common venue amenities, and a schedule array with a series of objects represent events tied to specific times. Refer to `gig.js` inside the `models` directory for the complete data model used to create gigs.  

Once npm packages have been installed and the database has been initialized, the application can be launched by running:

```
npm start
```


## Authentication

Bus Call uses [Auth0](https://www.npmjs.com/package/@auth0/auth0-react) for client-side authentication using either:  

* An email/password combination created at the time of sign-up OR
* An existing Google account (via redirection)  

Note that both authentication strategies leverage Auth0's respected, versatile, and secure login system. Bus Call will not receive any sensitive information regarding a user's email account or Google account. 

<img src="assets/login.gif" alt="Logging in using Auth0" width="800">  
<br>

## Usage

**Viewing Gigs**  
Gigs can be viewed in one of two ways. In **tour view**, gigs are displayed similar to how a venue would display a calendar of upcoming events. This view is also representative of the type of tour itineraries a booking agency provides a tour manage prior to advancing the dates. Alternatively, **gig view** can be used to isolate a specific show and view information about the venue and the amenities it provides, capacity and presale ticket figures, and the gig's stage schedule.  

<img src="assets/navigation.gif" alt="Navigating the user interface" width="800">  
<br>

**Adding Gigs**  
New gigs can be added by either clicking the **plus icon** in the dashboard navbar or by selecting **Add Gig** from the options menu. Bus Call intuitively auto-populates the artist inputs and the stage schedule time blocks with the last values provided by the user (a helpful feature for adding multiple shows on the same tour). Users can specify these values when adding a gig or come back and update them later. The application will alert the user if a required field has been left blank on submission.  

<img src="assets/add-gig.gif" alt="Adding a new gig" width="800">  
<br>

**Updating Gigs**  
One of the most important features of Bus Call is how easy it makes the process of updating a gig's details when something changes. Users can edit a gig using the **edit icon** in gig view or by selected **Edit Gig** from the options menu in the dashboard navbar. Bus Call will auto-populate the form with the selected gig's details allowing the user to simply update the desired fields and save. The changes will be immediately visible when the user returns to either tour view or gig view.  

<img src="assets/update-gig.gif" alt="Updating a gig" width="800">  
<br>

**Deleting Gigs**  
No artist ever likes to cancel a show but sometimes it happens. Bus Call wants to make that process as painless as it can. Find the canceled gig and open the editor. Click the delete button in the form and confirm the deletion in the modal. Both tour view and gig view will immediately reflect the changes.  

<img src="assets/delete-gig.gif" alt="Deleting a gig" width="800">  
<br>

## Build

Please note that any changes made to the application's source code on the client-side require that a new production build be created. The `create-react-app` ecosystem uses a build pipeline using `webpack` and `babel`. Additionally, the `node-sass` module has been added to the pipeline to ensure that custom Sass files are properly compiled into the production build.  

To run a new build of the application, navigate to the application's root directory and run:  

```
npm run build
```


## License

Copyright (c) 2021 J.K. Royston  
Licensed under the [MIT License](https://opensource.org/licenses/MIT).


## Contact

J.K. Royston  
<jkroyston@gmail.com>  
[GitHub](https://www.github.com/jxhnkndl)
