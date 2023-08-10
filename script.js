
let isGameStarted = false;

function helloPage() {
    document.getElementById("hello-page").style.display = "block";
    window.addEventListener("keydown", function (event) {
        if (!isGameStarted) {
            document.getElementById("hello-page").style.display = "none";
            start();
            console.log("men chert")
            isGameStarted = !isGameStarted;
        }
        }
    );
}

helloPage();
function start() {
    audio = document.getElementById("muz");
    audio.play();
    let eggs = [];

    let coordinates = [];

    let eggIndex = -1;
    let currentQueue = 0;
    let score = 0;
    let hp = 0;
    let minute = 0;
    let second = 0;
    let levels = 1;

    let range = 150;

    document.getElementById("score").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("second").innerHTML = "00"
    document.getElementById("hp1").src = "img/heart.png";
    document.getElementById("hp2").src = "img/heart.png";
    document.getElementById("hp3").src = "img/heart.png";
    document.getElementById("level").innerHTML = "Level: 1";

    coordinates[0] = [
        document.getElementById("egg17").getBoundingClientRect().top,
        document.getElementById("egg17").getBoundingClientRect().left
    ];

    coordinates[1] = [
        document.getElementById("egg27").getBoundingClientRect().top,
        document.getElementById("egg27").getBoundingClientRect().left
    ];


    coordinates[2] = [
        document.getElementById("egg37").getBoundingClientRect().top,
        document.getElementById("egg37").getBoundingClientRect().left
    ];

    coordinates[3] = [
        document.getElementById("egg47").getBoundingClientRect().top,
        document.getElementById("egg47").getBoundingClientRect().left
    ];

    let currX = coordinates[0][0];
    let currY = coordinates[0][1];
    let currZhan = 0;

    let zhaniktar = [];

    zhaniktar = [
        document.getElementById("basket1"),
        document.getElementById("basket2"),
        document.getElementById("basket3"),
        document.getElementById("basket4"),
    ]


    eggs[0] = [
        document.getElementById("egg11"),
        document.getElementById("egg12"),
        document.getElementById("egg13"),
        document.getElementById("egg14"),
        document.getElementById("egg15"),
        document.getElementById("egg16"),
        document.getElementById("egg17")
    ];

    eggs[1] = [
        document.getElementById("egg21"),
        document.getElementById("egg22"),
        document.getElementById("egg23"),
        document.getElementById("egg24"),
        document.getElementById("egg25"),
        document.getElementById("egg26"),
        document.getElementById("egg27")
    ];

    eggs[2] = [
        document.getElementById("egg31"),
        document.getElementById("egg32"),
        document.getElementById("egg33"),
        document.getElementById("egg34"),
        document.getElementById("egg35"),
        document.getElementById("egg36"),
        document.getElementById("egg37")
    ];

    eggs[3] = [
        document.getElementById("egg41"),
        document.getElementById("egg42"),
        document.getElementById("egg43"),
        document.getElementById("egg44"),
        document.getElementById("egg45"),
        document.getElementById("egg46"),
        document.getElementById("egg47")
    ];

    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 7; k++) {
            eggs[i][k].style.display = "none";
        }
    }

    window.addEventListener("keydown", function (event) {
            console.log(event)
            let key = event.key;
            if (key === 'w') {
                currX = coordinates[0][0];
                currY = coordinates[0][1];
                zhaniktar[currZhan].style.display = "none";
                currZhan = 0;
                zhaniktar[0].style.display = "block";
            } else if (key === 's') {
                currX = coordinates[2][0];
                currY = coordinates[2][1];
                zhaniktar[currZhan].style.display = "none";
                currZhan = 2;
                zhaniktar[2].style.display = "block";
            } else if (key === 'e') {
                currX = coordinates[1][0];
                currY = coordinates[1][1];
                zhaniktar[currZhan].style.display = "none";
                currZhan = 1;
                zhaniktar[1].style.display = "block";
            } else if (key === 'd') {
                currX = coordinates[3][0];
                currY = coordinates[3][1];
                zhaniktar[currZhan].style.display = "none";
                currZhan = 3;
                zhaniktar[3].style.display = "block";
            }
        }
    );



    let inter = setInterval(function () {
        eggFall(currentQueue);
    }, range);

    let game = setInterval(function () {
        currentQueue = Math.floor(Math.random() * 4);
        inter;
    }, range*7);

    let time = setInterval(function () {
        if (second === 60) {
            second = 0;
            minute++;
            if (minute < 10) {
                document.getElementById("minute").innerHTML = "0" + minute;
            } else {
                document.getElementById("minute").innerHTML = minute;
            }
        }
        if (second < 10) {
            document.getElementById("second").innerHTML = "0" + second;
        } else {
            document.getElementById("second").innerHTML = second;
        }
        second++;
        if(second === 14 && minute === 0){
            levels = 2;
            document.getElementById("level").innerHTML = "Level: 2";
            range = 300;
        }else if(second === 35 && minute === 0) {
            levels = 3;
            document.getElementById("level").innerHTML = "Level: 3";
            range = 200;
        }
    }, 1000);

    game;
    time;

    function eggFall(currentQueue) {
        eggIndex++;
        if (eggIndex === 0) {
            eggs[currentQueue][eggIndex].style.display = "block";
        } else {
            eggs[currentQueue][eggIndex - 1].style.display = "none";
            eggs[currentQueue][eggIndex].style.display = "block";
            if (eggIndex === 6) {
                eggs[currentQueue][eggIndex].style.display = "none";
                eggIndex = -1;
                if (currX === coordinates[currentQueue][0] && currY === coordinates[currentQueue][1]) {
                    score++;
                    if (score < 10) {
                        document.getElementById("score").innerHTML = "0" + score;
                    } else {
                        document.getElementById("score").innerHTML = score;
                    }
                } else {
                    if (hp === 0) {
                        document.getElementById("hp1").src = "img/noHeart.png";
                        hp++;
                    } else if (hp === 1) {
                        document.getElementById("hp2").src = "img/noHeart.png";
                        hp++;
                    } else if (hp === 2) {
                        document.getElementById("hp3").src = "img/noHeart.png";
                        document.getElementById("lose-page").style.display = "block";
                        clearInterval(time);
                        clearInterval(game);
                        clearInterval(inter);
                        setTimeout(function() {
                            document.getElementById("lose-page").style.display = "none";
                            isGameStarted = !isGameStarted;
                            location.reload(true);
                        }, 4000);

                    }

                }
            }
        }
    }

}