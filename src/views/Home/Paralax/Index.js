import React, {Component} from 'react';


import Background from './popup.jpg';

class Paralax extends Component {
  render() {
    return (
       
      <div className="parallax"
		 style={{backgroundImage: `url(${Background})`}}>


		<div className="text-content white-font">
			<div className="container">

				<div className="row">
					<div className="col-lg-6 col-sm-8">
						<h2>Streamline Your Business</h2>
						<p>We’re full-service, local agents who know how to find people and home each together. We use online tools with an unmatched search capability to make you smarter and faster.</p>
						<a href="listings-list-with-sidebar.html" className="button margin-top-25">Get Started</a>
					</div>
				</div>

			</div>
		</div>



	</div>

    )
  }
}

export default Paralax;
