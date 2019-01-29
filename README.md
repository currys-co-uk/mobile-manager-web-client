# mobile-manager-web-free

## How to compile and run the website
 1. Install NodeJs
 2. npm install -g less
 3. npm install -g less-watch-compiler
 4. npm install
 5. npm run build-css
 6. start less-watch-compiler
 7. npm run start

 ## Running tests
 npm run test

 ## Debugging tests
 1. Use VS Code
 2. Press F5

 ## Specify Mobile Manager backend
 1. create/edit file .env in main directory
 2. add following env variables
	REACT_APP_mobileManagerApi='http://mm_ip_addr:mm_port/api/v1'
	REACT_APP_mobileManagerServerUrl='http://mm_ip_addr:mm_port'
	REACT_APP_ENV='production' 

