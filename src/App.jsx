import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ArticleList from './pages/ArticleList';
import ArticleDetail from './pages/ArticleDetail';
import './app.css';

const App = () => {
  return (
    <div className="app">
      <Router>
        <header className="app-header">
          <Link className="app-link" to="/">
            <h1>REACT HOC</h1>
          </Link>   
        </header>
        <main className="app-main">
          <Switch>
            <Route exact={true} path="/articles">
              <ArticleList />
            </Route>
            <Route path="/article/:id">
              <ArticleDetail />
            </Route>
            <Route>
              <h2>Hello world</h2>
              <div>¯\_(ツ)_/¯</div>
            </Route>
          </Switch>
        </main>
        <footer className="app-footer">
          <Link className="app-link" to="/articles">Article list with data</Link>
          <Link className="app-link" to="/article/99">Article detail with errors</Link>
        </footer>
      </Router>
    </div>
  );
}

export default App;
