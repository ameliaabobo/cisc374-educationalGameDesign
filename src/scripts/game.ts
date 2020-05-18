import 'phaser';
import MainScene from './scenes/mainScene';
import PreloadScene from './scenes/preloadScene';
import GameConfig = Phaser.Types.Core.GameConfig;
import christianityScene from './scenes/christianityScene';
import islamScene from './scenes/islamScene';
import judaismScene from './scenes/judaismScene';

const DEFAULT_WIDTH = 1000;
const DEFAULT_HEIGHT = 1000;

const config: GameConfig = {
    backgroundColor: 'FFFFFF',
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
    },
    scene: [PreloadScene, MainScene, christianityScene, islamScene, judaismScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 400 }
        }
    }
};

window.addEventListener('load', () => {
    window['game'] = new Phaser.Game(config);
});

//
