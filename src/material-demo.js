import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';

import Text from './text.js';

class MaterialDemo extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }
  render () {
    return(
      <div>
        <RaisedButton label="Default" />
        <CircularProgress />
        <Text />
      </div>
    )
  }
}
MaterialDemo.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};


export default MaterialDemo;
