const fileInput = document.querySelector("input");
downloadBtn = document.querySelector("button");

downloadBtn.addeventListener("click", e => {
    e.preventDefault();
    downloadBtn.innerText = "Downloading...";
    fetchFile(fileInput.value);
})

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.repplace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
        downloadBtn.innerText = "Download File";
    }).catch(() => {
        downloadBtn.innerText = "Download File";
        alert("Failed to download file!")
    })
}