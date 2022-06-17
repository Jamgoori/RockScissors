import React from "react";

const Box = (props) => {
  let result1;
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
    result1 = props.result === "win" ? "lose" : "win";
  } else {
    // 위의 경우가 아니라면 props 로 전달된 결과를 그대로 쓴다.
    result1 = props.result;
  }
  if (props.title === "Computer") {
    console.log("computer", result1);
  }
  return (
    <div className={`box ${result1}`}>
      <div >{props.title}</div>
      <div className="item-name">{props.item && props.item.name}</div>
      <img className="item-img" src={props.item && props.item.img}></img>
      <p>{result1}</p>
    </div>
  );
};

export default Box;
