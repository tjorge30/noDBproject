import axios from 'axios';
import './App.css';

export default class App extends Component {
  // the constructor function invoking super and setting state
  constructor() {
    super()

    this.state = {
      example: true,
    }
  }

  render() {
    return (
      <div>
        <h1>This is an example class component to show off the component did mount hook</h1>
      </div>
    )
  }
}
