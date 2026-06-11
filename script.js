// ===========================
// MENU RESPONSIVO
// ===========================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===========================
// BOTÃO CTA
// ===========================
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    const maleficosSection = document.getElementById('maleficos');
    maleficosSection.scrollIntoView({ behavior: 'smooth' });
});

// ===========================
// FAQ - ACCORDION
// ===========================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        // Fechar outros itens
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        // Toggle do item clicado
        item.classList.toggle('active');
    });
});

// ===========================
// FORMULÁRIO DE CONTATO
// ===========================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const inputs = contactForm.querySelectorAll('input, textarea');
    let allFilled = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
        }
    });
    
    if (allFilled) {
        alert('Obrigado por sua mensagem! Entraremos em contato em breve.');
        contactForm.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// ===========================
// ANIMAÇÃO DE SCROLL
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar cards
const cards = document.querySelectorAll('.maleficio-card, .impacto-card, .causa-item, .solucao-card, .acao-card, .faq-item');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===========================
// CONTADOR DE ESTATÍSTICAS
// ===========================
const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

const animateStats = () => {
    if (hasAnimated) return;
    
    statNumbers.forEach(stat => {
        const originalText = stat.textContent;
        const numberMatch = originalText.match(/\d+/);
        
        if (numberMatch) {
            const target = parseInt(numberMatch[0]);
            const increment = target / 50;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = originalText;
                    clearInterval(timer);
                } else {
                    const displayValue = Math.floor(current);
                    stat.textContent = originalText.replace(/\d+/, displayValue);
                }
            }, 30);
        }
    });
    
    hasAnimated = true;
};

// Observar seção de estatísticas
const statsSection = document.querySelector('.stats');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
        }
    });
}, { threshold: 0.5 });

statsObserver.observe(statsSection);

// ===========================
// EFEITO DE HOVER NOS CARDS
// ===========================
const allCards = document.querySelectorAll('.maleficio-card, .impacto-card, .solucao-card, .acao-card');

allCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
    });
});

// ===========================
// SCROLL SUAVE PARA LINKS DE NAVEGAÇÃO
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// ATIVA LINK DE NAVEGAÇÃO ATIVO
// ===========================
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// ===========================
// ADICIONAR ESTILO AO LINK ATIVO
// ===========================
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #9ccc65;
        border-bottom: 2px solid #9ccc65;
    }
`;
document.head.appendChild(style);

// ===========================
// CONSOLE LOG DE INICIALIZAÇÃO
// ===========================
console.log('🌍 Site sobre Desmatamento carregado com sucesso!');
console.log('Tema: Desmatamento - Malefícios e Soluções');
console.log('Versão: 2024');