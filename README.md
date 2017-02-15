
===============================================================================

SHRPAS UoH PROTOTYPE SETUP

===============================================================================

Demo architecture 
———————————————————
This demo is created using React + Bootstrap. The project uses LESS CSS pre-processor. React uses the React-Router plugin to allow for app routing, and utilizes Webpack and Babal (for ES6 syntax support).




File structure
———————————————————
- ./                               - web pack config, package.json, node modules
- ./src                            - Main app directory 
- ./src/components                 - React Bootstrap Components
- ./src/data                       - Applicant data to build MyPool
- ./src/routes.js                  - Main document to route out each domain path and component - utilizes React Router
- ./src/server.js		   - Server setup document
- ./src/static		   	   - Directory for static items such as images, jQuery, Javascript plugins and other non-dynamic items.
- ./src/views			   - View document - This is where CSS and Javascript plugins are appended




 
Step 1. Create directory and add files
———————————————————

Download app zip from google drive:
https://drive.google.com/open?id=0B6jwW4Gea3jLdFU2SFFiOTBrZVU

Or clone git repository:
Add link here



Step 2. Install Node and NPM
———————————————————

Node desktop installer can be found at:
https://nodejs.org/en/

After it’s done installing, if you’re using Terminal on a mac, locate the folder, and type ‘npm install’ to install node package manager and dependencies. further clarification on NPM can be found here:
http://blog.npmjs.org/post/85484771375/how-to-install-npm
Add link here



Step 3. Launch the web server to preview
———————————————————

Now using any web browser you should be able to visit localhost:3000 and view the demo.



Step 4. To edit styling, set up CSS pre-processor
———————————————————
This can be accomplished using a task runner, or this desktop app (koala-app.com) which will conveniently listen to your CSS and auto-process for you. 

Less files are found in ./src/less/custom.less and process into ./src/less/static/css/custom.css.

