import React from 'react';
import styled from 'styled-components';
import {Tab, Tabs, AppBar} from '@mui/material';
import Graphs from '../../pages/graphs';
import AboutUs from '../../pages/aboutus';

//Testing MUI tabs api 

const Cont = styled.div`

`



const EducationTab = ({

}) =>{
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
      };

    return <Cont>
        <AppBar>
            <Tabs value={selectedTab} onChange={handleChange} >
                <Tab label="Garbage" />
                <Tab label="Recycle" />
                <Tab label="Compost" />
            </Tabs>
        </AppBar>
        {selectedTab === 0 && <Graphs/>}
        {selectedTab === 1 && <AboutUs/>}
        {selectedTab === 2 && <AboutUs/>}
        
    </Cont>
}

export default EducationTab;