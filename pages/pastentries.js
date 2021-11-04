import styled from 'styled-components';
import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import EntryItem from '../comps/EntryItem';
import EntryDate from '../comps/EntryDate';
// import EntryList from '../comps/EntryList';

const Cont = styled.div`
  display:flex;
  flex-direction:column;
`;

const AllDaysList = styled.div`
  margin:10px;
`;

const EntryDayList = styled.div`
  display:flex;
  background-color:#eee;
  margin:5px 20px 0px 20px;
`;

const ListSection = styled.div`
  display:flex;
  margin:10px;
  background-color:#ddd;
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
    item_name: "Sample Can (200 mL)",
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
    entry_date: "November 1",
    item_name: "Compost",
    item_count: 400,
    unit: "g",
    waste_type: "compost"
  },{
    entry_id: 4,
    entry_date: "November 1",
    item_name: "Milk Carton (1 L)",
    item_count: 2,
    unit: "units",
    waste_type: "recycling"
  }
]

export default function Home() {
  const [entries, setEntries] = useState(fakeData);
  // const GetEntries = async ()=>{
  //   const result = await axios.get("https://binibin-server.herokuapp.com/api/entries");
  //   console.log(result.data)
  // }
  // useEffect(()=>{
  //   const GetEntries = async()=>{
  //     const result = await axios.get("https://binibin-server.herokuapp.com/api/entries")
  //     console.log(result);
  //     setEntries(result.data);
  //   }

  //   GetEntries()
  // }, [])
  return(
    <Cont>
      {
        entries.map((o,i)=>(
          <AllDaysList key={i}>
            <EntryDayList>
              <SideSection>
                <EntryDate entry_date={o.entry_date}/>
              </SideSection>
              <ListSection>
                  <EntryItem entry_id={o.entry_id} item_name={o.item_name} item_count={o.item_count} unit={o.unit} waste_type={o.waste_type}/>
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
  )
}
//"entry_id": 1,
// "item_name": "Can (200 mL)",
// "item_count": 5,
// "unit": "unit",
// "waste_type": "recycling"