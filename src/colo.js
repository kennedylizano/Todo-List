import React from 'react';
import { Link } from '@reach/router';
const Color = (props) => {

  return (
      <div>
        <Link to = "color/hello/blue/red">to number</Link>
        <h1>The number is 4 </h1>

      </div>
  );
}
export default  Color;