// Fonction pour afficher une page spécifique
function showPage(pageId) {
    // 1. Masquer toutes les pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    updateActiveLink(pageId);

    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('mobile-active')) {
        navLinks.classList.remove('mobile-active');
    }
    
    // Remonter en haut de page
    window.scrollTo(0, 0);
}

// Fonction pour mettre en surbrillance le lien du menu
function updateActiveLink(pageId) {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.classList.remove('active');
        // On vérifie si l'attribut onclick contient l'ID de la page
        if (link.getAttribute('onclick').includes(pageId)) {
            link.classList.add('active');
        }
    });
}

// Gestion du menu Hamburger (Mobile)
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-active');
    });
});

/* --- GESTION DES MODALES (CHRONOLOGIE) --- */

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Empêche le scroll derrière
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Réactive le scroll
    }
}

// Fermeture avec la touche ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const activeModals = document.querySelectorAll('.modal-overlay.active');
        activeModals.forEach(modal => {
            closeModal(modal.id);
        });
    }
});
