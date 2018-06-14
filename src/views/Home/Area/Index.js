import React, {Component} from 'react';

import Selatan from './Selatan';
import Utara from './Utara';
import Pusat from './Pusat';
import Barat from './Barat';

class Area extends Component {
  render() {
    return (
     <div className="container padding-bottom-70">
			<div className="row">

				<div className="col-md-12">
					<h3 className="headline centered margin-bottom-35 margin-top-70">Ekspansi Usaha Anda Sekarang Juga!<span>Sewa lapak sesuai BUDGET anda, bisa per hari, minggu atau bulanan.</span></h3>
				</div>
				
				<div className="col-md-5">
					<Selatan />

				</div>	
					
				<div className="col-md-7">

					<Utara />

				</div>	

				<div className="col-md-6">
					<Pusat />

				</div>	
					
				<div className="col-md-6">

					<Barat />
				</div>

			</div>
			<div className="center-block" style={{width:'100%', textAlign:'center', marginTop:'20px'}}><a href="/listing/area" className="button" style={{color:'#fff'}}>Find More Area</a></div>
		</div>

    )
  }
}

export default Area;
