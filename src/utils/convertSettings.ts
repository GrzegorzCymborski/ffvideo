const mp4Container = [
  "-i", //! input file
  "test.mp4", //! input file
  // "-t",  //! time / duration
  // "2.5", //! time / duration
  // "-ss", //! start point
  // "2.0", //! start point
  "-c:v", //! codec video
  "libx264", //! codec video
  //"libvpx", //! codec video webm
  // "-vf",
  // "hue=s=0",
  // "-vn", //! extract audio and encode 2 orbis
  // "audio_only.ogg" //! extract audio and encode 2 orbis
  // "-f", //! Force input or output file format.
  // "mp4",
  // "-pix_fmt", //! QuickTime compatibility
  // "yuv420p",
  "out.mp4", //! output file GIF => (output.gif)
];

export default mp4Container;
