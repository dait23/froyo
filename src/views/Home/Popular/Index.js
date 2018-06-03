import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { inject, observer, Provider } from 'mobx-react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import List from './List';
import partnerStore from './Store/Store';





// our main component
const Partner = inject('partnerStore')(
  observer(
    class extends Component {
      //sayHello = () => this.props.postsStore.createPost('Hello World Again Mobx!');

    

      render() {
        const { error, loading, count, partners } = this.props.partnerStore;

        if (error) console.error(error);
        else if (loading) return(
            

                     <section className="fullwidth margin-top-65 padding-top-75 padding-bottom-70"  style={{background: '#f8f8f8'}}>

				                       
				        <div className="container">
								<div className="row">
				                   <div className="col-md-12">
										<h3 className="headline centered margin-bottom-45">
											Most Visited Places
											<span>Discover top-rated local businesses</span>
										</h3>
									</div>



            
						<div className="col-md-4" >
	                     
	                       <div className="carousel-itemx">
	                       <a  className="listing-item-container">
								<ReactPlaceholder type='rect' showLoadingAnimation={true} delay={5000} ready={false} color='#E0E0E0' style={{  height: 265 }}>
								    <div></div>
								</ReactPlaceholder>
						  </a>
							</div>

						</div>

						<div className="col-md-4" >
	                     
	                       <div className="carousel-itemx">
	                       <a  className="listing-item-container">
								<ReactPlaceholder type='rect' showLoadingAnimation={true} delay={5000} ready={false} color='#E0E0E0' style={{  height: 265 }}>
								    <div></div>
								</ReactPlaceholder>
						  </a>
							</div>

						</div>


						<div className="col-md-4" >
	                     
	                       <div className="carousel-itemx">
	                       <a  className="listing-item-container">
								<ReactPlaceholder type='rect' showLoadingAnimation={true} delay={5000} ready={false} color='#E0E0E0' style={{  height: 265 }}>
								    <div></div>
								</ReactPlaceholder>
						  </a>
							</div>

						</div>


						<div className="col-md-4" >
	                     
	                       <div className="carousel-itemx">
	                       <a  className="listing-item-container">
								<ReactPlaceholder type='rect' showLoadingAnimation={true} delay={5000} ready={false} color='#E0E0E0' style={{  height: 265 }}>
								    <div></div>
								</ReactPlaceholder>
						  </a>
							</div>

						</div>


						<div className="col-md-4" >
	                     
	                       <div className="carousel-itemx">
	                       <a  className="listing-item-container">
								<ReactPlaceholder type='rect' showLoadingAnimation={true} delay={5000} ready={false} color='#E0E0E0' style={{  height: 265 }}>
								    <div></div>
								</ReactPlaceholder>
						  </a>
							</div>

						</div>


						<div className="col-md-4" >
	                     
	                       <div className="carousel-itemx">
	                       <a  className="listing-item-container">
								<ReactPlaceholder type='rect' showLoadingAnimation={true} delay={5000} ready={false} color='#E0E0E0' style={{  height: 265 }}>
								    <div></div>
								</ReactPlaceholder>
						  </a>
							</div>

						</div>

                       


					
						</div>

						</div>
      
						
					</section>	
              
                  
          );
        else

        return (

        <section className="fullwidth margin-top-65 padding-top-75 padding-bottom-70"  style={{background: '#f8f8f8'}}>

        <div className="container">
				<div className="row">
                   <div className="col-md-12">
						<h3 className="headline centered margin-bottom-45">
							Most Visited Places
							<span>Discover top-rated local businesses</span>
						</h3>
					</div>


				  {partners.map((partner) => (

            
						<List
	                      key={partner.id}
	                      partner={partner}
	                      refresh={() => this.props.data.refetch()}
	                    />
					
          ))}

				</div>
				<div className="center-block" style={{width:'100%', textAlign:'center'}}><a href="/listing" className="button" style={{color:'#fff'}}>Find More Listing</a></div>
				
		</div>



            

          </section>
          )
      }
    }
  )
);


const stores = { partnerStore };

const Popular = () => (
  <Provider {...stores}>
    <Partner />
  </Provider>
);

export default Popular;