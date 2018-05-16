import React from 'react'
import { render } from 'react-snapshot';


import { BrowserRouter, Switch, Route, browserHistory } from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink} from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Loadable from 'react-loadable'



///////////////// Api

import {MainApi} from './views/Api/'

/////////////////////// Header + Footer

import Header from './components/Header/'
import Footer from './components/Footer/'


/////////////////////// Code Splitting

import Loading from './components/Loading/'
import fakeDelay from './components/FakeDelay/'



////////////// View Component 

const Home = Loadable({
 loader: () => fakeDelay(500).then(() => import('./views/Home/')),
  loading: Loading,
  timeout: 10000, // 10 second
});

const Listing = Loadable({
 loader: () => fakeDelay(500).then(() => import('./views/Listing/')),
  loading: Loading,
  timeout: 10000, // 10 second
});

const ListingMap = Loadable({
 loader: () => fakeDelay(500).then(() => import('./views/Listing/ListingMap')),
  loading: Loading,
  timeout: 10000, // 10 second
});

const Single = Loadable({
 loader: () => fakeDelay(500).then(() => import('./views/Single/')),
  loading: Loading,
  timeout: 10000, // 10 second
});


const NotFound = Loadable({
 loader: () => fakeDelay(500).then(() => import('./views/404/')),
  loading: Loading,
  timeout: 10000, // 10 second
});

const Login = Loadable({
 loader: () => fakeDelay(500).then(() => import('./views/Login/')),
  loading: Loading,
  timeout: 10000, // 10 second
});

const Contact = Loadable({
 loader: () => fakeDelay(500).then(() => import('./views/Pages/Contact')),
  loading: Loading,
  timeout: 10000, // 10 second
});


const DashboardMember = Loadable({
 loader: () => fakeDelay(500).then(() => import('./views/Dashboard/Member/')),
  loading: Loading,
  timeout: 10000, // 10 second
});


const Messages = Loadable({
 loader: () => fakeDelay(500).then(() => import('./views/Dashboard/Messages/')),
  loading: Loading,
  timeout: 10000, // 10 second
});

const DetailMessages = Loadable({
 loader: () => fakeDelay(500).then(() => import('./views/Dashboard/Messages/Detail')),
  loading: Loading,
  timeout: 10000, // 10 second
});


const Inquiry = Loadable({
 loader: () => fakeDelay(500).then(() => import('./views/Dashboard/Inquiry/')),
  loading: Loading,
  timeout: 10000, // 10 second
});

const Brand = Loadable({
 loader: () => fakeDelay(500).then(() => import('./views/Dashboard/Brand/')),
  loading: Loading,
  timeout: 10000, // 10 second
});

const NewBrand = Loadable({
 loader: () => fakeDelay(500).then(() => import('./views/Dashboard/Brand/New/')),
  loading: Loading,
  timeout: 10000, // 10 second
});

const Profile = Loadable({
 loader: () => fakeDelay(500).then(() => import('./views/Dashboard/Profile/')),
  loading: Loading,
  timeout: 10000, // 10 second
});


// const NotFound = Loadable({
//  loader: () => fakeDelay(500).then(() => import('./views/404/')),
//   loading: Loading,
//   timeout: 10000, // 10 seconds

// });


const httpLink = createHttpLink({ uri: MainApi })

const middlewareLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('space')
  const authorizationHeader = token ? `Bearer ${token}` : null
  operation.setContext({
    headers: {
      authorization: authorizationHeader
    }
  })
  return forward(operation)
})

const httpLinkWithAuthToken = middlewareLink.concat(httpLink)

const client = new ApolloClient({
  link: httpLinkWithAuthToken,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
})

render(
  <ApolloProvider client={client}>
     <BrowserRouter>
       <div id="wrapper">
     
            <Header />
            <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path="/listing" component={Listing} />
             <Route exact path="/listing-map" component={ListingMap} />
             <Route exact path="/single" component={Single} />
             <Route exact path="/space/detail/:slug" component={Single} />
             <Route exact path="/contact" component={Contact} />
             <Route exact path="/login" component={Login} />
             <Route exact path="/me/dashboard" component={DashboardMember} />
             <Route exact path="/me/dashboard/messages" component={Messages} />
             <Route exact path="/me/dashboard/messages/detail" component={DetailMessages} />
             <Route exact path="/me/dashboard/inquiry" component={Inquiry} />
             <Route exact path="/me/dashboard/brand" component={Brand} />
              <Route exact path="/me/dashboard/brand/new" component={NewBrand} />
             <Route exact path="/me/Profile" component={Profile} />
             <Route exact path="/404" component={NotFound} />
             <Route path="*" component={NotFound} /> 
        
          </Switch>
          <Footer/>

      </div>
      </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
)
