import { useState } from "react"

function StateComponent() {

  //state - 컴포넌트 안에서 변화하는 값(즉 상태변수)
  //ctrl + space + Enter

  // const result = useState( '초기값' );
  // console.log(result);
  // const a = result[0]; //현재값
  // const b = result[1]; //함수

  const [data, setData] = useState('초기값');
  const [num, setNum] = useState(0);
  const [color, setColor] = useState('black');

  // state는 절대 직접 값을 수정하면 안 됩니다. setter를 사용하세요!
  // data = '이거 바꿔야지' //error

  // state는 이벤트 or 특정 함수안에서 바꾸도록 처리합니다.
  // setData('변경해야지') //error - 무한루프에 빠지게 됨

  const handleData = () => {
    setData('체인지!'); //비동기적으로 state값을 변경 -> 화면을 리렌더링 하게 됩니다
    setNum(10);
  }

  //빨간색변경
  //const handleColor = () => setColor('red');


  return(
    <div>
      스테이트값 : {data} 
      <br/>
      스테이트값 : {num}
      <br/>
      <button onClick={handleData}>스테이트값 변경</button> {/* handleData() X */}

      <br/>
      <h3 style={{color:color}}>{data}</h3>
      {/* <button onClick={handleColor}>붉은색</button> */}
      <button onClick={ () => setColor('red') }>붉은색</button>
      <button onClick={ () => setColor('blue') }>푸른색</button>
      <button onClick={ () => {
        setColor('green')
        } 
      }>초록색</button>

      


    </div>
  )
}

export default StateComponent