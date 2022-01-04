import styled from 'styled-components';
import React, {useState, useEffect} from 'react';

import Header from '../comps/HeaderText';
import FooterComp from '../comps/footer';
import SetEntries from '../comps/Input/entrysettings';
import AddEntry from '../comps/Input/addentry';
import SaveEntry from '../comps/Input/saveentry';
import Modal from '../comps/Modal';

import { motion } from "framer-motion";
import PulseLoader from "react-spinners/PulseLoader";
import BoldText from '../comps/BoldText';

const PageCont = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const FooterCont = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  width: 100vw;
`;

const FlexCont = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

const LoadDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const resetStore = () => {
	// creating default state for localStorage
	console.log('CLEAR local storage');
	localStorage.clear()
};

export default function Input() {

  // loading screen
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, [])

  // on submit stuff
  let formData = {};

	useEffect(() => {
    // creating default state for localStorage
		resetStore();
	}, []);

  // modal function
	const [isOpen, setIsOpen] = useState(false);

  // submit function
  const onSubmit = async (e) => {
    e.preventDefault();
    // logging all items in localStorage
    console.log("START OF data to be submitted")
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      if (key !== "ally-supports-cache") {
        console.log(key + ": " + value);
      }
    }
    console.log("END OF data to be submitted")
    formData = {
      date: localStorage.date,
      subacct: localStorage.subacct,
      garbage_count: parseInt(localStorage.garbageCount),
      compost_count: parseInt(localStorage.compostCount),
      recycling_count: parseInt(localStorage.recyclingCount),
    }

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

    <PageCont
      initial={{opacity:0}}
      animate={{opacity:100, transition:{ease:"easeIn", duration:3, delay:0}}}
    >
			<FlexCont>
				<Header text='Record New Entries'/>
			</FlexCont>
      <FlexCont>
        <SetEntries/>
      </FlexCont>
      <FlexCont>
        {/* <AddEntry
          item_name = 'Garbage'
          color = '#E9E9E9'
        />
        <AddEntry
          item_name = 'Compost'
          img_src='/tea-bag.png'
          alt = 'compost bag'
          color = '#E2EED7'
        />
        <AddEntry
          item_name = 'Recycling'
          img_src='/newspaper.png'
          alt = 'newspaper'
          color = '#DFEAEF'
        /> */}
        <AddEntry
          item_name = 'Item 1'
          color = '#E9E9E9'
        />
        <AddEntry
          item_name = 'Item 2'
          color = '#E2EED7'
        />
        <AddEntry
          item_name = 'Item 3'
          color = '#DFEAEF'
        />
      </FlexCont>
      <FlexCont>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <BoldText text='Success! Your entries have been submitted.' />
        </Modal>
        <SaveEntry
          onSubmitInteract = { (e) => {onSubmit(e)} }
        />
      </FlexCont>
      <FooterCont>
        <FooterComp></FooterComp>
      </FooterCont>
  </PageCont>
  )
}