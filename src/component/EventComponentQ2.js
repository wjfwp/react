import { useState } from "react"

function EventComponentQ2() {

  const [data, setData] = useState({cont: '', result: ''});

  const handleChange = (e) => {
    //e.target <==== tag

    //내 풀이
    // console.log(e.target.name);
    // console.log(e.target.value);

    // const copy = {...data, [e.target.name]:e.target.value};
    // console.log(copy);
    // setData(copy);

    //선생님 풀이
    //setData({cont: e.target.value, result: ''}) result값이 공백일때 어떻게 되는 지 확인해보기
    setData({cont: e.target.value, result: data.result})

  }

  const handleClick = () => {
    setData({cont: '', result: data.cont})
  }


  return(

    <div>
      <h3>인풋데이터 핸들링(실습)</h3>
      클릭시 데이터는 공백으로, 결과는 인풋이 입력한 값으로 처리합니다<br />
      힌트는? 아마도 state는 두개가 필요할 듯?

      <br />
      <input type="text" name="cont" onChange={handleChange} value={data.cont}/>
      <button onClick={handleClick}>추가하기</button>

      <h3>결과</h3>
      <p>{data.result}</p>

    </div>

  )
}

export default EventComponentQ2