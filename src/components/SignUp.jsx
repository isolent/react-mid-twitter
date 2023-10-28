import React from 'react';
import './LogIn.css'
import { Link } from 'react-router-dom';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
  }

  render() {
    return (
      <div className="grid">
        <form action="https://httpbin.org/post" method="POST" className="form login" onSubmit={this.handleSubmit}>
          <div className="form__field">
            <label htmlFor="login__username">
              <span className="hidden">Username</span>
            </label>
            <input
              id="login__username"
              type="text"
              name="username"
              className="form__input"
              placeholder="Username"
              required
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form__field">
            <label htmlFor="login__password">
              <span className="hidden">Password</span>
            </label>
            <input
              id="login__password"
              type="text"
              name="password"
              className="form__input"
              placeholder="Password"
              required
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form__field">
          <Link to="/login"> {/* Используем Link для перехода */}
            <input type="submit" value="Sign Up" className='loginButton'/>
          </Link>
          
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;