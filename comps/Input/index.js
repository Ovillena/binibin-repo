import React from 'react';
import styled from 'styled-components';
import {Tab, Tabs, AppBar, Box} from '@mui/material';
import { Item } from 'semantic-ui-react';
import useSWR from 'swr';
import Garbages from '../Garbage';
import Recycles from '../Recycle';

//Testing MUI tabs api 

const Cont = styled.div`
    width:70%;
    border: 5px solid #95AFBA;
    border-radius:10px;
`

//sx to override styles
//<Box sx={{ bgcolor: 'green', width:'50%' }}>

const InputTab = ({

}) =>{
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
      };

    return <Cont>
        
        <AppBar position='relative'
            sx={{
            height:'88px', 
            backgroundColor:'#95AFBA',
            justifyContent:'center',
            }}>
            <Tabs value={selectedTab} onChange={handleChange} centered textColor='black' indicatorColor="secondary"
            sx={{
                
            }}>
                <Tab label="Garbage/Compost"></Tab>
                <Tab label="Recycle/Search"></Tab>
                
            </Tabs>
        </AppBar>
        {selectedTab === 0 && <Garbages/>}
        {selectedTab === 1 && <Recycles/>}
       
    </Cont>
}

export default InputTab;