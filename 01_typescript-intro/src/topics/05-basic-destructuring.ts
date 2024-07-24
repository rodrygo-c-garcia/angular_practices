interface AudioPlayer {
  audioVolumen: number;
  songDuration: number;
  song: string;
  detail: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolumen: 4,
  songDuration: 3.50,
  song: 'Real Mutthapuking Gs',
  detail: {
    author: 'Eazy-e',
    year: 1995,
  },
}

const { song } = audioPlayer;
console.log(song)