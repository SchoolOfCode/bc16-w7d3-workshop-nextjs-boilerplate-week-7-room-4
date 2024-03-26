# Objectives

- A "founders" page that works on mobile (don't worry about desktop for now)
- A menu that works as expected and looks how it should on mobile. This means you can click the menu button, the full screen menu appears, you can click the close button in that menu to close it.
- The menu will have links in it so I can move between the Home Page and Founders page.

# MVP1

- Transfer Vite project to Next project
  - Clear out existing code we don't want
  - Create src folder
  - Copy across jsx and css files
  - Import header and footer into layout.js
  - Import body into page.js

# MVP2

- Create new page

# MVP2

- Link pages using button

# MVP4

- Add toggling menu which contains link button
  - create new component called menu - that will contain the button component
  - will be a div element
  - will have a useState - set current visibility to invisible USING CSS CLASS
  - will have an onClick - check if currently visible - if visible set to invisible, if invisible set to visible USING CSS CLASS

# HACKATHON

## Objective

- A new component on the home page that allows a user to select (click) their country and see the latest review (fetch data).

- Write the social proof component in its default state
- include css
- write files in src
- render in home page.js
- CHECK POINT

### add state to the one buttons

- import useState
- make state for country
- write the component
  - return 3 buttons
  - add onClick with function that sets state to that country
  - have a h1 (temporary) displays the resource

### useEffect

use the Effect module to run a simple console log every time
component renders

### add component to Home page

might be a good point to add some styles

### update the useEffect module

- fetch data from the api

# MVP 5

- create a new page with a form which contains:
  Personal information - Full name, postcode, House/flat number, city
  Contact information - Phone number, email address
  The form should validate inputs on submit and show an error if empty
  If no error then console log the data

## breakdown

- 1. Create a new page at the /booking endpoint
  2. Link to this page within the book consultation line of orange box
  3. In the booking page: create the form architecture
  4. Style the form elements
  5. Create state and handler functions for the form
  6. Create input validation
  7. Console log succesful result
