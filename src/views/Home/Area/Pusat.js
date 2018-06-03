import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { inject, observer, Provider } from 'mobx-react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
//import List from './ListMidle';
import areaStore from './Store/Store';





// our main component
const Area = inject('areaStore')(
  observer(
    class extends Component {
      //sayHello = () => this.props.postsStore.createPost('Hello World Again Mobx!');

      render() {
        const {  error, loading, centrals } = this.props.areaStore;

        if (error) console.error(error);
        else if (loading) return(
            

                     <div>
						
					</div>	
              
                  
          );
        else

        return (

        <div>

             {centrals.map((area) => (

            
						<a href={`/listing/area/${area.slug}`} key={area.id}>
						  <img className="img-box" src={area.imageUrl} alt={area.name}/>
							<div className="img-box-content visible">
								<h4>{area.name}</h4>
								<span>{area._partnersMeta.count} Spaces</span>
							</div>
						</a>

					
          ))}

          </div>
          )
      }
    }
  )
);


const stores = { areaStore };

const Pusat = () => (
  <Provider {...stores}>
    <Area />
  </Provider>
);

export default Pusat;