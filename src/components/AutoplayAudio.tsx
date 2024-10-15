// components/AutoplayAudio.tsx
"use client"; // Tambahkan ini untuk menandai sebagai Client Component

import { useEffect, useRef } from 'react';

const AutoplayAudio: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.error('Autoplay gagal:', error);
            });
        }
    }, []);

    return (
        <audio ref={audioRef} src="public/assets/music.mp3" autoPlay loop muted style={{ display: 'none' }} />
    );
};

export default AutoplayAudio;
