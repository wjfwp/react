import { useRef, useState } from "react"


function HookRef() {

  //state
  const [form, setForm] = useState({data: '', result: ''});

  //useRef
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const copy = {...form, 'data': e.target.value};
    console.log(copy);
    setForm(copy);
  }

  const handleClick = () => {
    // console.log(inputRef); //콘솔창 : {current: input}
    //ref의 current속성에 태그를 넣어줍니다.
    console.log(inputRef.current); //태그
    console.log(inputRef.current.value); //태그값

    setForm({data: '', result: inputRef.current.value}); 

    inputRef.current.focus(); //인풋태그에 포커스
  }

  return(
    <div>
      <h3>useRef(특정태그 이름달기)</h3>

      <input type="text" onChange={handleChange} value={form.data} ref={inputRef}/>
      <button onClick={handleClick}>확인하기</button>

      {form.result}
    </div>
  )
}

export default HookRef