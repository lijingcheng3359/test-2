
document.addEventListener('DOMContentLoaded', () => {
    const playlistElement = document.getElementById('playlist');
    const clearCacheButton = document.getElementById('clear-cache-button');

    clearCacheButton.addEventListener('click', () => {
        if (confirm('您确定要清除所有播放记录吗？此操作不可恢复。')) {
            localStorage.removeItem('mp3PlaybackData');
            localStorage.removeItem('lastPlayedAudioIndex');
            location.reload();
        }
    });

    const mp3Files = [
        "datas/P11 - 一上Unit 2 Listen and chant 伴奏.mp3",
        "datas/P11 - 一上Unit 2 Listen and chant.mp3",
        "datas/P11 - 一上Unit 2 Listen and sing 伴奏.mp3",
        "datas/P11 - 一上Unit 2 Listen and sing 歌词.mp3",
        "datas/P11 - 一上Unit 2 Listen and sing.mp3",
        "datas/P12 - 一上Unit 2 Listen and do 伴奏.mp3",
        "datas/P12 - 一上Unit 2 Listen and do.mp3",
        "datas/P12 - 一上Unit 2 Listen, point and repeat.mp3",
        "datas/P13 - 一上Unit 2 Listen and say.mp3",
        "datas/P13 - 一上Unit 2 Role-play.mp3",
        "datas/P14 - 一上Unit 2 Look and act.mp3",
        "datas/P15 - 一上Unit 2 Make action cards.mp3",
        "datas/P16 - 一上Unit 2 Fun time.mp3",
        "datas/P19 - 一上Unit 3 Listen and chant 伴奏.mp3",
        "datas/P19 - 一上Unit 3 Listen and chant.mp3",
        "datas/P19 - 一上Unit 3 Listen and sing 伴奏.mp3",
        "datas/P19 - 一上Unit 3 Listen and sing 歌词.mp3",
        "datas/P19 - 一上Unit 3 Listen and sing.mp3",
        "datas/P20 - 一上Unit 3 Listen and do 伴奏.mp3",
        "datas/P20 - 一上Unit 3 Listen and do.mp3",
        "datas/P20 - 一上Unit 3 Listen, point and repeat.mp3",
        "datas/P21 - 一上Unit 3 Give a high five.mp3",
        "datas/P21 - 一上Unit 3 Listen and say.mp3",
        "datas/P22 - 一上Unit 3 Play a wheel game.mp3",
        "datas/P23 - 一上Unit 3 Make a focus wall.mp3",
        "datas/P24 - 一上Unit 3 Fun time.mp3",
        "datas/P27 - 一上Unit 4 Listen and chant 伴奏.mp3",
        "datas/P27 - 一上Unit 4 Listen and chant.mp3",
        "datas/P27 - 一上Unit 4 Listen and sing 伴奏.mp3",
        "datas/P27 - 一上Unit 4 Listen and sing 歌词.mp3",
        "datas/P27 - 一上Unit 4 Listen and sing.mp3",
        "datas/P28 - 一上Unit 4 Listen and do 伴奏.mp3",
        "datas/P28 - 一上Unit 4 Listen and do.mp3",
        "datas/P28 - 一上Unit 4 Listen, point and repeat.mp3",
        "datas/P29 - 一上Unit 4 Listen and say.mp3",
        "datas/P29 - 一上Unit 4 Role-paly.mp3",
        "datas/P3 - 一上Unit 1 Listen and chant 伴奏.mp3",
        "datas/P3 - 一上Unit 1 Listen and chant.mp3",
        "datas/P3 - 一上Unit 1 Listen and sing 伴奏.mp3",
        "datas/P3 - 一上Unit 1 Listen and sing 歌词.mp3",
        "datas/P3 - 一上Unit 1 Listen and sing.mp3",
        "datas/P30 - 一上Unit 4 Show and say.mp3",
        "datas/P31 - 一上Unit 4 Make a tag for school things.mp3",
        "datas/P32 - 一上Unit 4 Fun time.mp3",
        "datas/P35 - 一上Unit 5 Listen and chant 伴奏.mp3",
        "datas/P35 - 一上Unit 5 Listen and chant.mp3",
        "datas/P35 - 一上Unit 5 Listen and sing 伴奏.mp3",
        "datas/P35 - 一上Unit 5 Listen and sing 歌词.mp3",
        "datas/P35 - 一上Unit 5 Listen and sing.mp3",
        "datas/P36 - 一上 Unit 5 Listen and sing 伴奏.mp3",
        "datas/P36 - 一上 Unit 5 Listen and sing 歌词.mp3",
        "datas/P36 - 一上 Unit 5 Listen and sing.mp3",
        "datas/P36 - 一上Unit 5 Listen, point and repeat.mp3",
        "datas/P37 - 一上Unit 5 Have a photo show.mp3",
        "datas/P37 - 一上Unit 5 Listen and say.mp3",
        "datas/P38 - 一上Unit 5 Play a wheel game.mp3",
        "datas/P39 - 一上Unit 5 Make a social map.mp3",
        "datas/P4 - 一上Unit 1 Listen, point and repeat.mp3",
        "datas/P4 - 一上Unit 1 Listen, sing and act 伴奏.mp3",
        "datas/P4 - 一上Unit 1 Listen, sing and act 歌词.mp3",
        "datas/P4 - 一上Unit 1 Role-play.mp3",
        "datas/P40 - 一上Unit 5 Fun time.mp3",
        "datas/P42 - 一上Revision Listen and read aloud.mp3",
        "datas/P44 - 一上Revision Listen and do 伴奏.mp3",
        "datas/P44 - 一上Revision Listen and do.mp3",
        "datas/P44 - 一上Revision Listen and tick.mp3",
        "datas/P45 - 一上Revision Point and say.mp3",
        "datas/P45 - 一上Revision Role-play.mp3",
        "datas/P46 - 一上Revision Listen and chant 伴奏.mp3",
        "datas/P46 - 一上Revision Listen and chant.mp3",
        "datas/P46 - 一上Revision Look and say.mp3",
        "datas/P47 - 一上Revision I spy.mp3",
        "datas/P5 - 一上Unit 1 Listen and say.mp3",
        "datas/P5 - 一上Unit 1 Listen, sing and act.mp3",
        "datas/P5 - 一上Unit 1 Show and say..mp3",
        "datas/P51 - 一上Appendix3 Words in each unit-Unit 1.mp3",
        "datas/P51 - Words in each unit-Unit 2.mp3",
        "datas/P51 - Words in each unit-Unit 3.mp3",
        "datas/P51 - Words in each unit-Unit 4.mp3",
        "datas/P51 - Words in each unit-Unit 5.mp3",
        "datas/P52 - 一上 Useful expressions-Unit 1.mp3",
        "datas/P52 - 一上 Useful expressions-Unit 2.mp3",
        "datas/P52 - 一上 Useful expressions-Unit 3.mp3",
        "datas/P52 - 一上 Useful expressions-Unit 4.mp3",
        "datas/P52 - 一上 Useful expressions-Unit 5.mp3",
        "datas/P7 - 一上Unit 1 Make a name tree..mp3",
        "datas/P8 - 一上Unit 1 Fun time.mp3"
    ];

    let currentlyPlayingAudio = null;

    function getPlaybackData() {
        return JSON.parse(localStorage.getItem('mp3PlaybackData') || '{}');
    }

    function setPlaybackData(data) {
        localStorage.setItem('mp3PlaybackData', JSON.stringify(data));
    }

    function getSrcFromAudioElement(audioElement) {
        const fullSrc = audioElement.currentSrc;
        if (!fullSrc) return null;
        const decodedSrc = decodeURIComponent(fullSrc);
        return decodedSrc.substring(decodedSrc.lastIndexOf('datas/'));
    }

    function formatTime(seconds) {
        if (isNaN(seconds) || seconds < 1) return '0s';
        const s = Math.floor(seconds);
        const hours = Math.floor(s / 3600);
        const minutes = Math.floor((s % 3600) / 60);
        const remainingSeconds = s % 60;
        
        let timeString = '';
        if (hours > 0) timeString += `${hours}h `;
        if (minutes > 0) timeString += `${minutes}m `;
        if (remainingSeconds > 0 || timeString === '') timeString += `${remainingSeconds}s`;
        
        return timeString.trim();
    }

    function formatDate(dateString) {
        if (!dateString) return '从未';
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function extractNumber(filename) {
        const match = filename.match(/P(\d+)/);
        return match ? parseInt(match[1], 10) : -1;
    }

    mp3Files.sort((a, b) => {
        const numA = extractNumber(a);
        const numB = extractNumber(b);
        if (numA !== numB) {
            return numA - numB;
        }
        return a.localeCompare(b);
    });

    function renderPlaylist() {
        playlistElement.innerHTML = '';
        const playbackData = getPlaybackData();

        mp3Files.forEach(file => {
            const data = playbackData[file] || {};
            const li = document.createElement('li');

            const fileName = file.split('/').pop();

            li.innerHTML = `
                <div class="file-info">
                    <div class="file-name">${fileName}</div>
                    <div class="playback-info">
                        <span class="duration">累计时长: ${formatTime(data.accumulatedTime)}</span>
                        <span class="last-played">最后一次: ${formatDate(data.lastPlayed)}</span>
                    </div>
                </div>
                <audio class="audio-player-row" src="${file}" controls></audio>
            `;

            const audio = li.querySelector('audio');
            audio.playSegmentStartTime = 0;

            if (data.currentTime) {
                audio.currentTime = data.currentTime;
            }

            audio.addEventListener('play', (e) => {
                const currentAudio = e.target;
                if (currentlyPlayingAudio && currentlyPlayingAudio !== currentAudio) {
                    currentlyPlayingAudio.pause();
                }
                currentlyPlayingAudio = currentAudio;
                currentAudio.closest('li').classList.add('playing');
                currentAudio.playSegmentStartTime = currentAudio.currentTime;
                
                // Save the index of the last played audio
                const index = Array.from(playlistElement.children).indexOf(currentAudio.closest('li'));
                localStorage.setItem('lastPlayedAudioIndex', index);
            });

            audio.addEventListener('pause', (e) => {
                const currentAudio = e.target;
                saveAccumulatedTime(currentAudio);
                currentAudio.playSegmentStartTime = currentAudio.currentTime;
                currentAudio.closest('li').classList.remove('playing');
            });

            audio.addEventListener('ended', (e) => {
                const currentAudio = e.target;
                saveAccumulatedTime(currentAudio);
                currentAudio.playSegmentStartTime = 0;
                
                const src = getSrcFromAudioElement(currentAudio);
                if (src) {
                    const playbackData = getPlaybackData();
                    if (playbackData[src]) {
                        playbackData[src].currentTime = 0;
                        setPlaybackData(playbackData);
                    }
                }
                currentAudio.closest('li').classList.remove('playing');
                currentlyPlayingAudio = null;
            });

            audio.addEventListener('seeking', (e) => saveAccumulatedTime(e.target));
            audio.addEventListener('seeked', (e) => {
                const currentAudio = e.target;
                currentAudio.playSegmentStartTime = currentAudio.currentTime;
            });

            audio.addEventListener('loadedmetadata', (e) => {
                const currentAudio = e.target;
                const src = getSrcFromAudioElement(currentAudio);
                if (!src) return;

                const playbackData = getPlaybackData();
                if (!playbackData[src]) playbackData[src] = {};
                playbackData[src].totalDuration = currentAudio.duration;
                setPlaybackData(playbackData);
            });

            audio.addEventListener('timeupdate', (e) => {
                const currentAudio = e.target;
                if (currentAudio.paused) return;

                const src = getSrcFromAudioElement(currentAudio);
                if (!src) return;

                const playbackData = getPlaybackData();
                if (!playbackData[src]) playbackData[src] = {};

                playbackData[src].currentTime = currentAudio.currentTime;
                const now = new Date().toISOString();
                playbackData[src].lastPlayed = now;
                setPlaybackData(playbackData);

                const savedAccumulatedTime = playbackData[src].accumulatedTime || 0;
                const currentSegmentDuration = currentAudio.currentTime - currentAudio.playSegmentStartTime;
                const liveAccumulatedTime = savedAccumulatedTime + (currentSegmentDuration > 0 ? currentSegmentDuration : 0);

                const li = currentAudio.closest('li');
                li.querySelector('.duration').textContent = `累计时长: ${formatTime(liveAccumulatedTime)}`;
                li.querySelector('.last-played').textContent = `最后一次: ${formatDate(now)}`;
            });

            playlistElement.appendChild(li);
        });
        
        // Scroll to the last played audio
        const lastPlayedIndex = localStorage.getItem('lastPlayedAudioIndex');
        if (lastPlayedIndex !== null) {
            const index = parseInt(lastPlayedIndex);
            if (index >= 0 && index < playlistElement.children.length) {
                const lastPlayedElement = playlistElement.children[index];
                lastPlayedElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                lastPlayedElement.classList.add('playing');
            }
        }
    }

    function saveAccumulatedTime(audioElement) {
        const src = getSrcFromAudioElement(audioElement);
        if (!src || audioElement.playSegmentStartTime < 0) return;
        
        const segmentDuration = audioElement.currentTime - audioElement.playSegmentStartTime;
        if (segmentDuration <= 0) return;

        const playbackData = getPlaybackData();
        if (!playbackData[src]) playbackData[src] = {};

        const oldAccumulatedTime = playbackData[src].accumulatedTime || 0;
        playbackData[src].accumulatedTime = oldAccumulatedTime + segmentDuration;
        setPlaybackData(playbackData);
    }

    renderPlaylist();
});
