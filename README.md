RESTFul Node Express is API implementation using Node.js and Express.js. 

Tech stack: 🖥
 - Node.js
 - Express.js
 - TypeScript

# Getting Started
Clone the repo:
```
git clone git@github.com:space11/restful-node-express.git
cd restful-node-express
```
Install dependencies:
```
npm install
```

Set environment variables:
```
# TODO
```

Start development server:
```
npm start
```

Or start development server with debug
```
TODO
```

Tests:
```
# TODO
```

Deployment:
```
# TODO
# Sketch deployment steps:
# Build to ES5
# Upload ./dist to your server
# Install production dependencies only
# Use any process manager to start the service
```

Main goal: 🎯
 - Implement robust and secure API.

Roadmap: 🛣
- [ ] Setup Git
- [ ] Setup Eslint
- [ ] Setup TypeScript
- [ ] Setup Express.js
  - [ ] Body-parser
- [ ] Setup Logger
- [ ] Layered architecture  
  - [ ] API layer  
  - [ ] Data Access layer (Integration)  
  - [ ] Business Logic layer (Service)  
- [ ] Authentication
  - [ ] Cookie based authentication
- [ ] Resource access authorization 
- [ ] Add model validation using Joi / celebrate
  

Best practices that I try to keep in mind while developing this project: 🚀
  - Use a Pub/Sub layer
  - Use Dependency Injection (inversion of control)
  - Loaders [W3Tech microframework](https://www.npmjs.com/package/microframework-w3tec) - similar to net core extensions method used in Startup.cs to add middleware
  - Unit test
