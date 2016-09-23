import React from 'react';
import {render} from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



import App from './App.js';
import Newapp from './newapp.js';
import Lunbo from './lunbo.js';
import MaterialDemo from './material-demo.js';


render(<MaterialDemo />,document.getElementById('root'));
