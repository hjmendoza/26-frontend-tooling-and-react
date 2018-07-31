import React from 'react';
import ReactDOM from 'react-dom';
import { say } from 'cowsay';


const cowsay = require('cowsay');
const faker = require('faker/locale/de');

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { content: 'I say things' }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
   this.updateState(this.state.content);
  }

  updateState(content) {
    content = faker.lorem.words(10);

  this.setState({
    content,
  });
}

  render(){
    return (
    <React.Fragment>
      <h1>Generate Cowsay Lorem</h1>
      <button onClick={this.handleClick}>click me</button>
      <pre>
        {cowsay.say({
          text: this.state.content,
        })}
      </pre>
    </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));