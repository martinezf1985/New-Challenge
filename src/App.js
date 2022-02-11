
import { Switch, Route, NavLink } from "react-router-dom";
import { ArticlesPage } from "./pages/article/ArticlesPage";

import { NewArticle2 } from "./pages/new-article/NewArticle2";

import "./index.css";

function App() {
  return (
    <div className="app layout">
      <aside >
        <header></header>
        <nav className='nav'>
          <ul className='ul'>
            <li>
              <NavLink to="/" className="btn btn-dark" exact>
                ArticlesPage
              </NavLink>
            </li>
            <li>
              <NavLink to="/add" className="btn btn-dark">
                New Article
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <header className="page-title">
          <h1>Articles</h1>
        </header>
        <Switch>
          {/* <Route path="/ArticlesPage" element={<ArticlesPage />} /> */}
          <Route path="/" exact>
        <ArticlesPage />
      </Route>

          {/* <Route path="/NewArticle2" element={<NewArticle2 />} /> */}
          <Route path="/add" exact>
        <NewArticle2 />
      </Route>
          
        </Switch>
      </main>
    </div>
  );
}

export default App;

// {/* <header>

// </header>
// <section>
// <ArticlesPage/>
// <hr/>
// {/* <NewArticlePage/> */}
// {/* <NewArticle2/>

// </section> */}

{
  /* <div className="app layout">
<aside>
  <header></header>
  <nav>
    <ul>
      <li>
        <Link to="/" className="btn btn-dark">
          Articles
        </Link>
      </li>
      <li>
        <Link to="/add" className="btn btn-dark">
          New Article
        </Link>
      </li>
    </ul>
  </nav>
</aside>
<main>
  <header className="page-title">
    <h1>Articles</h1>
  </header>
  <Router>
    <Routes>
      <Route path="/" exact>
        <ArticlesPage />
      </Route>

      <Route path="/add" exact>
        <NewArticle2 />
      </Route>
    </Routes>
    
  </Router>  */
}

{
  /* <Routes>
<Route path="/ArticlesPage" element={<ArticlesPage />} />

<Route path="/NewArticle2" element={<NewArticle2 />} />
</Routes> */
}

{
  /* </main> */
}
