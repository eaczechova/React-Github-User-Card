import React from 'react';
import { CardWrapper, Division, Image, Card, List, ListItem } from './styles';

function MyAccount(props) {
	return (
		<CardWrapper>
			<Card>
				<Division>
					<Image src={props.user.avatar_url} alt="profile" />
				</Division>
				<Division>
					<List>
						<ListItem>{props.user.name}</ListItem>
						<ListItem>{props.user.login}</ListItem>
						<ListItem>{props.user.bio}</ListItem>
						<ListItem>{props.user.location}</ListItem>
					</List>
				</Division>
			</Card>
		</CardWrapper>
	);
}
export default MyAccount;
