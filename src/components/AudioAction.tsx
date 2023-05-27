import React, { useRef } from 'react';

interface MusicPlayerProps {
  musicUrl: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ musicUrl }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={handlePlayMusic}>Play Music</button>
      <audio ref={audioRef} src={musicUrl} />
    </div>
  );
};

export default MusicPlayer;
