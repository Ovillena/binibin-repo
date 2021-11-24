import Footer from '../comps/footer';

import styled from 'styled-components';


import HeaderText from '../comps/HeaderText';
import IconComp from '../comps/Icon';
import Subhead from '../comps/SubheadText';

import UserContext from '../comps/UserContext';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const PageCont = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 90vh;
`;

const HeaderCont = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 30px;
`;

const FooterCont = styled.div`
	display: flex;
	flex: 1;
	align-items: flex-end;
`;

const TopIcons = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex: 1;
	flex-wrap: wrap;
	flex-direction: row;
`;

const BotRow = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
`;

const IconDiv = styled.div`
	text-align: center;
	flex-wrap: wrap;
	display: flex;
	flex-direction: column;
`;

const CardWrapper = styled.div``;

//Fake Data
const fakeData = [
	{
		account_id: 1,
		username: 'gates1',
		email: 'gates@gmail.com1',
		school_id: 1,
		admin_account_id: null,
		display_name: 'Principal Gates1',
		is_admin: true,
	},
	{
		account_id: 2,
		username: 'gates',
		email: 'gates@gmail.com',
		school_id: 1,
		admin_account_id: null,
		display_name: 'Principal Gates2',
		is_admin: true,
	},
];

export default function Dashboard() {
		const { user } = useContext(UserContext);
	console.log('------------------dashboard--------------------------');
	console.log(user);
	// axios
	//   .get(
	//     "https://binibin-server.herokuapp.com/auth/checkauth",
	//     // "http://localhost:8080/auth/checkauth",
	//     { withCredentials: true }
	//   )
	//   .then((res) => {
	//     console.log(res.data);
	//     setUser(res.data.username);
	//   })
	//   .catch((err) => {
	//     console.log(err);
	//   });

	return (
		//<div className={styles.container}>
		<PageCont>


			{/* {
        user.map((o,i)=>(
          <CardWrapper key={i}>
            <UserNav display_name={o.display_name}/>
          </CardWrapper>
          )
        )
      } */}

			<HeaderCont>
				<HeaderText text="Your Dashboard"></HeaderText>
			</HeaderCont>

			<TopIcons>
				<IconDiv>
					<IconComp iconSymbol='calendar check outline' routeTo='inputdata'></IconComp>
					<Subhead text='Record New Entries' fontsize='24px'></Subhead>
				</IconDiv>
				<IconDiv>
					<IconComp iconSymbol='chart bar' routeTo='graphs'></IconComp>
					<Subhead text='View Graphs' fontsize='24px'></Subhead>
				</IconDiv>
				<IconDiv>
					<IconComp iconSymbol='list' routeTo='pastentries'></IconComp>
					<Subhead text='View Past Entries' fontsize='24px'></Subhead>
				</IconDiv>
			</TopIcons>

			<BotRow>
				<IconDiv>
					<IconComp iconSymbol='wrench' routeTo='setting'></IconComp>
					<Subhead text='Account Settings' fontsize='24px'></Subhead>
				</IconDiv>
				<IconDiv>
					<IconComp iconSymbol='file text' routeTo='education'></IconComp>
					<Subhead text='How to Sort' fontsize='24px'></Subhead>
				</IconDiv>
				<IconDiv>
					<IconComp iconSymbol='headphones' routeTo='customerservice'></IconComp>
					<Subhead text='Customer Support' fontsize='24px'></Subhead>
				</IconDiv>
			</BotRow>

			<FooterCont>
				<Footer></Footer>
			</FooterCont>
		</PageCont>
		//</div>
	);
}
