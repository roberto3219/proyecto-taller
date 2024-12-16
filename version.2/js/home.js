window.addEventListener("load",function(){
    let subtitleElement = document.querySelector(".subtitle_conteiner")
    console.log(subtitleElement)
    let text = subtitleElement.textContent;
    console.log(text)
    subtitleElement.textContent = '';

    text.split('').forEach((char,index)=> {
        const span = document.createElement('span');
        span.textContent = char;
        span.classList.add("shaking-letter");
        span.style.animationDelay = `${index * 0.1}s`;
        subtitleElement.appendChild(span);
    })
})