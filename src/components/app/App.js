import React from 'react';
import '../../assets/Inter/inter.css';
import './App.css';
import Theme from '../styles/Theme';

import {
	ApolloProvider,
	ApolloClient,
	HttpLink,
	InMemoryCache
} from '@apollo/client';
import AppHandler from '../appHandler/AppHandler';

function App() {
	const client = new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri: 'http://localhost:8000/graphql/'
		})
	});

	return (
		<ApolloProvider client={client}>
			<Theme>
				<AppHandler />
			</Theme>
		</ApolloProvider>
	);
}

export default App;
