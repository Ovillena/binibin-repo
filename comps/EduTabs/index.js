import React from 'react';
import styled from 'styled-components';
import MyButton from '../Button';
import { Grid, Tab } from 'semantic-ui-react';

//Testing Semantic tab api

const Cont = styled.div`
    display:flex;
    background-color:pink;
    width:500px;
    height:200px;
`

const panes = [
    { 
    menuItem: 'Garbage', 
    pane: '1' ,
    
    
    },

    { 
    menuItem: 'Recyclable', 
    pane: 'Tab 2 Content' 
    },

    { 
    menuItem: 'Compost', 
    pane: 'Tab 3 Content' 
    }, 

    { 
    grid: 'paneWidth:12'
    }

]

const EduTabs = ({
    width="200px",
    height="50px",
    bgcolor="#598B2C",
    text="Recycle BC: What Can I Recycle?",
    textcolor="#2C5489",
    routeTo="/"

}) =>{
    return <Cont>
        <Grid columns={1}>
            <Grid.Column width={16}>
                <Tab panes={panes} renderActiveOnly={false} menu={{
        attached: true,
        tabular: true,
        style: {
          display: "flex",
          justifyContent: "center",
        }
      }}
      
      />
            </Grid.Column>
        </Grid>
    </Cont>
}

export default EduTabs;