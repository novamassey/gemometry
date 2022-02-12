import { Component } from 'react';
import "./SignUpForm.css";
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    this.setState({
    })
    try{
      const formData= {...this.state}
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData); 
      this.props.setUser(user);
      this.props.handleNavigate();
    }catch {
      this.setState({error:'Sign Up Failed- Try Again'});
    }
}  

  handleChange =(evt) => {
    this.setState({
      [evt.target.name]:evt.target.value,
      error:'' 
    })
  }  

 render() {
  const disable = this.state.password !== this.state.confirm;
  return (
    <div>
      <div className="SignUpForm">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label className="SignUpLabel">Name</label>
          <input className="SignUpInput" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
          <br />
          <label className="SignUpLabel">Email</label>
          <input className="SignUpInput" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          <br />
          <label className="SignUpLabel">Password</label>
          <input className="SignUpInput" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          <br />
          <label className="SignUpLabel">Confirm</label>
          <input className="SignUpInput" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
          <br/>
          <button className ="SignUpButton" type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{this.state.error}</p>
    </div>
  );
}
}