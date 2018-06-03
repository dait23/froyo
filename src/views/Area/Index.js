import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { inject, observer, Provider } from 'mobx-react';
import ReactPlaceholder from 'react-placeholder';
import {Image} from 'cloudinary-react';
import "react-placeholder/lib/reactPlaceholder.css";
//import List from './ListMidle';
import areaStore from './Store/Store';


import {Cloudinary_Name} from '../Api/';





// our main component
const All = inject('areaStore')(
  observer(
    class extends Component {
      //sayHello = () => this.props.postsStore.createPost('Hello World Again Mobx!');

      render() {
        const {  error, loading, areas } = this.props.areaStore;

        if (error) console.error(error);
        else if (loading) return(
            

                     <div>
						
					</div>	
              
                  
          );
        else

        return (

         <div className="padding-bottom-50">
          
            <div id="titlebar" className="gradient">
			<div className="container">
				<div className="row">
					<div className="col-md-12">

						<h2>Listings Area</h2><span>Find Your Favorit Space</span>

						<nav id="breadcrumbs">
							<ul>
								<li><a href="/">Home</a></li>
								<li><a href="/listing">Listing</a></li>
								<li>Area</li>
							</ul>
						</nav>

					</div>
				</div>
			</div>
		</div>

		<div className="container">

          <div className="row">
 
              

               {areas.map((area) => (

               <div className="col-lg-4 col-md-6"  key={area.id}>
					<a href={`/listing/area/${area.slug}`} className="listing-item-container compact">
						<div className="listing-item">
						
							 <Image cloudName={Cloudinary_Name} publicId={area.imageId}  crop="thumb" alt={area.name} />


							<div className="listing-item-content">
				
								<h3>{area.name} <i className="verified-icon"></i></h3>
								<span>{area._partnersMeta.count} Spaces</span>
							</div>
							
						</div>
					</a>
				</div>
              

					
          ))}


          </div>



        </div>
           

          </div>
          )
      }
    }
  )
);


const stores = { areaStore };

const Area = () => (
  <Provider {...stores}>
    <All />
  </Provider>
);

export default Area;