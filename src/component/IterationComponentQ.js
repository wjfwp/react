import { useState } from "react";


function IterationComponentQ() {

  //데이터 - public폴더 밑에 예시로 사용하기 위해 넣습니다.
  const arr = [
    {src : '/img/img1.png', title : '아이폰10', price: 1000},
    {src : '/img/img2.png', title : '아이폰11', price: 2000},
    {src : '/img/img3.png', title : '아이폰12', price: 3000},
    {src : '/img/img4.png', title : '아이폰13', price: 4000},
  ]

  //1. arr을 state로 관리
  const [list, setList] = useState(arr); //setList는 필요없으면 삭제해도 됨

  //2. img를 관리할 state변수
  const [img, setImg] = useState('/img/img1.png');

  //3. 이벤트 함수
  const handleClick = (e) => {
    //console.log(e.target.tagName);
    //이미지가 아니라면 종료
    if(e.target.tagName !== 'IMG') {
      return;
    }

    setImg(e.target.src);

  }

  //3. 이벤트
  const newList = list.map( (item, index) =>
      <div key={index} onClick={handleClick}>
        <img src={item.src} width="100" alt={item.title} />
        <p>
          상품:{item.title}
        </p>
        <p>
          가격:{item.price}
        </p>
      </div>
    
    )

  return(
    <>
      <h3>이미지 데이터 반복해보기</h3>

      <div>
        <img src={img} alt="" />
      </div>

      <div style={{display:'flex', justifyContent:"space-around"}}>
        {newList}
      </div>
    
    </>



  )




  /* 내 풀이
  const [list, setList] = useState(arr);
  const img = list.map( item => <li style={{ display:"inline-block"}} onClick={ () => handleClick(item)}> 
                                <img src={item.src} alt="" /> 
                                <p style={{textAlign:"center"}}>상품:{item.title}</p> 
                                <p style={{textAlign:"center"}}>가격:{item.price}</p>
                                </li>);
  
  const [result, setResult] = useState('');

  const handleClick = (item) => {
    console.log(item.src);

    
    setResult(item);
  }

  return(
    <div>
      <h3>이미지 데이터 반복해보기</h3>
      <div>
        <img src={result.src} alt="" />
        <p>{result.title}</p>
        <p>{result.price}</p>
      </div>
      
      <ul style={{listStyle:"none"}}>
        {img}
      </ul>
    </div>
  ) 
  */
}

export default IterationComponentQ