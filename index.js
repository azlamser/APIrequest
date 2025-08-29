let url = "https://api.waifu.im/search";

const anime_name = document.getElementById("anime_name");
const anime_desc = document.getElementById("anime_desc");
const image = document.getElementById("image");

async function fetchWaifuData() {
    try {
        console.log("Fetching waifu data...");

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (data.images && data.images.length > 0) {
            const imageData = data.images[0];
            const tag = imageData.tags && imageData.tags.length > 0 ? imageData.tags[0] : null;

            anime_name.innerText = tag?.name || "No name found";
            anime_desc.innerText = tag?.description || "No description available";
            image.src = imageData.url || "";
        } else {
            anime_name.innerText = "No image found";
            anime_desc.innerText = "";
            image.src = "";
        }

    } catch (error) {
        console.error("Error fetching data:", error);
        anime_name.innerText = "Error loading data";
        anime_desc.innerText = "";
        image.src = "";
    }
}

   fetchWaifuData()

let btn=document.getElementById("changebtn")
btn.addEventListener("click",()=>{
    console.log("clicked")
    fetchWaifuData()
})