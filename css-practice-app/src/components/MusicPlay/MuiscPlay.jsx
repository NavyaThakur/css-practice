import React, { useState } from "react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null);
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
 
  const pauseButton = <img src="/icons8-play-30.png" alt="Play Button" onClick={toggleMusic} width={24} height={24}/>;
  const playButton = <img src="/icons8-pause-32.png" alt="Pause Button" onClick={toggleMusic}  width={30} height={30}/>;

  return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
        }}
        >
      {isPlaying ? playButton : pauseButton}
      <audio ref={audioRef} src="/makeyoumine.mp3" />
        <img
          src={isPlaying ? "/output-onlinegiftools.gif" : "icons8-audio-wave-50.png"}
          alt="Audio Wave"
        />
    </div>
  );
};

export default MusicPlayer;
