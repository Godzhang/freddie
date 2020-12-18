const audio = new Audio();
let isPlaying = false;

const cache = {};

const play = name => {
  if (!name) return;
  let url = "";
  if (!cache[name]) {
    cache[name] = url = require(`../../assets/mp3/${name}.mp3`);
  } else {
    url = cache[name];
  }
  if (isPlaying) {
    audio.pause();
  }
  audio.src = url;
  audio.play();

  isPlaying = true;
};

const pause = () => {
  if (isPlaying) {
    audio.pause();
  }
  isPlaying = false;
};

audio.addEventListener("ended", () => {
  isPlaying = false;
});

export default {
  install(Vue) {
    Vue.prototype.$audio = { play, pause };
    document.body.appendChild(audio);

    const addAudioEvent = () => {
      audio.play();
      audio.pause();
    };
    const removeAudioEvent = () => {
      document.body.removeEventListener("touchstart", addAudioEvent);
      document.body.removeEventListener("touchend", removeAudioEvent);
    };
    document.addEventListener("load", () => {
      document.body.addEventListener("touchstart", addAudioEvent);
      document.body.addEventListener("touchend", removeAudioEvent);
    });
  }
};
