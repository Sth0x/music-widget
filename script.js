const API = "http://localhost:26538/api/v1/song"

function formatTime(sec){

 const m = Math.floor(sec / 60)
 const s = Math.floor(sec % 60)

 return `${m}:${s.toString().padStart(2,"0")}`

}

async function update(){

 try{

 const res = await fetch(API)
 const data = await res.json()

 document.getElementById("title").innerText = data.title
 document.getElementById("artist").innerText = data.artist
 document.getElementById("cover").src = data.imageSrc
 document.getElementById("bg").style.backgroundImage =
 `url(${data.imageSrc})`

 const progress =
 (data.elapsedSeconds / data.songDuration) * 100

 document.getElementById("bar").style.width =
 progress + "%"

 document.getElementById("current").innerText =
 formatTime(data.elapsedSeconds)

 document.getElementById("duration").innerText =
 formatTime(data.songDuration)

 }catch(e){

 console.log("Erro ao pegar dados", e)

 }

}

setInterval(update,1000)

update()