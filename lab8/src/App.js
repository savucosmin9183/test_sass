import React, { Fragment, useState } from 'react';
import Layout from './Components/Layout';
import Header from './Components/Header';
import Counter from './Components/Counter'
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import './style.scss'

function App(){
    const [count, setCount] = useState(0);


    const incrementHandler = () => {
      setCount(count+1)
  }

  const decrementHandler = () => {
      setCount(count-1)
  }

  const resetHandler = () => {
      setCount(0)
  }

  
    return (
      <Fragment>
        <Layout>
          <Header/>
          <Nav/>
          <Counter count={count}
                   increment={incrementHandler}
                   decrement={decrementHandler}
                   reset={resetHandler}/>
          <Footer/>
        </Layout>
      </Fragment>
    );
}


export default App;
