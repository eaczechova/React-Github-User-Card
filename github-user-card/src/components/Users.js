import React from 'react';
import Followers from './Followers.js';
import { UsersWrapper, Nav, Link } from './styles';

function GitHubFollowers({ followers }) {
	return (
		<UsersWrapper>
			<Nav>
				<Link>Followers</Link>
			</Nav>
			<Followers followers={followers}></Followers>
		</UsersWrapper>
	);
}
export default GitHubFollowers;
