import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import FeaturesCard from '../comps/FeaturesCard';
import icon2 from '/public/icon_throw_away.png';
import Header from '../comps/HeaderText';
import Footer from '../comps/footer';
import InputTab from '../comps/Input';
import UserNav from '../comps/UserNav';
import IGCR from '../comps/InputGCR';

const PageCont = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const HeaderCont = styled.div`
	display: flex;
	justify-content: center;
`;

const FeaturesCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin-bottom: 30px;
`;

const ButtonCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
`;

export default function Home() {
	// --------- Form for post submission ---------
	const postData = {
		garbage_text: localStorage.garbageText,
		garbage_count: parseInt(localStorage.garbageCount),
		compost_text: localStorage.compostText,
		compost_count: parseInt(localStorage.compostCount),
		recycling_text: localStorage.recyclingText,
		recycling_count: parseInt(localStorage.recyclingCount),
	};

	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(postData),
	};

	const resetStore = () => {
		// creating default state for localStorage
		localStorage.garbageCount = 0;
		localStorage.garbageText = '';
		localStorage.compostCount = 0;
		localStorage.compostText = '';
		localStorage.recyclingCount = 0;
		localStorage.recyclingText = '';
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		await fetch('https://binibin-server.herokuapp.com/api/entries/add', requestOptions)
			.then((response) => {
				if (response.ok) {
					console.log(response);
					alert(`Your entry has been submitted!`);
					resetStore();
				} else {
					throw new Error('Unable to perform POST request');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		// creating default state for localStorage
		resetStore();
	}, []);

	return (
		//<div className={styles.container}>
		<PageCont>
			<HeaderCont>
				<Header text='Input Data'></Header>
			</HeaderCont>
			<FeaturesCont>
				<IGCR></IGCR>
			</FeaturesCont>
			<Footer></Footer>
		</PageCont>
		//</div>
	);
}
