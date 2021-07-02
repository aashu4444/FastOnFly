// Character animation
let charsElems = document.querySelectorAll(".char-animation");
if (charsElems){
    for(let item of charsElems){
        let chars = item.innerText.split("");
        let html = "";
        let delay = 0;
        for(let char of chars){
            html += `<span class="${item.getAttribute("data-char-class")}" style="animation:glow ${item.getAttribute("data-duration")}s infinite;animation-delay:${delay*0.3}s;">${char}</span>`;
            delay += Number(item.getAttribute("data-delay"));
        }
        item.innerHTML = html;
    }
}