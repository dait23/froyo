import React, {Component} from 'react';
import {
  InstantSearch,
  SearchBox,
  Pagination,
  RefinementList,
  Highlight,
  Stats,
  Configure,
  connectHits,
  MenuSelect,
  connectNumericMenu,
  connectRefinementList,
  connectRange,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';
import Rheostat from 'rheostat';

import { withUrlSync } from './urlSync';

import Search from './Search'
import List from './ListMap'



const ListingMap = props => (
  <InstantSearch
     apiKey="0822bfbefb32945d57e7f3bed5117088"
     appId="X0RKYDMJ0J"
     indexName="partners_space"
    searchState={props.searchState}
    createURL={props.createURL}
    onSearchStateChange={props.onSearchStateChange}
  >
    <Configure aroundLatLngViaIP={true} aroundRadius="all" />

    <div className="fs-container">
         <div style={{display:'none'}}>
          <RefinementList 
                            attribute="status"
                            defaultRefinement={[
                          '1'
                        ]}
                            translations={{ noResults: 'No matching Category' }}
                                           
                            />

          </div>
       
         <div className="fs-inner-container content">
          <div className="fs-content">
                  
                  <section className="search">
                      
                      <div className="row">
                          <div className="col-md-12">

                              <div className="row with-forms">

                                 <div className="col-fs-12">
                                  <div className="input-with-icon">
                                    <i className="sl sl-icon-magnifier"></i>
                                     <SearchBox />
                                  </div>
                                </div>


                              </div>

                               <div className="row with-forms">
                                
                                 <div className="col-fs-6">
                                  <a href="#" className="margin-bottom-10" style={{color:'#3a4570', fontWeight:'600'}}>Area / Wilayah</a>
                                  <div className="input-with-icon margin-top-10">
                                    
                                     <MenuSelect
                                        attribute="area.name"
                                        limit={10}
                                        showMore={false}
                                        showMoreLimit={20}

                                      />
                                  </div>
                                </div>


                                <div className="col-fs-6">
                                <a href="#" className="margin-bottom-10" style={{color:'#3a4570', fontWeight:'600'}}>Kategori</a>
                                  <div className="input-with-icon margin-top-10">
                                    
                                     <MenuSelect
                                        attribute="category.name"
                                        limit={10}
                                        showMore={false}
                                        showMoreLimit={20}

                                      />
                                  </div>
                                </div>


                              </div>


                              <div className="row with-forms">

                                 <div className="col-fs-12">
                                 <a href="#" className="margin-bottom-10" style={{color:'#3a4570', fontWeight:'600'}}>Fasilitas</a>
                                  <div className="input-with-icon">
                                   <RefinementList
                            attribute="facilities.name"
                            translations={{ noResults: 'No matching facility' }}
                            className="checkboxes one-in-row margin-bottom-5"
                          />

                                  </div>
                                </div>


                              </div>

                            
                              


                          </div>
                      </div>

                  </section>

                  <section className="listings-container margin-top-30">


                    <div className="row fs-switcher">

                        <div className="col-md-6">
       
                          <div className="showing-results margin-left-20"><Stats /> </div>
                        </div>

                    </div>
                
                    <Results />
                     <Configure hitsPerPage={12} />


                  <div className="row fs-listings">
                      <div className="col-md-12">

                        <div className="clearfix"></div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="pagination-container margin-top-15 margin-bottom-40">
                              <nav className="pagination">
                                  <Pagination />
                              </nav>
                            </div>
                          </div>
                        </div>
                        <div className="clearfix"></div>
            
                        
                        
                      </div>
                    </div>


                  </section>

          </div>
        </div>

        <div className="fs-inner-container map-fixed">


        <div id="map-container">
            <div id="map" >
               <ConnectedHitsMap />
            </div>
        </div>

      </div>


  
      </div>



   
  </InstantSearch>


);

function Price() {
  return (
    <div className="row aisdemo-filter rheostat-container">
    
      <div className="col-sm-12">
        <ConnectedRange attribute="price" />
      </div>
    </div>
  );
}


const CustomHits = connectHits(({ hits }) =>

<div className="row fs-listings">
  {hits.map(hit =>
  

         <List
                        key={hit.objectID}
                        hit={hit}
                        refresh={() => this.props.data.refetch()}
                      />

  )}
</div>
);


function Results() {
  return (
 
  
        <CustomHits />
 

       

 
  );
}





function CustomMarker() {
  /*  eslint-disable max-len */
  return (
      <img src="https://res.cloudinary.com/spazeeid/image/upload/c_thumb,h_50,w_50/v1526402055/marker_bummlp.png" alt="" />
  );
  /*  eslint-enable max-len */
}

function HitsMap({ hits }) {
  const availableSpace = {
    width: (document.body.getBoundingClientRect().width * 4) / 12,
    height: 400,
  };
  const boundingPoints = hits.reduce(
    (bounds, hit) => {
      const pos = hit;
      if (pos.lat > bounds.nw.lat) bounds.nw.lat = pos.lat;
      if (pos.lat < bounds.se.lat) bounds.se.lat = pos.lat;

      if (pos.lng < bounds.nw.lng) bounds.nw.lng = pos.lng;
      if (pos.lng > bounds.se.lng) bounds.se.lng = pos.lng;
      return bounds;
    },
    {
      nw: { lat: -50, lng: 180 },
      se: { lat: 50, lng: -180 },
    }
  );
  const boundsConfig =
    hits.length > 0 ? fitBounds(boundingPoints, availableSpace) : {};
  const markers = hits.map(hit => (
    <CustomMarker lat={hit.lat} lng={hit.lng} key={hit.objectID} />
  ));
  const options = {
    minZoomOverride: true,
    minZoom: 2,
  };
  return (
    <GoogleMap
      options={() => options}
      bootstrapURLKeys={{
        key: 'AIzaSyBawL8VbstJDdU5397SUX7pEt9DslAwWgQ',
      }}
      center={boundsConfig.center}
      zoom={boundsConfig.zoom}
    >
      {markers}
    </GoogleMap>
  );
}

HitsMap.propTypes = {
  hits: PropTypes.array,
};

const ConnectedHitsMap = connectHits(HitsMap);



class Range extends Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    currentRefinement: PropTypes.object,
    refine: PropTypes.func.isRequired,
    canRefine: PropTypes.bool.isRequired,
  };

  state = { currentValues: { min: this.props.min, max: this.props.max } };

  componentWillReceiveProps(sliderState) {
    if (sliderState.canRefine) {
      this.setState({
        currentValues: {
          min: sliderState.currentRefinement.min,
          max: sliderState.currentRefinement.max,
        },
      });
    }
  }

  onValuesUpdated = sliderState => {
    this.setState({
      currentValues: { min: sliderState.values[0], max: sliderState.values[1] },
    });
  };

  onChange = sliderState => {
    if (
      this.props.currentRefinement.min !== sliderState.values[0] ||
      this.props.currentRefinement.max !== sliderState.values[1]
    ) {
      this.props.refine({
        min: sliderState.values[0],
        max: sliderState.values[1],
      });
    }
  };

  render() {
    const { min, max, currentRefinement } = this.props;
    const { currentValues } = this.state;
    return min !== max ? (
      <div>
        <Rheostat
          min={min}
          max={max}
          values={[currentRefinement.min, currentRefinement.max]}
          onChange={this.onChange}
          onValuesUpdated={this.onValuesUpdated}
        />
        <div className="rheostat-values">
          <div>{currentValues.min}</div>
          <div>{currentValues.max}</div>
        </div>
      </div>
    ) : null;
  }
}

const ConnectedRange = connectRange(Range);


export default withUrlSync(ListingMap);
