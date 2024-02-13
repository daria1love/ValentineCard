const container = document.querySelectorAll('li');
const massElements = [...container];

const audioList = [
    "BOOKER, МУККА, pyrokinesis - Некуда бежать.mp3",
    "Linkin_Park_-_Leave_Out_All_The_Rest_47958369.mp3",
    "Linkin_Park_-_Lost_75941129.mp3",
    "Linkin_Park_-_Valentines_Day_47958379.mp3",
    "MUKKA_-_Posle_tebya_74908145.mp3",
    "Nasha_Tanya_Tri_dnya_dozhdya_-_Perezimuyu_75344326.mp3",
    "pyrokinesis_MUKKA_-_chjornoe_serdce_74625834.mp3",
    "trinadcat_karat_-_poka_on_tebya_ne_brosit_74678132.mp3",
    "trinadcat_karat_-_ty_74678129.mp3",
    "trinadcat_karat_Tri_dnya_dozhdya_-_bolshe_ne_budu_74678134.mp3",
    "Tri_dnya_dozhdya_-_Kristallicheskie_lyarvy_76864075.mp3",
    "Tri_dnya_dozhdya_-_Perezaryazhajj_72989997.mp3",
    "Tri_dnya_dozhdya_-_Proshhanie_76864069.mp3",
    "Tri_dnya_dozhdya_Zivert_-_Vydykhajj_73965881.mp3",
    "МУККА - Боль.mp3",
    "МУККА - Бурями.mp3",
    "МУККА - Жди меня дома.mp3",
    "МУККА - Мертвые цветы.mp3",
    "МУККА - Химия.mp3"
];

//'You are the reason my world', 'is full of laughter and joy.', 'Happy Valentine’s Day, my heart'
const listenedToSong = [];

const ClearMass = (audioList) => {
    if (listenedToSong.length == audioList.length) {
        listenedToSong.length = 0;
    }
}

const RandomSong = (audioList) => {
    ClearMass(listenedToSong, audioList);
    let randomNumb = Math.floor(Math.random() * (audioList.length - 1));
    if (!(listenedToSong.find((el) => el == randomNumb))) {
        listenedToSong.push(randomNumb);
        return audioList[randomNumb];
    }
    RandomSong(audioList);
}

const PlaySong = (audioList) => {
    for (let i = 0; i < massElements.length; i++) {
        massElements[i].addEventListener("click", () => {
            audio.pause();
            audio.src = "./musicForUs/" + RandomSong(audioList)
            audio.play();
        })
    }
}

const audio = new Audio();
PlaySong(audioList);


