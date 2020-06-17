
# Serve Me a Dad Joke

A Father's Day treat: A web application that generates random dad jokes with punchlines that don't match. 

------

## Tech/Framework Used

Project is created with:

* JavaScript
* Node.js
* Axios library
* React 
* React Bootstrap library


## Usage

Describe the application's functionality:

The application will be invoked with the following command:
```
npm start
```

Running `npm start` will execute the web app and render the page. Jokes are fetched using the <a href="https://rapidapi.com/KegenGuyll/api/dad-jokes/">Dad Jokes API</a> from RapidAPI. 

The API request is in the `API.js` file in the `utils` folder under the `src` folder. Create a `.env` file in the root folder of the app and include the following, where `your-key` should be replaced with your own RapidAPI key:

`REACT_APP_RAPIDAPI_KEY = 'your-key'`

Rendering of joke setup and punchlines is in the `App.js` file in the `src` folder, along with accompanying css and index files.


This gif demonstrates the application's functionality:

<img src = "/public/images/dadjokes-demo.gif" width="600">


## License

This project is licensed under the MIT license.


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


### Step 1

* Option 1:🍴 Fork this repo!

* Option 2: 👯 Clone this repo to your local machine using https://github.com/funksoup/serve-me-dad-jokes.git

### Step 2

* HACK AWAY! 🔨🔨🔨

### Step 3

* 🔃 Create a new pull request using https://github.com/funksoup/serve-me-dad-jokes/compare


