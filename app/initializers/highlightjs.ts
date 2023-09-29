import hljs from 'highlight.js';
import { setup } from 'highlightjs-glimmer';
import 'highlight.js/styles/github.css';

export function initialize() {
  window.onload = function() {
    setup(hljs);
    hljs.highlightAll();
  }
}

export default {
  initialize,
};
