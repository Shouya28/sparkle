// components/AutoplayAudio.tsx
"use client"; // Menandai ini sebagai Client Component

import { useEffect, useRef, useState } from 'react';

const AutoplayAudio: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch((error) => {
                console.error('Error playing audio:', error);
            });
        }
    };

    return (
        <div>
            <audio ref={audioRef} src="/assets/music.mp3" loop style={{ display: 'none' }} />
            <button onClick={handlePlay} disabled={isPlaying}>
                {isPlaying ? "Playing..." : "Play Music"}
            </button>
        </div>
    );
};

export default AutoplayAudio;
