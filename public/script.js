// Fonction pour barrer le texte
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

// Fonction pour afficher le texte
function revealText() {
    const text = document.querySelector('.announcement-text');
    text.style.opacity = 1; 
    text.style.transform = 'translateY(0)'; 
}

// Fonction pour défilement du texte
function scrollText() {
    var lastScrollTop = 0;
    var header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scrolling down
            header.style.top = "-100px"; // Cacher le header vers le haut
        } else {
            // Scrolling up
            header.style.top = "0"; // Afficher le header
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
}

// Écouteur d'événement pour détecter le défilement de la fenêtre
window.addEventListener('scroll', function() {
    // Appeler la fonction de défilement du texte lorsque l'utilisateur fait défiler la page
    scrollText();
});

// Fonction exécutée lorsque la fenêtre est chargée
window.onload = function() {
    strikeThroughText(); // Appel de la fonction pour barrer le texte
    revealText(); // Appel de la fonction pour afficher le texte
};
