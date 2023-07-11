import React from "react";

class MyComponent2 extends React.Component {

  render() {
    //클래스형 컴포넌트는 멤버변수 props로 자동전달이 됩니다
    //console.log( this.props );
    const {name, age} = this.props;

    return (
      <div>
        나의 클래스형 컴포넌트 ㅋㅋ <br/>
        클래스형프롭스: {name}<br/>
        클래스형프롭스: {age}<br/>
      </div>
    )
  }
}

//클래스형 컴포넌트도 defaultProps, PropTypes 모두 사용가능

export default MyComponent2