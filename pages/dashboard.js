import Footer from '../comps/footer';

import styled from 'styled-components';

import HeaderText from '../comps/HeaderText';
import IconComp from '../comps/Icon';
import Subhead from '../comps/SubheadText';

import UserContext from '../comps/UserContext';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import { motion } from 'framer-motion';
import PulseLoader from "react-spinners/PulseLoader";

const PageCont = styled(motion.div)`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
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

const TopIcons = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
	flex: 1;
	flex-wrap: wrap;
	flex-direction: row;
`;

const BotRow = styled(motion.div)`
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

const CardWrapper = styled.div`

`;

const LoadDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
`

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

	  //-------Loading screen-----------
	  const [loading, setLoading] = useState(false);

	  useEffect(() => {
		setLoading(true)
		setTimeout(() => {
		  setLoading(false)
		}, 300)
	  }, [])

	return (

		loading ?
		<LoadDiv>
		  <PulseLoader
		  color={'#003274'}
		  loading={loading}
		  size={20}
		  />
		  </LoadDiv>
		  :

		<PageCont
		initial={{opacity:0}}
		animate={{opacity:100, transition:{ease:"easeIn", duration:3, delay:0}}}
		>
			<HeaderCont>
				<HeaderText text='Your Dashboard'></HeaderText>
			</HeaderCont>

			<TopIcons
			initial={{opacity:0}}
			animate={{opacity:100, transition:{ease:"easeIn", duration:1, delay:0}}}
			>
				<IconDiv>
					<motion.div whileHover={{scale:1.1 }}>
					<IconComp iconSymbol='calendar check outline' routeTo='input'></IconComp>
					</motion.div>
					<Subhead text='New Entries' fontsize='24px'></Subhead>
				</IconDiv>

				{/* <IconDiv>
					<motion.div whileHover={{scale:1.1 }}>
					<IconComp iconSymbol='list' routeTo='pastentries'></IconComp>
					</motion.div>
					<Subhead text='Past Entries' fontsize='24px'></Subhead>
				</IconDiv> */}

				<IconDiv>
					<motion.div whileHover={{scale:1.1 }}>
					<IconComp iconSymbol='chart bar' routeTo='graphs'></IconComp>
					</motion.div>
					<Subhead text='View Graphs' fontsize='24px'></Subhead>
				</IconDiv>
			</TopIcons>

			{/* <BotRow

			>
				<IconDiv>
					<motion.div whileHover={{scale:1.1 }}>
					<IconComp iconSymbol='wrench' routeTo='setting'></IconComp>
					</motion.div>
					<Subhead text='Account Settings' fontsize='24px'></Subhead>
				</IconDiv>

				<IconDiv>
					<motion.div whileHover={{scale:1.1 }}>
					<IconComp iconSymbol='file text' routeTo='education'></IconComp>
					</motion.div>
					<Subhead text='How to Sort' fontsize='24px'></Subhead>
				</IconDiv>

				<IconDiv>
					<motion.div whileHover={{scale:1.1 }}>
					<IconComp iconSymbol='headphones' routeTo='customerservice'></IconComp>
					</motion.div>
					<Subhead text='Customer Support' fontsize='24px'></Subhead>
				</IconDiv>
			</BotRow> */}

			<FooterCont>
				<Footer></Footer>
			</FooterCont>

		</PageCont>
		//</div>
	);
}
