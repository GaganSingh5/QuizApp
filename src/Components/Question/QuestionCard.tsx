import { useEffect, useState } from "react";
import "./questionCard.scss";

const $colors = ["#8e90f1", "#94cdfa", "#e16854", "#5ab381"];

const QuestionCard = (props: any) => {

  const [bgColor,setbgColor] = useState("");

  useEffect(()=> {
    console.log("executed");
    const index = Math.floor(Math.random() * 4);
    console.log(index);
    
    setbgColor($colors[index]);
  },[])
  
  return (
    <div
      className="col-12 mx-2 mb-3 question--card flex-fill p-2"
      style={{ backgroundColor: `${bgColor}` }}
    >
      <h5 className="m-2 question--text heading-font px36-font">
        {props.questionText}{" "}
        {props.chooseMulti ? (
          <span key="multiTag" className="tag m-2 px-2 text-center">
            Choose Multiple
          </span>
        ) : null}
      </h5>
      <div className="m-1 d-flex justify-content-end flex-wrap">
        {props.tags.map((tag, index) => {
          return (
            <div key={index} className="tag m-2 px-2 text-center">
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
