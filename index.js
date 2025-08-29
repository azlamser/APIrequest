let url = "https://api.waifu.im/search";
const animeName=document.getElementById("anime_name")
const animeDesc=document.getElementById("anime_desc")
const image=document.getElementById("image")
let btn=document.getElementById("changebtn");

async function fetchWaifuData() {
    let request=await fetch(url);
    let response=await request.json()
    const data=(response.images[0])
 
  
    image.src=data.url

animeName.innerText=data.tags[0].name
animeDesc.innerText=data.tags[0].description

}
fetchWaifuData()





btn.addEventListener("click",()=>{
    console.log("clicked")
    fetchWaifuData()
})