import React,{Suspense,lazy} from 'react';
import Navbar from '../../components/UI/Navbar/Navbar'
import Footer from '../../components/UI/Footer/Footer'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from '../Index/Index'
const Reading = lazy(()=>{
  return import('../Reading/Reading')
})

const Posts = lazy(()=>{
  return import('../Posts/Posts')
})


function Main() {
    return (
        <BrowserRouter>
      <div className="App">
          <Navbar/>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/post" render={
                  ()=>{
                    return (
                      <Suspense fallback={<div>Loading</div>}>
                       <Reading/>
                      </Suspense>
                    )
                  }
                } />

                <Route exact path="/posts" render={
                  ()=>{
                    return (
                      <Suspense fallback={<div>Loading</div>}>
                        <Posts/>
                      </Suspense>
                    )
                  }
                } />
                
            </Switch>
          <Footer/>
      </div>
    </BrowserRouter>
    )
}


export default Main