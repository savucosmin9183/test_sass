import React, { Component, Fragment } from 'react';
import './App.css';
import Layout from './Components/Layout';
import Header from './Components/Header';
import Counter from './Components/Counter'
import Footer from './Components/Footer';
import Nav from './Components/Nav';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <Header/>
          <Nav/>
          <Counter/>
          <Footer/>
        </Layout>
      </Fragment>
    );
  }
}

export default App;
