import React from "react";
import {getTextColor, getColor, getNumber} from "./functions"

const Card = ({
	color = "rgb(0,0,0)", 
	content = "0"
}) => {
	const st = {
		background: color,
		color: getTextColor(color)
	}
	const upd = () => {
		const data = JSON.parse(localStorage.getItem("nums"));
		const newData = data.map(el => {
			if (el.number === content && el.color === color) {
				el = {
					number: getNumber(100),
					color: getColor()
				}
			}
			return el;
		})
		localStorage.setItem("nums", JSON.stringify(newData));
		// Так лучше не делать!
        location.reload();
	}
	const del= () => {
		const data = JSON.parse(localStorage.getItem("nums"));
		const newData = data.filter(el => !(el.number === content && el.color === color))
		localStorage.setItem("nums", JSON.stringify(newData));
		// Так лучше не делать!
        location.reload();
	}
	return <div className="num" style={st} onClick={upd}>{content}</div>
}

export default Card;


/*
	<div 
        className="num"
        key={i}
        style={{
            background: color,
            color: getTextColor(color)
        }}
    >
        {getNumber(100)}
    </div>
*/