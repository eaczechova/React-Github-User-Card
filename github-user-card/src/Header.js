import React from 'react';
import { HeaderElement, Form, Input, Button } from './components/styles';

function Header(props) {
	return (
		<HeaderElement>
			<Form onSubmit={props.handleSearch}>
				<Input
					type="text"
					onChange={props.handleChange}
					placeholder="Search..."
					value={props.searchInput}
				/>
				<Button>Search</Button>
			</Form>
		</HeaderElement>
	);
}

export default Header;
