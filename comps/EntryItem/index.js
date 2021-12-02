import styled from 'styled-components';

const ItemCont = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
	padding: 5px;
	align-items: center;
`;

const Square = styled.div`
	min-width: 30px;
	max-width: 30px;
	min-height: 30px;
	max-height: 30px;
	border-radius: 5px;
	background-color: ${(props) => props.color};
`;

const ItemName = styled.p`
	font-weight: bold;
	margin: 10px 5px 10px 10px;
`;

const ItemQuantity = styled.p`
	font-weight: bold;
`;

const SingleItem = styled.div`
  display:flex;
  align-items:center;
  margin:0 10px 10px; 10px;
`;

const Notes = styled.div`
	display: flex;
	width: 100%;
`;

const Text = styled.span`
	white-space: pre-line;
	width: 33%;
	margin-right: 5px;
	padding: 10px;
	background-color: ${({ color }) =>
		(color === 'garbage' && '#E9E9E9') ||
		(color === 'compost' && '#E2EED7') ||
		(color === 'recycling' && '#DFEAEF')};
`;

const Minimized = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;

const Expand = styled.button`
	background-color: #ffc800;
	border: none;
	border-radius: 10px;
	font-weight: bold;
	height: 25px;
	margin-top: 8px;
	margin-left: 10px;
	&:hover {
		background-color: #e5a500;
	}
`;

const EntryItem = ({
	garbage_text,
	garbage_count,
	compost_text,
	compost_count,
	recycling_text,
	recycling_count,
	expandContainer,
	show = false,
}) => {
	if (show === false) {
		return (
			<ItemCont>
				<Minimized>
					<SingleItem>
						<Square color='#000' />
						<ItemName>Garbage</ItemName>
						<ItemQuantity>&times; {garbage_count}</ItemQuantity>
					</SingleItem>
					<SingleItem>
						<Square color='#598B2C' />
						<ItemName>Compost</ItemName>
						<ItemQuantity>&times; {compost_count}</ItemQuantity>
					</SingleItem>
					<SingleItem>
						<Square color='#2C5489' />
						<ItemName>Recycling</ItemName>
						<ItemQuantity>&times; {recycling_count}</ItemQuantity>
					</SingleItem>
					<Expand
						onClick={() => {
							expandContainer();
						}}
					>
						Show Notes
					</Expand>
				</Minimized>
			</ItemCont>
		);
	}
	return (
		<ItemCont>
			<Minimized>
				<SingleItem>
					<Square color='#000' />
					<ItemName>Garbage</ItemName>
					<ItemQuantity>&times; {garbage_count}</ItemQuantity>
				</SingleItem>
				<SingleItem>
					<Square color='#598B2C' />
					<ItemName>Compost</ItemName>
					<ItemQuantity>&times; {compost_count}</ItemQuantity>
				</SingleItem>
				<SingleItem>
					<Square color='#2C5489' />
					<ItemName>Recycling</ItemName>
					<ItemQuantity>&times; {recycling_count}</ItemQuantity>
				</SingleItem>
				<Expand
					onClick={() => {
						expandContainer();
					}}
				>
					Hide Notes
				</Expand>
			</Minimized>
			<Notes>
				<Text color='garbage'>{garbage_text} </Text>
				<Text color='compost'>{compost_text} </Text>
				<Text color='recycling'>{recycling_text} </Text>
			</Notes>
		</ItemCont>
	);
};

export default EntryItem;
