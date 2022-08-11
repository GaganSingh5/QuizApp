import { useEffect, useRef, useState } from "react";


const Timer = ({autoSubmit}) => {
  const [time, setTime] = useState(0);
  const [barWidth, setBarWidth] = useState(-1.666666666666667);
  const [timeout, setTimeout] = useState(false);
  const timerRef = useRef(1);
  const barRef = useRef<HTMLDivElement | null>(null);
  const timer = ()=>{
    const timerId =  window.setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    console.log(timerId);

    return timerId;
  } 
  useEffect(() => {
    console.log("First UseEffect Executed");
    timerRef.current = timer();
    return () => {
      console.log("CleanUp Event");
      console.log(timerRef.current);
      // autoSubmit();
      clearInterval(timerRef.current);
    };
    
  }, [timeout]);

  useEffect(() => {
    console.log("Second UseEffect Executed");
    const barElement = barRef.current
    if(barElement) {
      setBarWidth(prevWidth=>{
        barElement.style.width = prevWidth + 1.666666666666667 + "%";
        return prevWidth + 1.666666666666667;
      })
    }
    console.log(`Time is ${time}`);
    
    if(time === 60) {
      console.log("TimedOut");
      
      setTimeout(true);
      if (barElement) {
        setBarWidth(-1.666666666666667);
        setTime(0);
        // autoSubmit();
        barElement.style.width = "0%";
      }
    }
  }, [time,autoSubmit]);


  

  return (
    <div className="timer--container col-12 mx-2 mb-3 d-flex flex-fill p-0">
      <div className="timer flex-fill">
        <div ref={barRef} className="time--bar"></div>
      </div>

      <div className="timer--text text-center">
        <p>{time}</p>
      </div>
    </div>
  );
}

export default Timer
