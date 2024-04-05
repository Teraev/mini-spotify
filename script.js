const music_arr = [
    {
        id: 1,
        name: "Candy Shop",
        url: "./mp3/50 Cent feat. Olivia-Candy Shop.mp3",
        artist: "50 Cent ",
        duration: "3:26",
    },
    {
        id: 2,
        name: "Blue shoes",
        url: "./mp3/А_ты_стоишь_на_берегу_в_синем_платье.mp3",
        artist: "Trofim",
        duration: "3:01",
    },
    {
        id: 3,
        name: "Спасибо за день",
        url: "./mp3/Боярский_Михаил_Спасибо_за_день,_спасибо_за_ночь,_спасибо_за.mp3",
        artist: "Mikhail",
        duration: "5:57",
    },
    {
        id: 4,
        name: "Когда ты на машине",
        url: "./mp3/Гагик_Григорян_Когда_ты_на_машине_при_деньгах.mp3",
        artist: "Gagik",
        duration: "3:37",
    },
    {
        id: 5,
        name: "Ты другому отдана",
        url: "./mp3/Неизвестен - Ты другому отдана!.mp3",
        artist: "Magamet Dzibov",
        duration: "3:38",
    },
    {
        id: 6,
        name: "Осень",
        url: "./mp3/Осень.mp3",
        artist: "Guseyin Manapov",
        duration: "3:00",
    },
    {
        id: 7,
        name: "Сердце как лед",
        url: "./mp3/Рейсан_Магомедкеримов_Сердце_как_лёд.mp3",
        artist: "Reysan",
        duration: "3:20",
    },
    {
        id: 8,
        name: "The G.O.A.T",
        url: "./mp3/Eminem-Respect The G.O.A.T.mp3",
        artist: "Eminem",
        duration: "4:07",
    },
    {
        id: 9,
        name: " Айбала",
        url: "./mp3/Ramil, Ханза-Айбала.mp3",
        artist: "Ramil",
        duration: "3:13",
    }
]






const cont = document.querySelector('tbody')
const audio = document.querySelector('audio')
const player = document.querySelector('.player')
let isPlaying = false
let prev = null

const audio_anim = ` <dotlottie-player class="anim" src="https://lottie.host/ce20256a-3044-45f0-80b7-a30c6a58b50d/UJ4fg8gB9X.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>`

reload(music_arr, cont)
function reload(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        const tr = document.createElement('tr')
        const idx = document.createElement('td')
        const title = document.createElement('td')
        const artist = document.createElement('td')
        const date_song = document.createElement('td')
        const actions = document.createElement('td')
        const duration = document.createElement('span')
        const img = document.createElement('img')
       

        idx.innerHTML = arr.indexOf(item) + 1
        title.innerHTML = item.name
        artist.innerHTML = item.artist
        date_song.innerHTML = "1 day ago"
        duration.innerHTML = item.duration

        img.src = "./img/heart.png"
        img.classList.add('heart')



        actions.append(img, duration)
        tr.append(idx, title, artist, date_song, actions,)
        place.append(tr)

        idx.onclick = () => {
            if (isPlaying && item.id === +audio.id) {
                idx.innerHTML = arr.indexOf(item) + 1
                audio.pause()
                isPlaying = false
            } else {
                if (prev) prev.idx.innerHTML = prev.num
                audio.id = item.id
                audio.src = item.url
                audio.play()
                idx.innerHTML = audio_anim
                prev = { idx, num: arr.indexOf(item) + 1 }
                isPlaying = true
            }
        }
        
    }
}

audio.onended = () => {
    let sond = music_arr[prev.num - 1]
    audio.src = sond.url
    sond.play()
}

