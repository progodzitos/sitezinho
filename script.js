// Pega os elementos do HTML
const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

// Função para abrir a barra lateral
openBtn.addEventListener('click', function() {
    sidebar.classList.add('open');
});

// Função para fechar a barra lateral
closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('open');
});
