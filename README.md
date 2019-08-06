# Us 
### This app is in early development
### Deployed with Heroku at https://intense-falls-46861.herokuapp.com/

A historical education/social media hybrid, which uses maps to allow people to see noteworthy historical events in their immediate area, and to add to the historical record of their community by creating events.
This is my most current and most ambitious portfolio project. I expect many challenges, but am so excited to create something I would love to use myself.

# My stack (subject to change!)

- React.js (create-react-app)
  - Hooks
  - Context
  - Router
- Leaflet.js
- Bootstrap (for static pages)
- Sass
- Styled Components (on the web app)
- NPM/NPM Scripts
- Webpack

# Things I expect to learn in this project

- Heavy use of APIs, to power maps, map events, auth, and more
- Authentication, SSH, and HTTPS
- Writing clean, modular, maintainable React code will be more important than it has been in previous, smaller projects

# 1. Planning and Mockups

- 1.1 Main features outline
- 1.2 Simple Style Guide
- 1.3 Create mockups

## 1.1 Main Features

- Main app interface will be a map, displaying the users location and immediate area.
- Map will be populated by markers representing significant historical events which have occurred in the users immediate location.
- Interaction with the marker will open card overlay, containing a summary of the event, alog with available photos, and additional links.
- (To be added on 2nd version of app) Users with an account can save events to favorites, and comment on events as well as share on social media.

### Future Features

- Users can submit events which will be added to an API after verification.
- Users can also add personal historical events, such as births, deaths, as well as other notable life events. These events may be visible to the user's local network.

## 1.2 Styling

Logo is underway!
I like the simple and friendly design of Khan Academy, and will take inspiration from it in designing UI elements as well as the overall layout of the site/app.

### This is my current palette (coolors.co)

![Palette](https://github.com/francoisboulou/us-history-maps/blob/master/src/assets/images/README/styles/palette.PNG)

### My font pairing (fontpair.co)

![Fonts](https://github.com/francoisboulou/us-history-maps/blob/master/src/assets/images/README/styles/fonts.PNG)

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

I've decided to follow the guidelines outlined in https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145 as closely as possible.

My folder structure will resemble this:
![Folder structure](https://github.com/francoisboulou/us-history-maps/blob/master/src/assets/images/README/folder%20structure/structure_1.PNG)
![Folder structure 2](https://github.com/francoisboulou/us-history-maps/blob/master/src/assets/images/README/folder%20structure/structure_2.PNG)

## 2.1 Component Diagrams

![General Components Outline](https://github.com/francoisboulou/us-history-maps/blob/master/src/assets/images/README/component%20diagrams/componentDiagram_1.jpg)


# 3. Draft Build

