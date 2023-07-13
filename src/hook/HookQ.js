import { useEffect, useRef } from "react"


function HookQ () {

  

  useEffect(() => {
    idRef.current.focus();
  },[]);


  const idRef = useRef(null);
  const pwRef = useRef(null);

  const handleClick = () => {
    console.log(idRef.current.value);
    console.log(pwRef.current.value);

    if(idRef.current.value == "" && pwRef.current.value ==""){
      alert('아이디와 비밀번호를 입력하세요');
      idRef.current.focus();
      return;
    }

    if(idRef.current.value == ""){
      alert('아이디를 입력하세요');
      idRef.current.focus();
      return;
    } else if(pwRef.current.value ==""){
      alert('비밀번호를 입력하세요');
      pwRef.current.focus();
      return;
    }
    
    alert(`아이디: ${idRef.current.value}, 비밀번호: ${pwRef.current.value}`);
  }

  return(
    <div>
      <h3>실습</h3>
      로그인 클릭시 공백이라면 공백인 태그에 포커스를 추가하세요 <br />
      로그인 클릭시 공백이 아니라면 경고창으로 입력된 id,pw를 출력해주세요 <br />
      첫번째 마운트 이후에는 id에 자동 포커싱 해주세요<br />

      <input type="text" name="id" placeholder="아이디" ref={idRef}/> <br />
      <input type="text" name="pw" placeholder="비밀번호" ref={pwRef}/> <br />
      <button onClick={handleClick}>로그인</button>
    </div>
  )
}

export default HookQ