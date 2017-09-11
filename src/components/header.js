import React, { Component } from 'react';


class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            title:'the keywords are:',
            keywords:''
        }
    }

    inputChange(event) {
        this.setState({keywords:event.target.value})
    }
    render(){
        return(
            <header>
                <div className="logo"
                onClick={()=>{console.log('clicked')}}
                >Logo</div>
                <input onChange={this.inputChange.bind(this)}/>
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>
            </header>
        )
    }
}

export default Header;