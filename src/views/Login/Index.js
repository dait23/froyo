import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import {Container, Row, Col, CardGroup, Card, CardBlock, Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'


class Login extends Component {

state = {
    email: '',
    password: '',
  }



  render() {
    return (
      <div>
   

		<div className="container">

		<div className="row" style={{padding:'100px'}}>
			<div className="col-md-12" >

				
					
								<div id="sign-in-dialog" className="mfp-bg  mfp-ready" style={{marginTop:'100px'}}>

									<div className="small-dialog-header" style={{background: '#1B9F6A'}}>
										<h3>Sign In</h3>
									</div>

								
									<div className="sign-in-form ">


										<div className="tabs-container alt">

										  <div className="tab-content" id="tab1" >
												

													<p className="form-row form-row-wide">
														
															
															<input type="text" className="input-text" name="email" 
															  value={this.state.email}
															  onChange={(e) => this.setState({email: e.target.value})}

															/>
														
													</p>

													<p className="form-row form-row-wide">
														
															
															<input type="password" className="input-text" name="password"
															 value={this.state.password} 
															onChange={(e) => this.setState({password: e.target.value})}

															/>
														
													</p>
													<div className="form-row">
														 <Button color="primary" className="button"  onClick={this.authenticateUser} style={{marginLeft:-15}}>Login</Button>
														
													</div>
													
												
											</div>

										</div>
 
										
									</div>
								</div>
								
		


				

			</div>
		</div>

	</div>


      </div>
    )
  }
  authenticateUser = async () => {
    const {email, password} = this.state

    const response = await this.props.authenticateUserMutation({variables: {email, password}})
    localStorage.setItem('space', response.data.authenticateUser.token)
    this.props.history.replace('/')
    window.location.reload();
    
  }
}

const AUTHENTICATE_USER_MUTATION = gql`
  mutation AuthenticateUserMutation ($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token
    }
  }
`

const LOGGED_IN_USER_QUERY = gql`
  query LoggedInUserQuery {
    loggedInUser {
      id
      name
      status
      jabatan
    }
  }
`

export default compose(
  graphql(AUTHENTICATE_USER_MUTATION, {name: 'authenticateUserMutation'}),
  graphql(LOGGED_IN_USER_QUERY, {
    name: 'loggedInUserQuery',
    options: { fetchPolicy: 'network-only' }
  })
)(withRouter(Login))
