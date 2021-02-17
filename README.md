# SQA

[![Netlify Status](https://api.netlify.com/api/v1/badges/6c7b185d-2c7d-4c6c-8ad9-fa2bc96e74b4/deploy-status)](https://app.netlify.com/sites/sad-agnesi-9a17ea/deploys)

[Live demo](https://sad-agnesi-9a17ea.netlify.app/)

## Our product

A chat application made with React, NodeJS and websockets.

## Our stack

### React

React is a front end framework used to make interactive user interfaces. Our product involves frequent UI updates and React is designed to efficiently update the relevant components as data is received.

The React Hooks `useEffect` and `useRef` are useful for tying the component lifecycle to websocket events too.

### NodeJS

NodeJS was chosen because it allows us to use one language for our clinet and server code.

### Socket io

Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server, which makes it perfect for a web chat application such as ours.

### Deployment

The front end is deployed with Netlify and the backend with Heroku.
