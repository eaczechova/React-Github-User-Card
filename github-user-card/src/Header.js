import React from 'react';
import { HeaderElement, Form, Input, Button } from './components/styles';

function Header({ handleSearch, handleChange, searchInput }) {
	return (
		<HeaderElement>
			<Form onSubmit={handleSearch}>
				<Input
					type="text"
					onChange={handleChange}
					placeholder="Search..."
					value={searchInput}
				/>
				<Button>Search</Button>
			</Form>
		</HeaderElement>
	);
}

export default Header;
