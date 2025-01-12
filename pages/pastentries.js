import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../comps/HeaderText';
import EntryItem from '../comps/EntryItem';
import EntryDate from '../comps/EntryDate';
import FooterComp from '../comps/footer';

import { motion } from 'framer-motion';
import PulseLoader from 'react-spinners/PulseLoader';
import { getAllData } from '../network';

const ContDiv = styled(motion.div)``;

const HeaderCont = styled.div`
	display: flex;
	justify-content: center;
`;

const FooterCont = styled.div`
	display: flex;
	flex: 1;
	align-items: flex-end;
`;

const Cont = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 20px;
	margin: auto;
	max-width: 700px;
`;

const AllDaysList = styled.div`
	margin: 10px;
`;

const EntryDayList = styled.div`
	display: flex;
	margin: 5px 20px 0px 20px;
	border: 3px solid #95afba;
	justify-content: center;
	border-radius: 10px;
`;

const ListSection = styled.div`
	display: flex;
	margin: 10px;
	align-items: center;
	overflow: auto;
	flex-wrap: wrap;
`;

const SideSection = styled.div`
	display: flex;
	margin: 10px;
`;

const LoadDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export default function Home() {
	const [entries, setEntries] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getAllData()
			.then((resp) => {
				console.log(resp.data);
				setEntries(resp.data);
				//-------Loading screen-----------
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);



	return loading ? (
		<LoadDiv>
			<PulseLoader color={'#003274'} loading={loading} size={20} />
		</LoadDiv>
	) : (
		<ContDiv
			initial={{ opacity: 0 }}
			animate={{ opacity: 100, transition: { ease: 'easeIn', duration: 3, delay: 0 } }}
		>
			<HeaderCont>
				<Header text='Review Your Past Entries'></Header>
			</HeaderCont>
			<Cont
				initial={{ opacity: 0 }}
				animate={{ opacity: 100, transition: { ease: 'easeIn', duration: 3, delay: 0 } }}
			>
				{entries ? (
					entries.map((o, i) => (
						<AllDaysList key={i}>
							{/* <EntryDate entry_date={o.entry_date} />
                we changed the json from database to return month and day instead of entry_date
              */}
							<EntryDate entry_date={o.month + '/' + o.day} />
							<EntryDayList>
								<ListSection>
									<EntryItem
										entry_id={o.entry_id}
										garbage_text={o.garbage_text}
										garbage_count={o.garbage_count}
										compost_text={o.compost_text}
										compost_count={o.compost_count}
										recycling_text={o.recycling_text}
										recycling_count={o.recycling_count}
									/>
								</ListSection>
								<SideSection>{/* <EntryEdit>Edit</EntryEdit> */}</SideSection>
							</EntryDayList>
						</AllDaysList>
					))
				) : (
					<p>Make your first entry!</p>
				)}
			</Cont>
			<FooterCont>
				<FooterComp></FooterComp>
			</FooterCont>
		</ContDiv>
	);
}
