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
const allPopularQuery = gql`
  {
    allPartners(orderBy: read_DESC, first:6){
    id
    name
    slug
    imageId
    imageUrl
    category{
      id
      name
    }
    area{
      id
      name
    }
     _spacesMeta{
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
const partnerStore = new class {
  constructor() {
    extendObservable(this, {
       get allPartners() {
        return graphql({ client, query: allPopularQuery });
      },
     
      get error() {
        return (this.allPartners.error && this.allPartners.error.message) || null;
       },
      get loading() {
        return this.allPartners.loading;
      },
      get partners() {
         return (this.allPartners.data.allPartners && toJS(this.allPartners.data.allPartners)) || [];
       },
      get count() {
        return this.partners.length;
      },
     
    });

  }

   
}();


export default partnerStore;