import styled from 'styled-components';
import React, {useState, useEffect} from 'react';

import GuestNavBar from '../comps/GuestNavBar';
import Header from '../comps/HeaderText';
import Button from '../comps/Button';
import IGCR from '../comps/InputGCR';
import EntryItem from '../comps/EntryItem';
import { getFontDefinitionFromManifest } from 'next/dist/server/font-utils';
import UserNav from '../comps/UserNav';
import FooterComp from '../comps/footer';
import InputCounter from '../comps/InputCounter';
import AddEntry from '../comps/inputpage/addentry';
import SaveEntry from '../comps/inputpage/saveentry';

import { motion } from "framer-motion";
import PulseLoader from "react-spinners/PulseLoader";

const Cont = styled(motion.div)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  min-height: 100vh;
`;

const TopRow = styled.div`
  display:flex;
  width:100vw;
`;

const FooterCont = styled.div`
  display:flex;
  flex:1;
  align-items:flex-end;
  width:100vw;
`;

const SubCont = styled.div`
  display:flex;
`;

const CartCont = styled.div`
  display:flex;
  border: 5px solid #003274;
  border-radius:10px;
`

const TypeCont = styled.div`
  display:flex;
`

const LoadDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
`

let formData = {};

const resetStore = () => {
	// creating default state for localStorage
	console.log('------------------------store is being reset!');
	localStorage.garbageCount = 0;
	localStorage.garbageText = '';
	localStorage.compostCount = 0;
	localStorage.compostText = '';
	localStorage.recyclingCount = 0;
	localStorage.recyclingText = '';
};

export default function Input() {

    //-------Loading screen-----------
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 300)
    }, [])

    	//-------Click garbage function-----------

	const clickGarbage = () => {

		//NUMBER OF GARBAGE ITEMS

		//get the selected number of garbage option and turn it into a float
		var g = parseFloat(document.getElementById('garbageSelect').value);

		if (typeof Storage !== 'undefined') {
			//if there is something already stored in garbageCount,
			if (localStorage.garbageCount) {
				//add the selected option to the current garbageCount value in localstorage
				localStorage.garbageCount = parseFloat(localStorage.garbageCount) + g;
				document.getElementById('garbageSelect').selectedIndex = 0;
			} else {
				//if there were no garbage entries, set the garbageCount to zero
				localStorage.garbageCount = g;
				document.getElementById('garbageSelect').selectedIndex = 0;
			}
		}
		//display the garbage count in HTML
		document.getElementById('garbageCount').innerHTML = localStorage.garbageCount;

		//GARBAGE NOTES

		//get the newest inputted note for garbage
		var setGarbage = document.getElementById('garbageText').value;

		var addGarbageNote = function (garbageText, garinput, delimiter) {
			//get the existing notes stored in garbageText
			var existing = localStorage.getItem(garbageText);
			//add the newest inputted note to the existing notes
			var data = existing ? existing + delimiter + garinput : garinput;
			//save the new note
			localStorage.setItem(garbageText, data);
		};
		if (setGarbage !== '') {
			addGarbageNote('garbageText', setGarbage, ', ');
			document.getElementById('garbageText').value = '';
		}

		//display the garbage note in HTML
		document.getElementById('textGarbage').innerHTML = localStorage.garbageText;
	} // End of clickGarbage function

	//-------Click compost function-----------

	const clickCompost = () => {
		//NUMBER OF COMPOST ITEMS

		//get the selected number of compost option and turn it into a float
		var c = parseFloat(document.getElementById('compostSelect').value);

		if (typeof Storage !== 'undefined') {
			//if there is something already stored in compostCount,
			if (localStorage.compostCount) {
				//add the selected option to the current compostCount value in localstorage
				localStorage.compostCount = parseFloat(localStorage.compostCount) + c;
				document.getElementById('compostSelect').selectedIndex = 0;
			} else {
				//if there were no compost entries, set the compostCount to zero
				localStorage.compostCount = c;
				document.getElementById('compostSelect').selectedIndex = 0;
			}
		}
		//display the compost count in HTML
		document.getElementById('compostCount').innerHTML = localStorage.compostCount;

		//COMPOST NOTES

		//get the newest inputted note for compost
		var cominput = document.getElementById('compostText').value;

		var addCompostNote = function (compostText, cominput, delimiter) {
			//get the existing notes stored in compostText
			var existing = localStorage.getItem(compostText);
			//add the newest inputted note to the existing notes
			var data = existing ? existing + delimiter + cominput : cominput;
			//save the new note
			localStorage.setItem(compostText, data);
		};
		if (cominput !== '') {
			addCompostNote('compostText', cominput, ', ');
			document.getElementById('compostText').value = '';
		}

		//display the compost note in HTML
		document.getElementById('textCompost').innerHTML = localStorage.compostText;
	} // End of clickCompost function

	//---------CLICK RECYCLE FUNCTION-----------

	const clickRecycle = () => {
		//NUMBER OF RECYCLABLE ITEMS

		//get the selected number of recycle option and turn it into a float
		var r = parseFloat(document.getElementById('recycleSelect').value);

		if (typeof Storage !== 'undefined') {
			//if there is something already stored in recyclingCount,
			if (localStorage.recyclingCount) {
				//add the selected option to the current recyclingCount value in localstorage
				localStorage.recyclingCount = parseFloat(localStorage.recyclingCount) + r;
				document.getElementById('recycleSelect').selectedIndex = 0;
			} else {
				//if there were no recycle entries, set the recyclingCount to zero
				localStorage.recyclingCount = r;
				document.getElementById('recycleSelect').selectedIndex = 0;
			}
		}
		//display the recycle count in HTML
		document.getElementById('recycleCount').innerHTML = localStorage.recyclingCount;

		//RECYCLABLE NOTES

		//get the newest inputted note for recycle
		var recinput = document.getElementById('recycleText').value;

		var addRecycleNote = function (recyclingText, recinput, delimiter) {
			//get the existing notes stored in recyclingText
			var existing = localStorage.getItem(recyclingText);
			//add the newest inputted note to the existing notes
			var data = existing ? existing + delimiter + recinput : recinput;
			//save the new note
			localStorage.setItem(recyclingText, data);
		};
		if (recinput !== '') {
			addRecycleNote('recyclingText', recinput, ', ');
			document.getElementById('recycleText').value = '';
		}

		//display the recbage note in HTML
		document.getElementById('textRecycle').innerHTML = localStorage.recyclingText;
	} // End of clickRecycle function


	useEffect(() => {
		// creating default state for localStorage
		resetStore();
	}, []);
		// Modal Function
	const [isOpen, setIsOpen] = useState(false);
	const onSubmit = async (e) => {
		e.preventDefault();
		formData = {
			garbage_text: localStorage.garbageText,
			garbage_count: parseInt(localStorage.garbageCount),
			compost_text: localStorage.compostText,
			compost_count: parseInt(localStorage.compostCount),
			recycling_text: localStorage.recyclingText,
			recycling_count: parseInt(localStorage.recyclingCount),
			account_id: '2',
		};
		console.log(`i am form data~~~~ from on submit${formData}`);
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'https://binibinapp.vercel.app/',
			},
			body: JSON.stringify(formData),
		};
		// await fetch('http://localhost:8080/api/entries/add', requestOptions)
		await fetch('https://binibin-server.herokuapp.com/api/entries/add', requestOptions)
			.then((response) => {
				if (response.ok) {
					console.log(response);
					resetStore();
					setIsOpen(true);
				} else {
					throw new Error('Unable to perform POST request');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

  return(

    loading ? 
    <LoadDiv>
      <PulseLoader 
      color={'#003274'} 
      loading={loading} 
      size={20}
      />
      </LoadDiv>
      : 
      
    <Cont
    initial={{opacity:0}} 
    animate={{opacity:100, transition:{ease:"easeIn", duration:3, delay:0}}}
    >
			<SubCont>
				<Header text='Record New Entries'></Header>
			</SubCont>
      <SubCont>
        {/* <IGCR/> */}
        <AddEntry onButtonInteract={()=>{
          clickGarbage();
        }}/>
        <AddEntry onButtonInteract={()=>{
          clickCompost();
        }}/>
        <AddEntry onButtonInteract={()=>{
          clickRecycle();
        }}/>
      </SubCont>
      <SubCont>
        <SaveEntry />
      </SubCont>
      <FooterCont>
        <FooterComp></FooterComp>
      </FooterCont>
  </Cont>
  )
}