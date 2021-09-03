import React from 'react';
import { Header } from './components/header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      items: [],
    };
  }

  onValueChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onSubmit = () => {
    const value = this.state.value;
    const oldItems = [...this.state.items].concat({ name: value });
    this.setState({
      items: oldItems,
      value: '',
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div>
          <input
            type="text"
            placeholder="Write your item here"
            value={this.state.value}
            onChange={(e) => this.onValueChange(e)}
          />
          <button onClick={this.onSubmit}>Submit</button>
        </div>
        <div>
          <ul>
            {this.state.items.map((item) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
