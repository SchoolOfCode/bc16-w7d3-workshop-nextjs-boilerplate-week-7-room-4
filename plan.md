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
