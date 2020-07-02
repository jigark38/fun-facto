import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar/index';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const Facts = lazy(() => import('./routes/FunFacts'));

function App() {
  return (
    <Router>
      <NavBar/>
      
        <Suspense fallback={<div style={{margin:"10px auto", }}> Loading.... </div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/facts" component={Facts} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
