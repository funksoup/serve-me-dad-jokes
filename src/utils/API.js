import axios from 'axios';

export default {
	getData: () => 
		axios({
			'method': 'GET', 
			'url': 'https://dad-jokes.p.rapidapi.com/random/jokes',
			'headers': {
				'content-type': 'application/json',
				'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
				'x-rapidapi-key': 'your-key',
				'useQueryString': true
			}
		})
};
