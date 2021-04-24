import axios from 'axios';
		
export default {
	getData: () => 
		axios({
			'method': 'GET', 
			'url': 'https://dad-jokes.p.rapidapi.com/random/jokes',
			'headers': {
				'content-type': 'application/json',
				'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
				'x-rapidapi-key': '83e2ffda39mshfb48b56ec2d3ee0p1c3384jsn1a0d5e951ea9',
				'useQueryString': true
			}
		})
};
