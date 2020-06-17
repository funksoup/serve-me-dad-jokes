import axios from 'axios';

console.log('key:', process.env.REACT_APP_RAPIDAPI_KEY)

export default {
	getData: () => 
		axios({
			'method': 'GET', 
			'url': 'https://dad-jokes.p.rapidapi.com/random/jokes',
			'headers': {
				'content-type': 'application/json',
				'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
				'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
				'useQueryString': true
			}
		})
};
