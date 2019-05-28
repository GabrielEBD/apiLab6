import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';
var jwt = require('jsonwebtoken')
const URL = `http://${url}:${port}/${entryPoint}`;



const resolvers = {
	Query: {
	},
	Mutation: {
		login: async (_, { credentials }) =>{
			let res = await	generalRequest(`${URL}`, 'POST', credentials)
			console.log(res)
			if(res){
				var tokenData = {
					username: res
				}
				var token = await jwt.sign(tokenData, 'Secret Password', {expiresIn: 60 * 60 * 24})
				return token
			}else{
				return "-1"
			}
		}			
	}
};

export default resolvers;
