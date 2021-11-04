import styled from 'styled-components';

const DateCont = styled.div`

`;

const Date = styled.h4`

`;

const EntryDate = ({
  entry_date="November 4"
}) => {
  return <DateCont>
      <Date>
        {entry_date}
      </Date>
    </DateCont>
}

export default EntryDate;