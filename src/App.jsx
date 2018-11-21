import React, { Component } from 'react';
import Main from './components/main/main.component';

class App extends Component {
  render() {
    return (
      <div id="main-wrapper" className="main-wrapper">
        <header className="blog-header sticky-top">
            <div className="row" style={{marginRight: '0', marginLeft: '0'}}>
              <div className="col-2 pt-1">
                
              </div>
              <div className="col-8 text-center m-0 p-0">
                <a className="blog-header-logo text-dark">Twitter<span>App</span></a>
              </div>
              <div className="col-2 justify-content-end">
                
              </div>
            </div>
          </header>

        <div className="container">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
