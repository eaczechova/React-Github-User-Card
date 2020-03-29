import React from 'react';
import { CardWrapper, Division, Image, Card, List, ListItem } from './styles';

function MyAccount({ user }) {
	return (
		<CardWrapper>
			<Card>
				<Division>
					<Image src={user.avatar_url} alt="profile" />
				</Division>
				<Division>
					<List>
						<ListItem>{user.name}</ListItem>
						<ListItem>{user.login}</ListItem>
						<ListItem>{user.bio}</ListItem>
						<ListItem>{user.location}</ListItem>
					</List>
				</Division>
			</Card>
		</CardWrapper>
	);
}
export default MyAccount;
