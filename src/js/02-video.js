import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURENTTIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem(CURENTTIME_KEY, data.seconds);
  console.log(data.seconds);
}

if (localStorage.getItem(CURENTTIME_KEY)) {
  player.setCurrentTime(localStorage.getItem(CURENTTIME_KEY));
}
