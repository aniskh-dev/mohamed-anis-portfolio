// 1. تأثير الكتابة
const words = ["Computer Science Student", "Web Developer", "Tech Enthusiast"];
let i = 0;
let isDeleting = false;
let textIndex = 0;

function typeWriter() {
    const currentWord = words[i];
    const typeSpan = document.querySelector('.typewriter');
    
    if (isDeleting) {
        typeSpan.textContent = currentWord.substring(0, textIndex - 1);
        textIndex--;
    } else {
        typeSpan.textContent = currentWord.substring(0, textIndex + 1);
        textIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && textIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && textIndex === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        typeSpeed = 500;
    }
    setTimeout(typeWriter, typeSpeed);
}

// 2. إدارة المشاريع
const myProjects = [
    {
        title: "Personal Portfolio Website",
        desc: "Responsive personal portfolio website built to showcase skills and projects.",
        tags: ["HTML", "CSS", "JavaScript"],
        bgGradient: "linear-gradient(135deg, #0ea5e9, #2563eb)"
    },
    {
        title: "Student Management System",
        desc: "A simple and effective management system to handle student data and records.",
        tags: ["PHP", "MySQL"],
        bgGradient: "linear-gradient(135deg, #8b5cf6, #d946ef)"
    },
    {
        title: "Tech Repair Experience",
        desc: "Extensive experience fixing software and hardware problems for smartphones and computers.",
        tags: ["Hardware", "Software", "Troubleshooting"],
        bgGradient: "linear-gradient(135deg, #10b981, #3b82f6)"
    }
];

function displayProjects() {
    const container = document.getElementById('portfolio-projects-container');
    container.innerHTML = ""; 

    myProjects.forEach(project => {
        const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        const cardHTML = `
            <div class="portfolio-card">
                <div class="card-img" style="background: ${project.bgGradient};"></div>
                <div class="card-content">
                    <h3 class="card-title">${project.title}</h3>
                    <p class="card-desc">${project.desc}</p>
                    <div class="tech-tags">
                        ${tagsHTML}
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    displayProjects();
});

// 3. التمرير
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-item a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 2.5)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});