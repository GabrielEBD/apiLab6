import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
	},
	Mutation: {
		login: (_, { credentials }) =>
			generalRequest(`${URL}`, 'POST', credentials)
	}
};

export default resolvers;
