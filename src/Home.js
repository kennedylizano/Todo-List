import React from 'react';
import { Link } from '@reach/router';
const Home = (props) => {
  return (
      <div>

        <Link to = "/number4">to go number 4</Link>
        <Link to = "/Hello">Hello</Link>

        <h1> Welcome  </h1>
        <h2>this is the home page fgfg</h2>
      </div>
  );
}
export default Home;