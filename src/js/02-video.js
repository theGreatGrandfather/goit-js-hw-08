import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const CURRENT_TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe,
    {
        loop:true,
        fullscreen:true,
        quality:'1080p'
    }
);

const getCurrentTime = function (currentTime) {
    const seconds = currentTime.seconds;
    console.log('first', currentTime)
    localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0);
