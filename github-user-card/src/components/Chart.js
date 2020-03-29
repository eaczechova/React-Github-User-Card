import React from 'react';
import { ChartWrapper, ChartImg } from './styles';

function Chart({ user }) {
	return (
		<ChartWrapper>
			{user.name ? (
				<h3>{`${user.name}'s Github chart`}</h3>
			) : (
				<h3> Github chart</h3>
			)}
			<ChartImg
				src={`https://ghchart.rshah.org/${user.login}`}
				alt={`${user.name}'s Github chart`}
			/>
		</ChartWrapper>
	);
}

export default Chart;
