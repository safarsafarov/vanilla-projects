const wrapper = document.querySelector(".wrapper");
searchInput - wrapper.querySelector("input");
volume = wrapper.querySelector("input");
infoText = wrapper.querySelector(".info-text");
synonyms = wrapper.querySelector(".synonyms .list");
removeIcon = wrapper.querySelector(".search span");
let audio;

function data(result, word) {
    if(result.title) {
        infoText.innerHTML = "Can't "
    }
}