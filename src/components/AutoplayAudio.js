import { useEffect, useRef } from 'react';

const AutoplayAudio = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current.play().catch((error) => {
            console.log('Autoplay gagal:', error);
        });
    }, []);

    return (
        <audio ref={audioRef} src="/assets/music.mp3" autoPlay loop style={{ display: 'none' }} />
    );
};

export default AutoplayAudio;
