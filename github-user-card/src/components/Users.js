import React from 'react';
import Followers from './Followers.js';
import { UsersWrapper, Nav, Link } from './styles';

function Users(props) {
	console.log(props.user);
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
export default Users;
