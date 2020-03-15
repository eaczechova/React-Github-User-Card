import React from 'react';
import './App.css';
import MyAccount from './components/MyAccount';
import Users from './components/Users';
import Followers from './components/Followers';
import { Header, ContentWrapper } from './components/styles';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			user: [],
			followers: []
		};
	}

	componentDidMount() {
		fetch('https://api.github.com/users/eaczechova')
			.then(res => res.json())
			.then(data => {
				console.log(data);
				this.setState({ user: data });
			})
			.catch(err => console.error(err));

		fetch('https://api.github.com/users/eaczechova/followers')
			.then(res => res.json())
			.then(data => {
				console.log(data);
				this.setState({ followers: data });
			})
			.catch(err => console.error(err));
	}

	render() {
		return (
			<div>
				<Header />
				<ContentWrapper>
					<MyAccount user={this.state.user} />
					<Users followers={this.state.followers} />
				</ContentWrapper>
			</div>
		);
	}
}
export default App;
