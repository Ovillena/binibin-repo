import styled from 'styled-components';
import { Image, Menu, Button, Item } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import UserContext from '../../comps/UserContext';

import React from 'react';

const NavCont = styled.div`
	position: relative;
	display: flex;
	min-width: 200px;
	min-height: 80px;
	box-shadow: 0px 3px 30px rgb(0 0 0 / 0.2);
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	flex: 1;
`;

const LogoCont = styled.div`
	padding-left: 30px;
`;

const TextCont = styled.div`
	color: #003274;
	font-weight: bold;
	padding: 10px;
	&:hover {
		background-color: #eef9ff;
	}
`;

const NavItems = styled.a`
	font-size: 24px;
	padding: 10px;
	cursor: pointer;
`;

const GreetingCont = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const RightCol = styled.div`
	display: flex;
	flex-direction: column;
`;
const ItemsDiv = styled.div`
	display: flex;
`;

const SubHeader = styled.h2`
	font-size: 24px;
	color: #0e73aa;
	margin-right: 20px;
`;

export async function getStaticProps(context) {
	return {
		props: { data }, // will be passed to the page component as props
	};
}

const UserNav = ({ router = useRouter(), displayName = 'Username' }) => {
	const { signOut } = useContext(UserContext);
	return (
		<NavCont>
			<LogoCont>
				<Image
					src='/binibinlogo.png'
					alt='BiniBin Logo'
					width={135}
					height={35}
					onClick={() => router.push('/')}
				/>
			</LogoCont>

			<RightCol>
				<GreetingCont>
					<SubHeader>Hello, {displayName}</SubHeader>
				</GreetingCont>

				<ItemsDiv>
					<NavItems>
						<TextCont onClick={() => router.push('/dashboard')}>Dashboard</TextCont>
					</NavItems>
					{/* <NavItems>
            <TextCont onClick={() => router.push("/education")}>
              Educate
            </TextCont>
          </NavItems> */}
					<NavItems>
						<TextCont onClick={() => router.push('/input')}>Input</TextCont>
					</NavItems>
					<NavItems>
						<TextCont onClick={() => router.push('/pastentries')}>Entries</TextCont>
					</NavItems>
					<NavItems>
						<TextCont onClick={() => router.push('/graphs')}>Graphs</TextCont>
					</NavItems>
					<NavItems>
						<TextCont onClick={signOut}>Log Out</TextCont>
					</NavItems>
				</ItemsDiv>
			</RightCol>
		</NavCont>
	);
};

export default UserNav;
