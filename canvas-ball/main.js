import { Ball } from './ball.js';
import { Block } from './block.js';
class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    document.body.appendChild(this.canvas);

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();
    this.ball = new Ball(this.stageWidth, this.stateHeight, 60, 15);
    this.block = new Block(700, 30, 300, 450);

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stateHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stateHeight * 2;
    this.ctx.scale(2, 2);
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.stageWidth, this.stateHeight);
    this.ball.draw(this.ctx, this.stageWidth, this.stateHeight, this.block);
    this.block.draw(this.ctx);
  }
}

// window.addEventListener('DOMContentLoaded', () => {
//   new App();
// });

window.onload = () => {
  new App();
};
