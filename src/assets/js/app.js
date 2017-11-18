import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import './lib/foundation-explicit-pieces';

$(document).foundation();

var parallaxModule = require('./lib/jquery.parallax');
var custom = require('./custom');