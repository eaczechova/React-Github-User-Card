import React from 'react';
import Followers from './Followers.js';
import { UsersWrapper, Nav, Link } from './styles';

function GitHubFollowers(props) {
	return (
		<UsersWrapper>
			<Nav>
				<Link>
					Followers<span></span>
				</Link>
			</Nav>
			<Followers followers={props.followers}></Followers>
		</UsersWrapper>
	);
}
export default GitHubFollowers;
