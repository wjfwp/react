import { useState } from "react"

function StateComponentQ () {

  const[num, setNum] = useState(0);

  const plus = () => {
    setNum(num + 1);
  }
  /* 
  const minus = () => {
    setNum(num - 1);
  }
  */
  return(

    <div>
      <h3>실습</h3>
      <h3>카운트: {num}</h3>

      <button onClick={ plus }>증가</button>
      <button onClick={ () => setNum(num - 1) }>감소</button>
      <button onClick={ () => setNum(0) }>초기화</button>


    </div>
  )
}

export default StateComponentQ