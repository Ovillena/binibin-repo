import styled from 'styled-components';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Cont = styled.div`
    display:flex;
`


const EduGarbage = ({
    width="200px",
    height="50px",
    bgcolor="#598B2C",
    text="Recycle BC: What Can I Recycle?",
    textcolor="#2C5489",
    routeTo="/"

}) =>{
    return <Cont>
        <Tabs>
            <TabList>
                <Tab>Garbage</Tab>
                <Tab>Recyclable</Tab>
                <Tab>Compost</Tab>
            </TabList>

            <TabPanel>
            <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
            <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
    </Cont>

}

export default EduGarbage;