**Steps to run this project**

In the project directory, you can run below command to run the project

_If you don't have installed yarn please install first_
_`npm install -g yarn`_



To install all the dependencies
## `yarn`


**Compile typescript and run node server**

## `yarn dev`

- It will compile and make a build into dist directory
- By default it will run on PORT 4000
- Update the .env if you want to change default port

**Run the server on pre compiled files**

## `yarn start`


**Create build only**

### `yarn build`


**To create api docs**
### `yarn docs`


**To run unit test(Please make sure server is running before running unit test case)**

### `yarn test`



### General overview of written node script
 - Fully Typescript 
 - Files system as database(Allowed on any machine to store data into json format without using additional database setup)
 - Airbnb coding standard
 - Mocha and chai for unit test cases
 - API docs to write api documentation

