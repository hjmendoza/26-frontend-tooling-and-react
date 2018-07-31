![cf](http://i.imgur.com/7v5ASc8.png) 26 - Frontend Tooling & React - Haley Mendoza
===

  
## Features 
* Configured webpack to compile JS and SASS into a bundle
* Configured babel to transpile JSX and ES6 to ES5 javascript
* Adds event listeners to react components 
* Updates react component state
* Creates and renders react components to the DOM

###### App
* Contains the entire application's view and state
* Has a property on the state called content 
* Creates a view with the following display
  * Heading with the title "Generate Cowsay Lorem"
  * Button that displays "click me"
    * `onClick` generates new content on the app state using cowsay and faker
  * pre tag that displays the App state (content)

#### To Get App Started
* Clone down code
* Run `npm i`
* Run `npm run watch` which will open up a window at `localhost:8080`
* Click on the button to generate Cowsay Lorem
