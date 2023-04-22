import React from "react";
import Card from "./Card";
import {getNumber, getColor} from "./functions";

// const Box = () => {
// 	const n = getNumber(100);
// 	const nums = [];
//     for (let i = 0; i < n; i++) {
//         const color = getColor()
//         nums.push(<Card key={i} content={getNumber(100)} color={getColor()}/>)
//     }
// 	return <div className="container">
//         {nums}
//     </div>
// }

// export default Box;

/*
	1) При первой загрузке сайта сохранять квадратики в LS (число + цвет)
	2) При нажатии на кнопку "добавить" в конец добавляется еще один квадратик
	3) При нажатии на квадратик он удаляется ? изменяется
	4) При нажатии на кнопку "Обновить" формируется новая база с квадратиками 
*/

const Box = () => {

	const nums = localStorage.getItem("nums")?.[0] === "[" 
		? JSON.parse(localStorage.getItem("nums"))
		: [];
	if (!nums.length) {
		const n = getNumber(100);
	    for (let i = 0; i < n; i++) {
	        nums.push({
	        	number: getNumber(100),
	        	color: getColor()
	        })
	        // nums.push(<Card key={i} content={getNumber(100)} color={getColor()}/>)
	    }
	    localStorage.setItem("nums", JSON.stringify(nums))
	} 
	const btnStyle = {
		gridColumnEnd: "span 3"
	}
	const add = () => {
		nums.push({
        	number: getNumber(100),
        	color: getColor()
        })
        localStorage.setItem("nums", JSON.stringify(nums))
        // Так лучше не делать!
        location.reload();
	}
	const upd = () => {
		localStorage.removeItem("nums");
		// Так лучше не делать!
        location.reload();
	}

	console.log(nums)
	return <div className="container">
		<button style={btnStyle} onClick={add}>Добавить</button>
		<button style={btnStyle} onClick={upd}>Обновить</button>
        {nums.map((el, i) => <Card key={i} content={el.number} color={el.color}/>)}
    </div>
}

export default Box;