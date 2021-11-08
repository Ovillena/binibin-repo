import styled from 'styled-components';
import BoldText from '../BoldText';

const DateCont = styled.div`

`;

const EntryDate = ({
  entry_date="November 4"
}) => {
  return <DateCont>
      <BoldText text={entry_date}/>
    </DateCont>
}

export default EntryDate;