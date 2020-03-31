# dashboard

Dashboard app using React, TypeScript, and GraphQL

## Description

Dashboard is a template using React and Nivo analytical charts to render a simple and easy to use basic dashboard. Included are example datasets to show an example of what the dashboard looks like and which graphs are currently available. All you would need to do to customize this dashboard is to add your own graphObjects file for each different graph you want as well as any files for the data itself. 

For next steps, I will be adding a backend using GraphQL and MongoDB (or RethinkDB, haven't decided yet) in order to grab data from particular APIs and to serve data to the frontend for more advanced CRUD capabilities.  

## Process for creating this app

    - Create repo
    - Clone to local machine
    - npm init -y
    - npm i express express-graphql graphql mongoose
    - create index.js for server
    - mkdir for graphql schema, add schema.js file
    - mkdir for mongooose models, add model.js

### Design

    - Single Page
    - Grid layout that dynamically creates grid layout based on number of cards
    - Cards that are made with unique charts based on data from DB through GraphQL
