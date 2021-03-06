import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//COMPONENTS
import Header from './components/header';
import JSON from './db.json';
import NewsList from './components/news_list';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            news:JSON
        }
    }

    filterNews(keyWords) {
        console.log(keyWords)
    }

    render (){
        return(
            <div>
                <Header/>
                <NewsList news={this.state.news}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));