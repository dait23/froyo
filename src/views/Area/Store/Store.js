import fetch from 'isomorphic-fetch';
import gql from 'graphql-tag';
import graphql from 'mobx-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import {MainApi} from '../../Api/';
import { extendObservable, toJS } from 'mobx';
//import { inject, observer, Provider } from 'mobx-react';
//import {toast } from 'react-toastify';

global.fetch = fetch;



// queries and mutations
const allQuery = gql`
  {
    allAreas{
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







const uri = MainApi;

const client = new ApolloClient({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache()
});

// building a mobx store
const areaStore = new class {
  constructor() {
    extendObservable(this, {
       get allAreas() {
        return graphql({ client, query: allQuery });
      },
    
      get error() {
        return (this.allAreas.error && this.allAreas.error.message) || null;
       },
      get loading() {
        return this.allAreas.loading;
      },
      get areas() {
         return (this.allAreas.data.allAreas && toJS(this.allAreas.data.allAreas)) || [];
       },
      get count() {
        return this.areas.length;
      },
     
    });

  }

   
}();


export default areaStore;