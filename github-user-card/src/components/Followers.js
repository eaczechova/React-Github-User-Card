import React from 'react';
import { UserCard, UserImage, User } from './styles';

function Followers({ followers }) {
	return (
		<>
			{followers.map(follower => (
				<UserCard key={follower.id}>
					<User>
						<UserImage src={follower.avatar_url} />
					</User>
					<div>
						<User>{follower.login}</User>
						<User>
							<a href={follower.html_url}>{follower.html_url}</a>
						</User>
					</div>
				</UserCard>
			))}
		</>
	);
}

export default Followers;
