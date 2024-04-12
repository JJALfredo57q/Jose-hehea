document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const trackLinks = document.querySelectorAll('.tracklist a');

    trackLinks.forEach(function (trackLink) {
        trackLink.addEventListener('click', function (event) {
            event.preventDefault();
            const trackUrl = trackLink.getAttribute('href');
            audioPlayer.src = trackUrl;
            audioPlayer.play();
        });
    });
});
