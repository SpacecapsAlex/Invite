document.addEventListener('DOMContentLoaded', function() {
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [55.811113, 27.046153],
            zoom: 12
        });

        var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Выкуп',
            balloonContent: 'Здесь состоится выкуп'
        });

        myMap.geoObjects.add(myPlacemark);

        var myMap1 = new ymaps.Map("map1", {
            center: [55.615391, 27.072623],
            zoom: 12
        });

        var myPlacemark1 = new ymaps.Placemark(myMap1.getCenter(), {
            hintContent: 'Регистрация и место проведения свадьбы',
            balloonContent: 'Здесь состоится наше торжество'
        });

        myMap1.geoObjects.add(myPlacemark1);

        var myMap2 = new ymaps.Map("map2", {
            center: [55.633710, 27.050283],
            zoom: 12
        });

        var myPlacemark2 = new ymaps.Placemark(myMap2.getCenter(), {
            hintContent: 'Венчание',
            balloonContent: 'Здесь будет происходить венчание'
        });

        myMap2.geoObjects.add(myPlacemark2);
    }

    function updateCountdown() {
        const endDate = new Date('August 3, 2024 11:00:00').getTime();
        const now = new Date().getTime();
        const timeLeft = endDate - now;

        const weeks = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('weeks').innerText = weeks < 10 ? '0' + weeks : weeks;
        document.getElementById('days').innerText = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    }

    setInterval(updateCountdown, 1000);

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.time-unit').forEach(element => observer.observe(element));

    observer.observe(document.querySelector('.details'));

    let elements = document.querySelectorAll('.timeline-item');

    elements.forEach(el => {
        observer.observe(el);
    })
});
