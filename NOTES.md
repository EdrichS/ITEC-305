Just notes made by me for personal thoughts and recollection
(forgive me for cramming)

React - Made by Facebook for easily reusable and bundled code. Funny how the we have Java at home is better than the actual Java, in this aspect atleast.

The initial project, untouched and when we started just contains the React Essentials Page. Which contains the following:

index.html: Initially contains nothing but just points to index.jsx

index.jsx: imports REACTDOM, APP, index.css. Only REACTDOM is an actual library import, the other two are local codes which this file calls and builds APP

index.css: Just styling, as usual for .css files

App.jsx: This file contains what is actually getting displayed by the website. Its a function which just returns the code that looks like HTML. Any changes made here is reflected on the website.

How the code runs initially: index.html -> index.jsx -> App.jsx