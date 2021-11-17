import React from 'react';
import styled from 'styled-components';
import {Tab, Tabs, AppBar, Box, createTheme} from '@mui/material';
import EduGarbage from '../../pages/edu_garbage';
import EduRecycle from '../../pages/edu_recyclable';
import EduCompost from '../../pages/edu_compost';


//Testing MUI tabs api 

const Cont = styled.div`
    width:70%;
    border: 5px solid #0E73AA;
    border-radius:10px;
    background-color:#97BCD0;
`
const styles = theme => ({
  indicator: {
    backgroundColor: 'white',
  },
})


//sx to override styles
//<Box sx={{ bgcolor: 'green', width:'50%' }}>

const EducationTab = ({


}) =>{



    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
      };

    return <Cont>
        
        <AppBar position='relative' 
        sx={{
            height:'88px', 
            backgroundColor:'#0E73AA',
            justifyContent:'center',
            }}>

            <Tabs 
            value={selectedTab} 
            onChange={handleChange} 
            centered 
            textColor='black' 
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{ 

            }}>
                <Tab label="Garbage"
                sx={{ 
                  fontFamily:'Hind, sans-serif',
                  fontSize:24, 
                  fontWeight: 'semi-bold'
                  
                }}>
                </Tab>

                <Tab label="Recycle"
                  sx={{ 
                    fontFamily:'Hind, sans-serif',
                    fontSize:24, 
                    fontWeight: 'semi-bold'
                  
                  }}>
                </Tab>
                <Tab label="Compost"
                  sx={{ 
                    fontFamily:'Hind, sans-serif',
                    fontSize:24, 
                    fontWeight: 'semi-bold'
                
                  }}>

                </Tab>
            </Tabs>
        </AppBar>
        {selectedTab === 0 && <EduGarbage/>}
        {selectedTab === 1 && <EduRecycle/>}
        {selectedTab === 2 && <EduCompost/>}
       
    </Cont>
}

export default EducationTab;