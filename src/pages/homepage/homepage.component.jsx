import React from 'react';
import './homepage.style.scss';

import Directory from '../../components/directory/directory.component'

const HomePage = (props) => (
   <div className="homepage">
      {console.log(props.history)}
      {console.log(props)}
      <Directory />
   </div>
)

export default HomePage;