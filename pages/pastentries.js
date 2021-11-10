import styled from 'styled-components';
import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import GuestNavBar from '../comps/GuestNavBar'
import Header from '../comps/HeaderText';
import Footer from '../comps/footer';
import EntryItem from '../comps/EntryItem';
import EntryDate from '../comps/EntryDate';
import EntryLegend from '../comps/EntryLegend';
// import EntryList from '../comps/EntryList';

const PageCont = styled.div`
  display:flex;
  justify-content:center;
`;

const HeaderCont = styled.div`
  display:flex;
  justify-content:center;
`

const Cont = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:20px;
`;

const AllDaysList = styled.div`
  margin:10px;
`;

const EntryDayList = styled.div`
  display:flex;
  margin:5px 20px 0px 20px;
  border: 3px solid #95AFBA;
  justify-content:space-between;
`;

const ListSection = styled.div`
  display:flex;
  margin:10px;
  align-items:center;
  overflow:auto;
  flex-wrap:wrap;
`;

const SideSection = styled.div`
  display:flex;
  margin:10px;
`;

const EntryEdit = styled.a`

`;

const fakeData = [
  {
    entry_id: 1,
    entry_date: "November 3",
    item_name: "Tin Can (200 mL)",
    item_count: 5,
    unit: "units",
    waste_type: "recycling"
  },{
    entry_id: 2,
    entry_date: "November 2",
    item_name: "Garbage",
    item_count: 500,
    unit: "g",
    waste_type: "garbage"
  },{
    entry_id: 3,
    entry_date: "November 2",
    item_name: "Compost",
    item_count: 50,
    unit: "g",
    waste_type: "compost"
  },{
    entry_id: 4,
    entry_date: "November 1",
    item_name: "Juice Box (100mL)",
    item_count: 2,
    unit: "units",
    waste_type: "recycling"
  },{
    entry_id: 5,
    entry_date: "November 3",
    item_name: "Garbage",
    item_count: 10,
    unit: "g",
    waste_type: "garbage"
  }
]
//"entry_id": 1,
// "item_name": "Can (200 mL)",
// "item_count": 5,
// "unit": "unit",
// "waste_type": "recycling",

export default function Home() {
  const [entries, setEntries] = useState(fakeData);
  // const axios = require('axios');

  useEffect(()=>{
    const GetEntries = async()=>{
      // const result = await axios.get("https://ghibliapi.herokuapp.com/films")
      const result = await axios.get("https://binibin-server.herokuapp.com/api/entries")
      .then (resp => {
        console.log(resp.data);
      })
      .catch (err => {
        console.log(err);
      })
      console.log(result);
      // setEntries(result.data);
    }
    GetEntries()        
    // sort all entries by date
    // create a new div (EntryDayList) for each new day
    // it there are entries with the same date, put them under the same div
  }, [])
  return(
    <>
      <GuestNavBar/>
      <HeaderCont>
        <Header text="Waste Tracked for November"></Header>
      </HeaderCont>
      <PageCont>
        <Cont>
          {
            entries.map((o,i)=>(
              <AllDaysList key={i}>
                <EntryDate entry_date={o.entry_date}/>
                <EntryDayList>
                  <ListSection>
                      <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/>
                      {/* <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/>
                      <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/>
                      <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/>
                      <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/>
                      <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/>
                      <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/>
                      <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/>
                      <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/>
                      <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/> */}
                  </ListSection>
                  <SideSection>
                    <EntryEdit>Edit</EntryEdit>
                  </SideSection>
                </EntryDayList>
              </AllDaysList>
              )
            )
          }
        </Cont>
        <EntryLegend/>
      </PageCont>
      <Footer/>
    </>
  )
}