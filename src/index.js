import './css/style.css';
import Liker from './js/Liker';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('liker-container');
  if (container) {
    new Liker(container);
  }
});
