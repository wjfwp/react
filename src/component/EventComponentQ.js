import { useState } from "react"

function EventComponentQ() {

  const [food, setFood] = useState('');

  const handleChange= (e) => {
    setFood(e.target.value);
  }

  return(
    <div>
      <h3>셀렉트 태그 핸들링(실습)</h3>
      셀렉트 태그가 체인지 될 떄 선택한 결과를 아래에 출력

      <br />
      <select onChange={handleChange}>
        <option>피자</option>
        <option>햄버거</option>
        <option>치킨</option>
      </select>

      <h3>선택한 결과</h3>
      <p>{food}</p>

    </div>
  )
}

export default EventComponentQ