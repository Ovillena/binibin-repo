import styled from 'styled-components';
import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import 'react-tabs/style/react-tabs.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import GuestNavBar from '../comps/GuestNavBar';
import Header from '../comps/HeaderText';
import Footer from '../comps/footer';
import Button from '../comps/Button';
import IGCR from '../comps/InputGCR';
import BoldText from '../comps/BoldText';
import EntryItem from '../comps/EntryItem';
import { getFontDefinitionFromManifest } from 'next/dist/server/font-utils';

const Cont = styled.div`
  display:flex;
  flex-direction:column;
  margin:10px;
  padding:5px;
  justify-content:center;
  align-items:center;
`;
  
const SubCont = styled.div`
  display:flex;
`;

export default function Home() {
  const [added, setAdded] = useState(null);
  useEffect(() => {
    const GetAdded = async () => {
      await axios
        .get("https://binibin-server.herokuapp.com/api/entries")
        .then((resp) => {
          console.log(resp.data);
          setAdded(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    GetAdded();
  }, []);
  return(
    <Cont>
    <SubCont>
      <Popup
        trigger={<button className="button"> View Added Entries </button>}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <Header text="Added Entries"></Header>
            <div>
              {added?
              added.map((o,i)=>(
                <div key={i}>
                  <EntryItem
                    entry_id={o.entry_id}
                    item_name={o.item_name}
                    item_count={o.item_count}
                    unit={o.unit}
                    waste_type={o.waste_type}
                  />
                </div>
              )): <p>No added entries. Come back after you add your first entry!</p>}
            </div>
            <div className="actions">
              <button onClick={() => {close();}}>Close</button>
              <button className="close" onClick={close}>&times;</button>
              <button>Submit Entries</button>
            </div>
          </div>
        )}
      </Popup>
    </SubCont>
    <SubCont>
      <IGCR/>
      <IGCR item_name="Compost" waste_type="compost" src="compost.png" alt="compost"note="Example: cherry stem and seed, and apple core"/>
      <IGCR item_name="Recycling" waste_type="compost" src="juicebox.png" alt="compost" note="Example: juice box and container" optional="mandatory"/>
      {/* <IRS/> */}
    </SubCont>
  </Cont>
  )
}