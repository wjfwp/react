import React from "react";

//클래스형에서 props와 state
class StateComponent2 extends React.Component {

  //클래스형 컴포넌트가 생성될 때 생성자로 프롭스 전달
  constructor(props) {
    super(props);
    //state 생성
    this.state = {
      name : '홍길동',
      age : props.age
    }
  }
  
  handleState = () => {
    //비동기적으로 state 변경
    this.setState({name: '이순신', age: 30});
  }


  render() {

    //const {age} = this.props; -a
    return (
      <div>

        <div>클래스형 컴포넌트</div>

        {/* 프롭스값: {age} -a*/}

        스테이트값: {this.state.name} <br/>
        스테이트값: {this.state.age} <br/>

        <button onClick={this.handleState}>스테이트 체인지</button>
      
      </div>

    )
  }

}

export default StateComponent2