import heartImage from '../img/heart.png';

export default class Liker {
  constructor(container) {
    this.container = container;
    this.trajectories = [
      this.trajectory1.bind(this),
      this.trajectory2.bind(this),
      this.trajectory3.bind(this),
      this.trajectory4.bind(this),
    ];
    
    this.render();
    this.init();
  }

  render() {
    this.container.innerHTML = `
      <div class="liker">
        <button class="like-button">Like</button>
      </div>
    `;
  }

  init() {
    this.likeButton = this.container.querySelector('.like-button');
    this.liker = this.container.querySelector('.liker');
    
    this.likeButton.addEventListener('click', () => this.createHeart());
  }

  createHeart() {
    const heart = document.createElement('div');
    heart.className = 'flying-heart';
    
    // Выбираем случайную траекторию
    const randomTrajectory = Math.floor(Math.random() * 4) + 1;
    heart.classList.add(`trajectory-${randomTrajectory}`);
    
    // Создаем изображение сердечка
    const img = document.createElement('img');
    img.src = heartImage;
    img.alt = 'heart';
    
    heart.appendChild(img);
    this.liker.appendChild(heart);
    
    // Удаляем элемент после завершения анимации
    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  }

  // Траектории анимации (реализованы через CSS классы)
  trajectory1() { return 'trajectory-1'; }
  trajectory2() { return 'trajectory-2'; }
  trajectory3() { return 'trajectory-3'; }
  trajectory4() { return 'trajectory-4'; }
}
