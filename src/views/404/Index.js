import React, {Component} from 'react';



class NotFound extends Component {
  render() {
    return (
      <div>
   
          <div id="titlebar">
			<div className="container">
				<div className="row">
					<div className="col-md-12">

						<h2>404 Not Found</h2>

						
						<nav id="breadcrumbs">
							<ul>
								<li><a href="/">Home</a></li>
								<li>404 Not Found</li>
							</ul>
						</nav>

					</div>
				</div>
			</div>
		</div>

		<div className="container">

		<div className="row">
			<div className="col-md-12">

				<section id="not-found" className="center">
					<h2>404 <i className="fa fa-question-circle"></i></h2>
					<p>We're sorry, but the page you were looking for doesn't exist.</p>

					<div className="row">
						<div className="col-lg-8 col-lg-offset-2">
							<div className="main-search-input gray-style margin-top-50 margin-bottom-10">
								<div className="main-search-input-item">
									<input type="text" placeholder="What are you looking for?" value=""/>
								</div>

								<button className="button">Search</button>
							</div>
						</div>
					</div>
		


				</section>

			</div>
		</div>

	</div>


      </div>
    )
  }
}

export default NotFound;
