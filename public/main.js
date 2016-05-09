import can from 'can';
import $ from 'jquery';
import stache from 'can/view/stache/stache';
import template from './main.stache!';

import 'components/slider/';

$('#content').html(template({name: 'Sergii'}));
