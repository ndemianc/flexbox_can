import $ from 'jquery';
import stache from 'can/view/stache/stache';

const template = stache('Hello {{message}}!');

$(() => {
  $('body').append(template({ message: 'Sergii' }));
});
