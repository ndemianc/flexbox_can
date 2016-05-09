import _ from 'lodash';
import Component from 'can/component/';
import viewModel from './slider.model';
import template from './slider.stache!';
import './slider.less!';

export default Component.extend({
  tag: 'fc-slider',
  viewModel: viewModel,
  template: template
});
