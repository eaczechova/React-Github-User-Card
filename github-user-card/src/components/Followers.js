import React from 'react';
import { UserCard, UserImage, User } from './styles';

function Followers(props) {
	return (
		<div>
			{props.followers.map(user => (
				<UserCard key={user.id}>
					<User>
						<UserImage src={user.avatar_url} />
					</User>
					<div>
						<User>{user.login}</User>
						<User>
							<a href={user.html_url}>{user.html_url}</a>
						</User>
					</div>
				</UserCard>
			))}
		</div>
	);
}

export default Followers;
