import React from "react";
import Logo from "./assets/logo.svg";
// import {getColor, getTextColor, getNumber} from "./functions";
// import Card from "./Card";
import Box from "./Box";

// const n = getNumber(100);
// console.log(n);
// console.log(getColor());
// console.log(invert(getColor()));
// console.log(getTextColor(getColor()));

// el.style.background = "red"

export default () => {
    // const nums = [];
    // for (let i = 0; i < n; i++) {
        // const color = getColor()
        // nums.push(<div 
        //     className="num"
        //     key={i}
        //     style={{
        //         background: color,
        //         color: getTextColor(color)
        //     }}
        //     // style={{
        //     //     background: "rgb(7, 37, 37)",
        //     //     color: "rgb(248, 218, 218)"
        //     // }}
        // >
        //     {getNumber(100)}
        // </div>)
        // nums.push(<Card key={i} content={getNumber(100)} color={getColor()}/>)
    // }
    // console.log(nums);
    return <>
        <h1>
            Simple React App
            <img src={Logo} alt="React"/>
        </h1>
        <Box/>
        {/*<div className="container">
            {nums}
        </div>*/}
    </>
}
