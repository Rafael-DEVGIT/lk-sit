
// jS. NAVBAR //
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const duration = 3000; // Duração da animação em milissegundos
    let current = 0;
    const increment = target / (duration / 100);

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.innerText = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };

    setTimeout(() => {
      updateCounter();
    }, 500); // Atraso antes de iniciar a animação
  });
});


const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.project_navegacao li');
const buttonALL = document.querySelector('.project_models .all');

listaALL.forEach((item) => {
  item.classList.add('ativo');
})

function removeClick(index) {
  buttonGeral.forEach((item) => {
    item.classList.remove('ativo');
  })
  buttonGeral[index].classList.add('ativo')
}

buttonGeral.forEach((event, index) => {
  event.addEventListener('click', () => {
    removeClick(index)
  })
})

function showLista(lista, buttom = "all") {
  lista.forEach((item) => {
    item.classList.remove('ativo');
  });

  if (buttom == 'medio') {
    lista[0].classList.add('ativo');
    lista[1].classList.add('ativo');
    lista[2].classList.add('ativo');
    lista[3].classList.add('ativo');
    lista[4].classList.add('ativo');
    lista[5].classList.add('ativo');
    lista[6].classList.add('ativo');
    lista[7].classList.add('ativo');
  }
  if (buttom == 'alto') {
    lista[8].classList.add('ativo');
    lista[9].classList.add('ativo');
    lista[10].classList.add('ativo');
    lista[11].classList.add('ativo');
    lista[12].classList.add('ativo');
    lista[13].classList.add('ativo');
    lista[14].classList.add('ativo');
    lista[15].classList.add('ativo');
  }

  if (buttom == 'construcao') {
    lista[16].classList.add('ativo');
    lista[17].classList.add('ativo');
    lista[18].classList.add('ativo');
    lista[19].classList.add('ativo');
  }

  if (buttom == 'all') {
    lista[0].classList.add('ativo');
    lista[1].classList.add('ativo');
    lista[2].classList.add('ativo');
    lista[3].classList.add('ativo');
    lista[4].classList.add('ativo');
    lista[5].classList.add('ativo');
    lista[6].classList.add('ativo');
    lista[7].classList.add('ativo');
    lista[8].classList.add('ativo');
    lista[9].classList.add('ativo');
    lista[10].classList.add('ativo');
    lista[11].classList.add('ativo');
    lista[12].classList.add('ativo');
    lista[13].classList.add('ativo');
    lista[14].classList.add('ativo');
    lista[15].classList.add('ativo');
    lista[16].classList.add('ativo');
    lista[17].classList.add('ativo');
    lista[18].classList.add('ativo');
    lista[19].classList.add('ativo');
  }
}

buttonGeral.forEach((item) => {
  item.addEventListener('click', (e) => {
    let currentButton = e.target;
    if (currentButton.classList.contains('all')) {
      showLista(listaALL);
    } if (currentButton.classList.contains('medio')) {
      showLista(listaALL, "medio")
    }

    if (currentButton.classList.contains('alto')) {
      showLista(listaALL, "alto")
    }

    if (currentButton.classList.contains('construcao')) {
      showLista(listaALL, "construcao")
    }

    if (currentButton.classList.contains('all')) {
      showLista(listaALL, "all")
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});


function mostrarDiv(event, num) {
  event.preventDefault();

  // Esconde todas as divs
  document.querySelectorAll('.conteudo').forEach(div => {
    div.classList.remove('ativo');
  });

  // Mostra a div selecionada
  document.getElementById('div' + num).classList.add('ativo');

  // Remove classe ativa dos links
  document.querySelectorAll('.links a').forEach(link => {
    link.classList.remove('ativo-link');
  });

  // Adiciona a classe ao link clicado
  event.target.classList.add('ativo-link');
}


function mostrarConteudo(id) {
  const divs = document.querySelectorAll('.conteudo');
  divs.forEach(div => div.classList.remove('ativo'));
  document.getElementById(id).classList.add('ativo');
}

function mudarImagem(el) {
  const imagemPrincipal = document.getElementById("imagemPrincipal");
  imagemPrincipal.src = el.src.replace("150", "600x400");
}

function mostrarConteudo(id, linkClicado) {
  // Previne o comportamento padrão do link
  event.preventDefault();

  // Esconde todas as divs de conteúdo
  const divs = document.querySelectorAll('.conteudo');
  divs.forEach(div => div.classList.remove('ativo'));

  // Remove classe 'ativo-btn' de todos os links
  const links = document.querySelectorAll('.botoes a');
  links.forEach(link => link.classList.remove('ativo-btn'));

  // Mostra a div correspondente e ativa o link
  document.getElementById(id).classList.add('ativo');
  linkClicado.classList.add('ativo-btn');
}





// Troca de conteúdo (div1, div2, div3)
function mostrarConteudo(id, el) {
  document.querySelectorAll('.conteudo').forEach(div => {
    div.classList.remove('ativo');
  });
  document.getElementById(id).classList.add('ativo');

  document.querySelectorAll('.botoes a').forEach(a => {
    a.classList.remove('ativo-btn');
  });
  el.classList.add('ativo-btn');
}

// Lógica das galerias (3 divs com carrossel de imagens)
document.querySelectorAll('.conteudo-destaque').forEach((conteudo, index) => {
  const imgPrincipal = conteudo.querySelector('#img-principal');
  const thumbs = conteudo.querySelectorAll('.btn-img-g a img');
  let atual = 0;

  function atualizarAtivo(i) {
    thumbs.forEach(img => img.classList.remove('ativo'));
    thumbs[i].classList.add('ativo');
    imgPrincipal.src = thumbs[i].src;
    atual = i;
  }

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      atualizarAtivo(i);
    });
  });

  atualizarAtivo(atual);

  setInterval(() => {
    if (!conteudo.closest('.conteudo').classList.contains('ativo')) return;
    atual = (atual + 1) % thumbs.length;
    atualizarAtivo(atual);
  }, 5000);
});


(function () {
  const links = document.querySelectorAll('.emailarea-link');
  const tabs = document.querySelectorAll('.emailarea-tab');

  function showTab(id, linkEl) {
    tabs.forEach(tab => tab.style.display = 'none');
    const target = document.getElementById(id);
    if (target) target.style.display = 'block';

    links.forEach(link => link.classList.remove('active'));
    if (linkEl) linkEl.classList.add('active');
  }

  // Inicializa a primeira tab
  if (tabs.length > 0) tabs[0].style.display = 'block';
  if (links.length > 0) links[0].classList.add('active');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      showTab(targetId, link);
    });
  });
})();

const botoes = document.querySelectorAll('.e-btn');
const divs = document.querySelectorAll('.e-content');

botoes.forEach(function (btn) {
  btn.addEventListener('click', function () {
    const numero = btn.getAttribute('data-show');

    // remover classe ativa de todas as divs
    divs.forEach(function (div) {
      div.classList.remove('e-active');
    });
    // adicionar classe ativa à div alvo
    const divAlvo = document.querySelector('.e-content-' + numero);
    if (divAlvo) {
      divAlvo.classList.add('e-active');
    }

    // remover classe de botão ativo de todos os botões
    botoes.forEach(function (b) {
      b.classList.remove('e-active-btn');
    });
    // adicionar classe de botão ativo apenas no botão clicado
    btn.classList.add('e-active-btn');
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const slideContainer = document.querySelector('.home1');
  const slides = slideContainer.querySelectorAll('.slidesa img');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.add('hidden');
      if (i === index) {
        slide.classList.remove('hidden');
      }
    });
    currentSlide = index;
  }

  // inicializa
  showSlide(currentSlide);

  // auto-troca a cada 5 segundos
  setInterval(() => {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }, 5000);
});


const slides = document.querySelectorAll('.slide-motivos .slide-item');
const prevBtn = document.querySelector('.slide-motivos .nav-btn.prev');
const nextBtn = document.querySelector('.slide-motivos .nav-btn.next');
const dots = document.querySelectorAll('.slide-motivos .dot');
let currentIndex = 0;
const intervalTime = 5000;
let slideInterval;

function showSlide(index) {
  slides.forEach((sl, i) => {
    sl.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});
prevBtn.addEventListener('click', () => {
  prevSlide();
  resetInterval();
});
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const idx = parseInt(dot.getAttribute('data-slide'), 10);
    currentIndex = idx;
    showSlide(currentIndex);
    resetInterval();
  });
});

function startInterval() {
  slideInterval = setInterval(nextSlide, intervalTime);
}
function resetInterval() {
  clearInterval(slideInterval);
  startInterval();
}

showSlide(currentIndex);
startInterval();
