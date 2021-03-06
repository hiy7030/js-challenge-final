const playlist = [
  {
    title: "4 Walls",
    artist: "f(x)",
    link: "https://youtu.be/4j7Umwfx60Q",
  },
  {
    title: "WARRIOR",
    artist: "RAVI",
    link: "https://youtu.be/PWVyXoqz-NI",
  },
  {
    title: "꽃밭(Flower Garden)",
    artist: "RAVI",
    link: "https://youtu.be/8Q58Cu1iFgw",
  },
  {
    title: "TE AMO",
    artist: "미연((여자)아이들)",
    link: "https://youtu.be/h0E1lHn8Bw0",
  },
  {
    title: "Drive",
    artist: "미연((여자)아이들)",
    link: "https://youtu.be/35lirBqwgTs",
  },
  {
    title: "Higher",
    artist: "에일리",
    link: "https://youtu.be/dI4RRxH9m4kbi",
  },
  {
    title: "Bop Bop!",
    artist: "VIVIZ",
    link: "https://youtu.be/cM963tI7Q_k",
  },
  {
    title: "LOVEADE",
    artist: "VIVIZ",
    link: "https://youtu.be/7oGRnWulYCI",
  },
  {
    title: "TOMBOY",
    artist: "(여자)아이들",
    link: "https://youtu.be/Jh4QFaPmdss",
  },
  {
    title: "SMILEY(feat. BIBI)",
    artist: "YENA",
    link: "https://youtu.be/y9kkXTucnLU",
  },
  {
    title: "살별",
    artist: "윤하",
    link: "https://youtu.be/43oVeAjyds4",
  },
  {
    title: "사건의 지평선",
    artist: "윤하",
    link: "https://youtu.be/BBdC1rl5sKY",
  },
];

const title = document.querySelector("#playlist h5");
const artist = document.querySelector("#playlist h6");
const playlistLink = document.querySelector("#playlist a");
const chosenPlaylist = playlist[Math.floor(Math.random() * playlist.length)];

title.innerText = chosenPlaylist.title;
artist.innerText = chosenPlaylist.artist;
playlistLink.href = chosenPlaylist.link;
