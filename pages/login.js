import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";


import Header from "../comps/HeaderText";
import Footer from "../comps/footer";
import Image from "next/image";
import LoginComp from "../comps/LoginForm";

const PageCont = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: space-between;
	min-height: 90vh;
	background-color: #eef9ff;
	padding-top: 3em;
`;

const MidCont = styled.div`
  display: flex;
  padding-top: 10em;
  margin: 200 50 200 50px;
`;

const LeftCont = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  margin-right: 50px;
`;

const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const FooterCont = styled.div`
  display: flex;
  align-items: flex-end;
`;

//Fake Data
const fakeData = [
  {
    account_id: 1,
    username: "gates1",
    email: "gates@gmail.com1",
    school_id: 1,
    admin_account_id: null,
    display_name: "Principal Gates1",
    is_admin: true,
  },
  {
    account_id: 2,
    username: "gates",
    email: "gates@gmail.com",
    school_id: 1,
    admin_account_id: null,
    display_name: "Principal Gates2",
    is_admin: true,
  },
];

export default function Login() {
  // const [user, setUser] = useState(fakeData);

  // useEffect(() => {
  //   const GetUser = async () => {
  //     const resp = await axios.get(
  //       "https://binibin-server.herokuapp.com/auth/login"
  //     );
  //     // .catch((err)=>{
  //     //   console.log(err);

  //     // });
  //     console.log(resp);
  //     //setUser(resp.data)

  //     //user.map not a function error when I uncomment the setUser. so it's still pulling from fakeData
  //   };

  //   GetUser();
  // }, []);

  return (
    //<div className={styles.container}>
    <PageCont>


      {/* {
        user.map((o,i)=>(
          <CardWrapper key={i}>
            <UserNav display_name={o.display_name}/>
          </CardWrapper>
          )
        )
      } */}

      <MidCont>
        <RightCont>
          <Header text="Login"></Header>
          <LoginComp></LoginComp>
        </RightCont>

        <LeftCont>
          <Image src={"/6162.png"} width={853} height={447} />
        </LeftCont>
      </MidCont>

      <FooterCont>
        <Footer></Footer>
      </FooterCont>
    </PageCont>
    //</div>
  );
}
