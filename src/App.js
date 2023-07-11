import { Fragment } from "react";
import MyComponent from "./component/MyComponent";
import MyComponent2 from "./component/MyComponent2";
import MyComponent3 from "./component/MyComponent3";


function App() {

  return (
    <Fragment>
      <div>나의 새로운 컴포넌트</div>

      <MyComponent name={'홍길동'} age={20} addr={'서울시'} email={'상위@naver.com'}/>
      <MyComponent name={'이순신'} age={30} addr={'경기도'} /> 
      <MyComponent name={'대장금'} /> 

      {/* 클래스형 컴포넌트 */}
      <MyComponent2 name={'신사임당'} age={40}/>


      <div>실습</div>
      {/* 
      함수형 컴포넌트 MyComponent3 를 생성합니다
      porps는 title, content, writer를 전달합니다.
      writer의 기본값은 'admin으로 선언해주세요'
      */}
      <MyComponent3 title={'hi'} content={'hello'}/>
    </Fragment>
  )
}
export default App;