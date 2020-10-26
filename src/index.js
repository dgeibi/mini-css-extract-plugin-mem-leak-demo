import './a.css';

console.log('11');

setTimeout(() => {
  import('./b.css');
}, 10);
