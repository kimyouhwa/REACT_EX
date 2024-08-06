import React, { Component } from "react";

class LifeCycle_01 extends Component{
    constructor(props) {    // 생명주기 함수중 가장 먼저 실행, 처음 한 번만 호출
        super(props);     
        this.state = {};
        console.log('1. constructor Call');
    }
    render(){
        console.log('3. render call');

        return(
            <h2>[ THIS IS CONSTRUCTOR FUNCTION ]</h2>
        )
    }
}
export default LifeCycle_01;