import React, {Component} from 'react';

var X = new Date();
const years = X.getFullYear();

class Footer extends Component {
  render() {
    return (
      <div id="footer" className="dark sticky-footer" style={{fontSize:'14px'}}>

        <div className="container">

          <div className="row">
			<div className="col-md-5 col-sm-6">
              <img className="footer-logo" src="https://res.cloudinary.com/spazeeid/image/upload/lhukm16yizg5dl58e2vi" alt="logo footer" />
              <br /><br />
				<p>Pusat Cari dan Sewa Lapak Jualan di Jakarta.</p>
			
			</div>
			<div className="col-md-4 col-sm-6 ">
               <h4>Helpful Links</h4>
				<ul className="footer-links">
					<li><a href="#">Login</a></li>
					<li><a href="#">Sign Up</a></li>
					<li><a href="#">My Account</a></li>
					<li><a href="#">Add Listing</a></li>
					<li><a href="#">Pricing</a></li>
					<li><a href="#">Privacy Policy</a></li>
				</ul>
				<ul className="footer-links">
					<li><a href="#">FAQ</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Our Partners</a></li>
					<li><a href="#">How It Works</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
				<div className="clearfix"></div>

			</div>
			<div className="col-md-3  col-sm-12">
				<h4>Contact Us</h4>
				<div className="text-widget">
					<span>Gedung PBM, Jl. Daan Mogot No. 180, Kedoya Utara, Jakarta Barat - 11520</span> <br />
					Phone: <span>(+62) 877 7377 8866 </span><br />
					E-Mail:<span> <a href="#"><span className="__cf_email__" data-cfemail="660900000f050326031e070b160a034805090b">info@spazee.id</span></a> </span><br />
				</div>

				<ul className="social-icons margin-top-20">
					<li><a className="facebook" href="#"><i className="icon-facebook"></i></a></li>
					<li><a className="twitter" href="#"><i className="icon-twitter"></i></a></li>
					<li><a className="gplus" href="#"><i className="icon-gplus"></i></a></li>
					<li><a className="vimeo" href="#"><i className="icon-vimeo"></i></a></li>
				</ul>

			</div>
	      </div>

		<div className="row">
			<div className="col-md-12">
				<div className="copyrights" style={{textAlign:'left'}}>© {years} - PT Spazee Teknologi Indonesia. All Rights Reserved.</div>
			</div>
		</div>


        </div>


      </div>
    )
  }
}

export default Footer;
