import React from 'react';
import { Link } from '@reach/router';
const Hello = (props) => {

  return (
      <div>
        <Link to = "/Home">to go home</Link>
        <h1>Hello </h1>
      </div>
  );
}
export default  Hello;