// 1. Get all assets in the folder
const rawAssets = import.meta.glob('$lib/assets/portfolio/*.{flac,png}', { 
  eager: true, 
  import: 'default' 
}) as Record<string, string>;

// 2. Map them by filename for easy access
const portfolio = Object.entries(rawAssets).reduce((acc, [path, url]) => {
  const filename = path.split('/').pop()!; // Extracts 'chill-beat.png'
  acc[filename] = url;
  return acc;
}, {} as Record<string, string>);

const mp = "Music Producer";
const c = "Composer";
const m = "Mixer";
const cm = c + ' & ' + m;

export const projects = [
  {
      title: "Start",
      genre: "Synth",
      year: "2026",
      role: mp,
      description: "",
      audioSrc: portfolio['start.flac'],
      thumbnail: portfolio['start.png']
  },
  {
      title: "Reject",
      genre: "Orchestral",
      year: "2026",
      role: mp,
      description: "",
      audioSrc: portfolio['reject.flac'],
      thumbnail: portfolio['reject.png']
  },
  {
      title: "Childhood",
      genre: "Cinematic",
      year: "2026",
      role: mp,
      description: "",
      audioSrc: portfolio['childhood.flac'],
      thumbnail: portfolio['childhood.png']
  },
  {
      title: "Dark Mystery Intro",
      genre: "Cinematic",
      year: "2026",
      role: mp,
      description: "",
      audioSrc: portfolio['cinematic.flac'],
      thumbnail: portfolio['cinematic.png']
  },
  {
      title: "Lofi - Chill",
      genre: "Lo-Fi",
      year: "2026",
      role: mp,
      description: "",
      audioSrc: portfolio['chill-beat.flac'],
      thumbnail: portfolio['chill-beat.png']
  },
]
