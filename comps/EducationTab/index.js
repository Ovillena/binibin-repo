import React from 'react';
import styled from 'styled-components';
import {Tab, Tabs, AppBar, Box} from '@mui/material';
import EduGarbage from '../../pages/edu_garbage';
import EduRecycle from '../../pages/edu_recyclable';
import EduCompost from '../../pages/edu_compost';

//Testing MUI tabs api 

const Cont = styled.div`
    background-color:pink;
    width:70%;
`

//<Box sx={{ bgcolor: 'green', width:'50%' }}>

const EducationTab = ({

}) =>{
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
      };

    return <Cont>
        
        <AppBar position='relative' >
            <Tabs value={selectedTab} onChange={handleChange} centered >
                <Tab label="Garbage" />
                <Tab label="Recycle" />
                <Tab label="Compost" />
            </Tabs>
        </AppBar>
        {selectedTab === 0 && <EduGarbage/>}
        {selectedTab === 1 && <EduRecycle/>}
        {selectedTab === 2 && <EduCompost/>}
       
    </Cont>
}

export default EducationTab;