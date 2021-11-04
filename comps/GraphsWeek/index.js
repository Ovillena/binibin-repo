import styled from "styled-components";
import React from "react";

{/* <div id="month">
<i class="arrow" id="left"></i>
<div id="today_date">
    <h1></h1>
    <div></div>
</div>
<i class="arrow" id="right"></i>
</div> */}


const WeekCont = styled.div`
    Display:flex;

`

const Subheader = styled.h1`
    font-size:${props=>props.fontsize};
    color:${props=>props.color};
`

const PrevArrow = styled.i`
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);

    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
`

const NextArrow = styled.i`
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);

    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
`

const WeekDiv = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;
    min-width:200px;
    min-height:80px;
`

const ArrowDiv = styled.div`

`


const WeekOfComp = ({
    text="Week of November",
    color="#95AFBA",
    fontsize="36px",
    onPrevInteract=()=>{},
    onNextInteract=()=>{},

}) =>{

    return <WeekCont>
        <ArrowDiv>
            <PrevArrow onClick={()=>{
                onPrevInteract();
            }}></PrevArrow>
        </ArrowDiv>

            <WeekDiv>
                <Subheader color={color} fontsize={fontsize}>{text}</Subheader>
            </WeekDiv>

        <ArrowDiv>
            <NextArrow onClick={()=>{
                onNextInteract();
            }}></NextArrow>
        </ArrowDiv>

    </WeekCont>
}

export default WeekOfComp;