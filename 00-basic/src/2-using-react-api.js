import React, {createElement} from './lib/react.js'
import ReactDOM, {createRoot} from './lib/react-dom.js'

console.log(React.version);

console.log(ReactDOM);

const button = React.createElement('button',{type:'button'},'hello')
const div = React.createElement('div',{
    className:'tiger'
  },
  button)

const app = document.getElementById('app')

const root = ReactDOM.createRoot(app/* 랜더링위치 */);

root.render(div);
