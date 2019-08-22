# Us 
### This app is in early development
### Deployed with Heroku at https://intense-falls-46861.herokuapp.com/

A educational history map that displays noteworthy historical events in the user's immediate area.
A goal for the project is to eventually include a social component, wherein users add their own events and can interact with those uploaded by other users.

Currently, I am focusing on creating a working interface. But, as my knowledge of the back end grows, I expect to develop Us into a functional app. 

Another challenge is the lack of local history APIs. In the near future, I aim to create my own. 

# Items Completed So Far

  - Detection of user location with navigator.geolocation getLocation method
  - Set up of Leaflet.js with a strictly functional (hooks) React style
  - Emulation of a historical API that returns objects with historical event information
  - Use of artificial location information provided by API to dynamically create markers on map
  - Use of Leaflet methods to create a custom map reset button that uses data collected by the navigator.geolocation API
  - Creation of a custom marker icon style that matches the mockups below
  - Marker click behavior that centers and expands marker, and opens custom popup. Marker and popup are stacked vertically for mobile-friendliness.
  - Added layer control to filter markers based on historical category assigned.

# What I am using

- React.js (create-react-app)
  - Hooks
  - Context API
- Leaflet.js
- Bootstrap
- Sass
- Styled Components (on the web app)
- NPM/NPM Scripts
- Webpack

# 1. Planning and Mockups

- 1.1 Main features outline
- 1.2 Simple Style Guide
- 1.3 Create mockups

## 1.1 Main Features

- Main app interface will be a map, displaying the users location and immediate area.
- Map will be populated by markers representing significant historical events which have occurred in the users immediate location.
- Interaction with the marker will open ~card overlay~ pop up containing a summary of the event with a read more link, and expand the pop up to display a relevant photo.
- Clicking on read more link will open an overlay with an article, read further links, and a photo gallery.
- (To be added on 2nd version of app) Users with an account can save events to favorites, and comment on events as well as share on social media.

### Future Features

- Users can submit events which will be added to an API after verification.
- Users can also add personal historical events, such as births, deaths, as well as other notable life events. These events may be visible to the user's local network.

## 1.2 Styling

Logo is underway!
Please see palette and fonts in styles folder https://github.com/francoisboulou/us-history-app/tree/master/src/assets/images/README/styles

### Headings

I will use this tool to convert my units from px to vw or vh https://codepen.io/lakshmiR/pen/YGWXoo

- h1 - 50px
- h2 - 40px
- h3 - 34px
- p - 16px

## 1.3 Mockups

![main map open account menu](https://github.com/francoisboulou/us-history-maps/blob/master/src/assets/images/README/mockup/UI/mainViewOpenMenu.jpg)
![marker overlay open](https://github.com/francoisboulou/us-history-maps/blob/master/src/assets/images/README/mockup/UI/overlayView.jpg)
![marker overlay open comments section](https://github.com/francoisboulou/us-history-maps/blob/master/src/assets/images/README/mockup/UI/overlayScrolled.jpg)

# 2. Folder Structure and Component Hierarchy

I've decided to follow the guidelines outlined in https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145 whenever reasonable.

My folder structure will resemble this:
![Folder structure](https://github.com/francoisboulou/us-history-maps/blob/master/src/assets/images/README/folder%20structure/structure_1.PNG)
![Folder structure 2](https://github.com/francoisboulou/us-history-maps/blob/master/src/assets/images/README/folder%20structure/structure_2.PNG)

## 2.1 Component Diagram

![General Components Outline](https://github.com/francoisboulou/us-history-maps/blob/master/src/assets/images/README/component%20diagrams/componentDiagram_1.jpg)

### Note about component diagram: 
One of my goals for this project is to practice a functional, hook driven style of writing react. I initally tried to use the react-leaflet library to generate my map and its elements, but due to its reliance on class components I settled for the original leaflet library. This aproach has made it so that all of the elements which are added to my map (markers, layers, controls) reside within the main map container function. This fact makes the diagram above inaccurate, and I will update it soon.
