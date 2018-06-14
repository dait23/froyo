import fetch from 'isomorphic-fetch';
import gql from 'graphql-tag';
import graphql from 'mobx-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import {MainApi} from '../../../Api/';
import { extendObservable, toJS } from 'mobx';
//import { inject, observer, Provider } from 'mobx-react';
//import {toast } from 'react-toastify';

global.fetch = fetch;



// queries and mutations
const allLeftQuery = gql`
  {
    allAreas(filter:{
    slug:"jakarta-selatan"
  }){
    id
    name
    slug
     imageId
    imageUrl
    _partnersMeta(filter:{
      status: 1
    }){
      count
    }
  }
  }
`;


// queries and mutations
const allNorthQuery = gql`
  {
    allAreas(filter:{
    slug:"jakarta-utara"
  }){
    id
    name
     imageId
    imageUrl
    slug
    _partnersMeta(filter:{
      status: 1
    }){
      count
    }
  }
  }
`;


// queries and mutations
const allCentralQuery = gql`
  {
    allAreas(filter:{
    slug:"jakarta-pusat"
  }){
    id
    name
    slug
     imageId
    imageUrl
    _partnersMeta(filter:{
      status: 1
    }){
      count
    }
  }
  }
`;


// queries and mutations
const allWestQuery = gql`
  {
    allAreas(filter:{
    slug:"jakarta-barat"
  }){
    id
    name
     imageId
    imageUrl
    slug
    _partnersMeta(filter:{
      status: 1
    }){
      count
    }
  }
  }
`;






const uri = MainApi;

const client = new ApolloClient({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache()
});

// building a mobx store
const areaStore = new class {
  constructor() {
    extendObservable(this, {
       get allLeft() {
        return graphql({ client, query: allLeftQuery });
      },
      get allNorth() {
        return graphql({ client, query: allNorthQuery });
      },
      get allCentral() {
        return graphql({ client, query: allCentralQuery });
      },
      get allWest() {
        return graphql({ client, query: allWestQuery });
      },
      get error() {
        return (this.allLeft.error && this.allLeft.error.message) || null;
       },
      get loading() {
        return this.allLeft.loading;
      },
      get souths() {
         return (this.allLeft.data.allAreas && toJS(this.allLeft.data.allAreas)) || [];
       },

      get norths() {
         return (this.allNorth.data.allAreas && toJS(this.allNorth.data.allAreas)) || [];
       },
      get centrals() {
         return (this.allCentral.data.allAreas && toJS(this.allCentral.data.allAreas)) || [];
       },
        get wests() {
         return (this.allWest.data.allAreas && toJS(this.allWest.data.allAreas)) || [];
       },
      get count() {
        return this.souths.length;
      },
     
    });

  }

   
}();


export default areaStore;