import React, {Component} from 'react';



class Login extends Component {
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
												<form method="post" className="login">

													<p className="form-row form-row-wide">
														
															
															<input type="text" className="input-text" name="email" id="username" 
															onChange={(e) => this.setState({email: e.target.value})}

															/>
														
													</p>

													<p className="form-row form-row-wide">
														
															
															<input type="text" className="input-text" name="email" id="username" 
															onChange={(e) => this.setState({email: e.target.value})}

															/>
														
													</p>
													<div className="form-row">
														<input type="submit" className="button border margin-top-5" name="login" value="Login" />
														
													</div>
													
												</form>
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
}

export default Login;
