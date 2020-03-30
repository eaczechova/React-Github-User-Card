import styled from 'styled-components';

export const ContentWrapper = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

// Header

export const HeaderElement = styled.header`
	background-color: #24292e;
	width: 100%;
	height: 60px;
`;

export const Form = styled.form`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: flex-center;
	align-items: center;

	@media (min-width: 768px) {
		width: 30%;
		justify-content: flex-start;
	}
`;

export const Input = styled.input`
	width: 60%;
	border: none;
	background-color: rgb(48, 52, 56);
	padding: 5px;
	color: #d1d5da;
	border-radius: 5px;
	margin: 0 auto;

	&:focus {
		outline: none;
		background-color: #fff;
		color: gray;
	}
`;

export const Button = styled.button`
	width: 70px;
	padding: 5px;
	border: none;
	border-radius: 5px;
	margin: 0 auto;
	cursor: pointer;
	background: white;

	&:focus {
		outline: none;
	}
`;

// Users

export const Nav = styled.nav`
	border-bottom: 1px solid #e1e4e8;
	display: flex;
	justify-content: space-around;
	padding: 15px;
	font-size: 14px;
`;

export const Link = styled.a``;

export const ChartWrapper = styled.div`
	width: 100%;
	text-align: center;
`;

export const ChartImg = styled.img`
	width: 90%;

	@media (min-width: 768px) {
		width: 100%;
	}
`;

// Card

export const CardWrapper = styled.section`
	width: 100%;

	@media (min-width: 768px) {
		width: 30%;
		justify-content: flex-start;
	}
`;

export const Card = styled.div`
	display: flex;
	width: 100%;

	padding: 10px;
	flex-direction: column;
`;

export const Division = styled.div`
	width: 100%;

	@media (min-width: 768px) {
		width: 50%;
	}
`;

export const Image = styled.img`
	width: 233px;
	display: block;
	border-radius: 5px;
	margin: 0 auto;
`;

export const List = styled.ul`
	list-style: none;
	padding: 0 0 0 40px;
`;

export const ListItem = styled.li`
	padding: 5px;
	font-size: 14px;
	&:first-child {
		font-size: 26px;
		padding-bottom: 0;
	}
	&:nth-child(2) {
		font-size: 20px;
		padding-top: 0;
		color: #666;
	}
`;

export const Span = styled.span`
	font-weight: bold;
`;

export const UsersWrapper = styled.section`
	width: 100%;
`;

export const UserCard = styled.div`
	width: 100%;
	list-style: none;
	padding: 20px 5px;
	display: flex;
	border-bottom: 0.5px solid #e1e4e8;
	align-items: center;

	&:last-child {
		border-bottom: none;
	}
`;

export const UserImage = styled.img`
	width: 70px;
	display: block;
	border-radius: 5px;
`;

export const User = styled.li`
	padding: 10px;
	font-size: 12px;
`;
