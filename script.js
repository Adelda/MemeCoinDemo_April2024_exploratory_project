function strikeThroughText() {
    var element = document.getElementById("textToStrike");
    var fragments = element.innerHTML.split(/(<span class="highlight">.*?<\/span>)/g); 

    element.innerHTML = '';

    fragments.forEach((fragment, index) => {
        if (fragment.includes('<span class="highlight">')) { 
            var highlightSpan = document.createElement('span'); 
            highlightSpan.innerHTML = fragment; 
            element.appendChild(highlightSpan); 

            setTimeout(() => {
                highlightSpan.querySelector('.highlight').classList.add('darken-background');
            }, 30 * index); 

        } else { 
            fragment.split('').forEach((char, charIndex) => {
                var span = document.createElement('span');
                span.innerText = char;
                element.appendChild(span);

                setTimeout(() => {
                    span.classList.add('redStrike');
                }, 30 * (index + charIndex)); 
            });
        }
    });
}


function revealText() {
    const text = document.querySelector('.announcement-text');
    text.style.opacity = 1; 
    text.style.transform = 'translateY(0)'; 
}

window.onload = function() {
    strikeThroughText();
};





