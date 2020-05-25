import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { LoginRequestMethod } from '../Service/service'
import { TextField, Grid, Button, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      loginAuthentication: false,
      showError: false,
      error: false,
      errorText: '',
    }
  }

  emailHandler = (event) => {
    const email = event.target.value;
    console.log("Email", email);
    if (email)
      this.setState({
        email: email,
      })
  }
  passwordHandler = (event) => {
    const password = event.target.value;
    console.log('Password', password)
    this.setState({
      password: password
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    var data = {
      Email: this.state.email,
      Password: this.state.password
    }
    sessionStorage.setItem("Email", this.state.email);
    const response = LoginRequestMethod(data);
    response.then(res => {
      console.log(res.data);
      if (res.data === true) {
        this.setState({
          loginAuthentication: true
        })
        this.props.history.push('/Dashboard');
      }
      else {
        //alert("email or password is incorrect");
        //setOpen(true);

        this.setState({
          showError: true
        })
      }
    })
  }

  render() {
    return (
      <>
        {
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
          >
            <Typography variant='h5' id='welcome-text'>Welcome to Book Store</Typography>
            <form className=" container p-5 bg-light text-primary mx-auto" id='form' onSubmit={this.submitHandler} >
              <div className="form-group">
                <h2 className='heading'>User Login</h2>
              </div>
              <div className="form-group">
                <TextField
                  className="textfields"
                  id="outlined-basic"
                  label="email"
                  variant="standard"
                  type="email"
                  color="#000000"
                  onChange={this.emailHandler}
                >
                  {/* </TextField> <input type="text" id="email" className="form-control " onChange={this.emailHandler} /> */}
                </TextField>

              </div><div className="textfield">
                <TextField
                  label="Password"
                  variant="standard"
                  type="password"
                  onChange={this.passwordHandler}
                >
                </TextField>
              </div>

              {/* <div className="form-group">
            <label for="password">Password :</label>
            <input type="password" id="password" className="form-control " onChange={this.passwordHandler} />
          </div> */}
              {
                this.state.showError ? <div id="error">Email or Password is incorrect </div> : null
              }

              <div className="form-group text-secondary">
                Don't have an account ? register
          </div>
              <div><Button type="submit" id="loginButton" style={{ color: "white" }} >Login</Button></div>

            </form>
          </Grid>
        }
      </>
    )
  }
}
export default Login  