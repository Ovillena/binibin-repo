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
import Counter from '../comps/inputpage/counter';

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

const RowCont = styled.div`
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

      // function ClickGarbage() {
    // const [itemcount, setItemCount] = useState(0);
        
    // var value = 0;
    // if(itemcount){
    //   value = AddEntry.itemcount
    // }

    // const ClickGarbage = async (e) => {
      // e.preventDefault();
      // console.log(`waste type: ${AddEntry.waste_type}; `)
        // weight: ${AddEntry.event.weight.value}; 
        // note: ${AddEntry.event.target.textnote.value};
      // console.log(localStorage.garbageCount);
      // console.log(value);
      // setItemCount(itemcount);
      // setItemCount(itemcount);
    // };

		//NUMBER OF GARBAGE ITEMS
    // const [Garvalue, setGarValue] = useState(0);

		//get the selected number of garbage option and turn it into a float
    // function componentDidUpdate() {
    //   var g = JSON.stringify(this.state);
    //   localStorage.setItem('garbage', g);
    // }
    // var g = parseFloat(document.getElementById('garbageSelect').value);
    // var g = AddEntry.value
    // console.log(g)

    // const [value, setValue] = useState('');
		// if (typeof Storage !== 'undefined') {
		// 	//if there is something already stored in garbageCount,
		// 	if (localStorage.garbageCount) {
		// 		//add the selected option to the current garbageCount value in localstorage
		// 		localStorage.garbageCount = parseFloat(localStorage.garbageCount) + g;
		// 		document.getElementById('garbageSelect').selectedIndex = 0;
		// 	} else {
		// 		//if there were no garbage entries, set the garbageCount to zero
		// 		localStorage.garbageCount = g;
		// 		document.getElementById('garbageSelect').selectedIndex = 0;
		// 	}
		// }
		//display the garbage count in HTML
		// document.getElementById('garbageCount').innerHTML = localStorage.garbageCount;

		// //GARBAGE NOTES

		// //get the newest inputted note for garbage
		// var setGarbage = document.getElementById('garbageText').value;

		// var addGarbageNote = function (garbageText, garinput, delimiter) {
		// 	//get the existing notes stored in garbageText
		// 	var existing = localStorage.getItem(garbageText);
		// 	//add the newest inputted note to the existing notes
		// 	var data = existing ? existing + delimiter + garinput : garinput;
		// 	//save the new note
		// 	localStorage.setItem(garbageText, data);
		// };
		// if (setGarbage !== '') {
		// 	addGarbageNote('garbageText', setGarbage, ', ');
		// 	document.getElementById('garbageText').value = '';
		// }

		// //display the garbage note in HTML
		// document.getElementById('textGarbage').innerHTML = localStorage.garbageText;
	// } // End of clickGarbage function

	useEffect(() => {
		// creating default state for localStorage
		resetStore();
	}, []);
		// Modal Function
	const [isOpen, setIsOpen] = useState(false);
	const onSubmit = async (e) => {
		e.preventDefault();
    // for (var i = 0; i < localStorage.length; i++){
    //   console.log(localStorage.getItem(localStorage.key(i)));
    // }
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
			<RowCont>
				<Header text='Record New Entries'></Header>
			</RowCont>
      <RowCont>
        {/* <IGCR/> */}
        <AddEntry 
          item_name = 'Garbage'
          color = '#E9E9E9'
        //   onButtonInteract = { () => {
        //   ClickGarbage();
        // } }
        />
        <AddEntry 
          item_name = 'Compost'
          img_src='/tea-bag.png'
          alt = 'compost bag'
          color = '#E2EED7'
        //   onButtonInteract={()=>{
        //   clickCompost();
        // }}
        />
        <AddEntry 
          item_name = 'Recycling'
          img_src='/newspaper.png'
          alt = 'newspaper'
          color = '#DFEAEF'
        //   onButtonInteract={()=>{
        //   clickRecycle();
        // }}
        />
      </RowCont>
      <RowCont>
        <SaveEntry 
          onSubmitInteract = { () => {onSubmit} }
        />
      </RowCont>
      <FooterCont>
        <FooterComp></FooterComp>
      </FooterCont>
  </Cont>
  )
}