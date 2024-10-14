function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


// Seleciona a seta e todas as secções
let svgContainer = document.querySelector('.bodymovinanim');
let animItem = lottie.loadAnimation({
  container: svgContainer, // Correct reference to the container
  renderer: 'svg', // Correct renderer
  loop: true, // Loop the animation
  autoplay: true, // Automatically play the animation
  path: './arrowDown.json' // Path to your animation file
});

// Seleciona a seta e todas as secções
const arrow = document.querySelector('.bodymovinanim');
const sections = document.querySelectorAll('section');

// Evento de clique na seta para fazer scroll suave e escondê-la após o clique
arrow.addEventListener('click', function () {
    let nextSection;

    // Percorre todas as secções para encontrar a próxima visível
    for (let i = 0; i < sections.length; i++) {
        const sectionTop = sections[i].getBoundingClientRect().top;

        // Verifica se a secção atual é visível e encontra a próxima
        if (sectionTop > window.innerHeight / 3) {
            nextSection = sections[i];
            break;
        }
    }

    // Faz scroll suave para a próxima secção e esconde a seta após o scroll
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
        // Esconde a seta após o clique
        arrow.style.opacity = '0'; 
        arrow.style.pointerEvents = 'none'; // Desativa o clique
    }
});

// Função para monitorizar o scroll
window.addEventListener('scroll', function () {
    const section1 = document.querySelector('#profile');
    const section1Top = section1.getBoundingClientRect().top;

    // Se o utilizador voltar para a primeira secção (Profile), mostra a seta
    if (section1Top >= 0) {
        arrow.style.opacity = '1'; // Mostra a seta
        arrow.style.pointerEvents = 'auto'; // Ativa o clique
    } else {
        // Esconde a seta ao fazer scroll para qualquer outra secção
        arrow.style.opacity = '0'; // Esconde a seta
        arrow.style.pointerEvents = 'none'; // Desativa o clique
    }
});




function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    // Alternar entre o modo escuro e claro
    body.classList.toggle('dark-mode');

    // Verificar o estado atual e mudar o ícone
    if (body.classList.contains('dark-mode')) {
        themeIcon.src = './assets/sun-yellow.svg';  // Troca para o ícone do sol
    } else {
        themeIcon.src = './assets/moon.svg'; // Troca de volta para o ícone da lua
    }
}



