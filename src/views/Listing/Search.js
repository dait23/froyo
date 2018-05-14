import React, {Component} from 'react';



class Search extends Component {
  render() {
    return (

    	<div className="row">
          <div className="col-md-12">

              <div className="row with-forms">

                 <div className="col-fs-6">
                  <div className="input-with-icon">
                    <i className="sl sl-icon-magnifier"></i>
                    <input type="text" placeholder="What are you looking for?" value=""/>
                  </div>
                </div>


                <div className="col-fs-6">
                  <div className="input-with-icon location">
              
                    <div id="autocomplete-container">
                      <input id="autocomplete-input" type="text" placeholder="Location" />
                    </div>
                    <a href="#"><i className="fa fa-map-marker"></i></a>
                  </div>
                </div>

                <div className="col-fs-12">

                  <div className="panel-dropdown">
                    <a href="#">Categories</a>
                    <div className="panel-dropdown-content checkboxes categories">
                     
                      <div className="row">
                           
                           <div className="col-md-6">
                            <input id="check-1" type="checkbox" name="check"  className="all" />
                            <label >All Categories</label>

                            <input id="check-2" type="checkbox" name="check" />
                            <label >Shops</label>

                            <input id="check-3" type="checkbox" name="check"/ >
                            <label >Hotels</label>
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

export default Search;
