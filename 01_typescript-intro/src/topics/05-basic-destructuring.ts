// Desestructuracion de Objetos
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

// const { author } = audioPlayer.detail;
// const { songDuration, song } = audioPlayer; // desestructuracion
// console.log(song, songDuration, author)


// Desestructuracion de Arreglos
const dbz: Array<string> = ['Goku', 'trunks', 'Bulma'];

const [goku, p2, p3] = dbz;
console.log(goku)