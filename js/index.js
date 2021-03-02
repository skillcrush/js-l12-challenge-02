const button = document.querySelector("button");
const memeDiv = document.querySelector(".meme");
const memeName = document.querySelector(".meme-name");
const memeImg = document.querySelector(".meme-img");

const getMeme = async function () {
  const memeRequest = await fetch("https://api.imgflip.com/get_memes");
  const jsonData = await memeRequest.json();
  console.log(jsonData);
  const memesArray = jsonData.data.memes;
  console.log(memesArray); // array of 100 meme objects :O
};

getMeme();
