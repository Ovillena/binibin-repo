import styled from 'styled-components';
import { Image, Menu, Button} from 'semantic-ui-react';
import MyButton from '../Button';


const NavCont = styled.div`
    display:flex;
    min-width:200px;
    height:130px;
    background-color:white;
    box-shadow:0px 3px 30px grey; 
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    flex:1;
`

const LogoCont = styled.div`
    padding-left:30px;
    flex:1;
`

const TextCont = styled.div`

`

const NavItems = styled.div`
    font-size:24px;
    padding:10px;
`


const GuestNavBar = ({

}) =>{
    return <NavCont>
        <LogoCont>
            <Image src="/binibinlogo.png" alt="BiniBin Logo" width={204} height={52} />
        </LogoCont>
        <NavItems>
            <TextCont>About Us</TextCont>
        </NavItems>
        <NavItems>
            <TextCont>Features</TextCont>
        </NavItems>
        <NavItems>
            <TextCont>Learn More</TextCont>
        </NavItems>
        <NavItems>
            <MyButton></MyButton>
        </NavItems>
    </NavCont>
    
}

export default GuestNavBar;