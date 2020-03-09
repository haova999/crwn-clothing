import React from "react";
import {connect} from 'react-redux';
import "./directory.styles.scss";

import {selectDirectorySections} from '../../redux/directory/directory.selectors'
import MenuItem from "../menu-item/menu-item.component";

const Directory = ({sections}) => (
  <div className="directory-menu">
    {sections.map(({ id, ...othersPropsSection }) => {
      return <MenuItem key={id} {...othersPropsSection} />;
    })}
  </div>
);

const mapStateToProps = state => ({
   sections : selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory);
