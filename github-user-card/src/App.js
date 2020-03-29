import React from 'react';
import './App.css';
import Header from './Header';
import MyAccount from './components/MyAccount';
import Chart from './components/Chart';
import GitHubFollowers from './components/Users';
import { ContentWrapper, Division } from './components/styles';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			user: [],
			followers: [],
			login: 'eaczechova',
			searchInput: ''
		};
	}

	fetchMyCard = login => {
		fetch(`https://api.github.com/users/${login}`)
			.then(res => res.json())
			.then(data => {
				this.setState({ user: data });
			})
			.catch(err => console.error(err));
	};

	fetchMyGithubFollowers = login => {
		fetch(`https://api.github.com/users/${login}/followers`)
			.then(res => res.json())
			.then(data => {
				console.log('followersdata ', data);
				this.setState({ followers: data });
			})
			.catch(err => console.error(err));
	};

	handleChange = e => {
		this.setState({ searchInput: e.target.value });
	};

	handleSearch = e => {
		e.preventDefault();
		let search = this.state.followers.filter(follower =>
			follower.login.toLowerCase().includes(this.state.searchInput.toLowerCase())
		);
		if (search.length > 0) {
			this.setState({
				login: search[0].login
			});
		}
	};

	componentDidMount() {
		this.fetchMyCard(this.state.login);
		this.fetchMyGithubFollowers(this.state.login);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.login !== this.state.login) {
			this.fetchMyCard(this.state.login);
			this.fetchMyGithubFollowers(this.state.login);
		}
	}

	render() {
		return (
			<main>
				<Header
					handleChange={this.handleChange}
					searchInput={this.state.searchInput}
					handleSearch={this.handleSearch}
				/>
				<ContentWrapper>
					<MyAccount user={this.state.user} />
					<Division>
						<Chart user={this.state.user} />
						<GitHubFollowers followers={this.state.followers} />
					</Division>
				</ContentWrapper>
			</main>
		);
	}
}

export default App;
