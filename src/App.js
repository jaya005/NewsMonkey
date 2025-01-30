import React, { Component } from 'react'
import News from './components/News'
import NavBar from './components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route,Routes, NavLink, Link } from 'react-router-dom'
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
    pageSize=15
    apiKey=process.env.REACT_APP_NEWS_API
    state={
        progress:0,
    }
    setProgress=(progress)=>{
        this.setState({progress:progress})
    }
  render() {
    
    return (
     <Router>
      <NavBar />
      <LoadingBar
        color="#f11946"
        progress={this.state.progress}
        height={3}
        // onLoaderFinished={() => setProgress(0)}
      />
      <div className='text-center'>
      <Routes>
      <Route exact path='/' element=
          {<News apiKey={this.apiKey}setProgress={this.setProgress}  key="general" countryName="us" pageSize={this.pageSize} category="general" />}>
      </Route>
      <Route path='/sports' element=
          {<News apiKey={this.apiKey}setProgress={this.setProgress} key="sports" countryName="us" pageSize={this.pageSize} category="sports" />}>
      </Route>
      <Route   path='/science' element=
          {<News apiKey={this.apiKey}setProgress={this.setProgress} key="science" countryName="us" pageSize={this.pageSize} category="science" />}>
      </Route>
      <Route path='/technology' element=
          {<News apiKey={this.apiKey}setProgress={this.setProgress} key="technology" countryName="us" pageSize={this.pageSize} category="technology" />}>
      </Route>
      <Route path='/entertainment' element=
          {<News apiKey={this.apiKey}setProgress={this.setProgress} key="entertainment" countryName="us" pageSize={this.pageSize} category="entertainment" />}>
      </Route>
      <Route path='/business' element=
          {<News apiKey={this.apiKey}setProgress={this.setProgress} key="business" countryName="us" pageSize={this.pageSize} category="business" />}>
      </Route>
      <Route path='/health' element=
          {<News apiKey={this.apiKey}setProgress={this.setProgress} key="health" countryName="us" pageSize={this.pageSize} category="health" />}>
      </Route>
      </Routes>
        
      </div>
      
     </Router>
    )
  }
}
