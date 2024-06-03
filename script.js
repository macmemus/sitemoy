function openDrawer() {
    document.getElementById("drawer").style.width = "250px";
}

function closeDrawer() {
    document.getElementById("drawer").style.width = "0";
}


document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
    const guides = document.querySelectorAll('.guide-card');

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();

        guides.forEach(guide => {
            const title = guide.querySelector('h2').textContent.toLowerCase();
            const content = guide.querySelector('p').textContent.toLowerCase();

            if (title.includes(query) || content.includes(query)) {
                guide.style.display = '';
            } else {
                guide.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const articles = document.querySelectorAll('.article');
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.close-button');

    const popupData = {
        1: {
            title: 'Персонализированное обучение с помощью AI',
            imageSrc: 'img/getty.jpg',
            paragraphs: [
                'AI может адаптироваться к различным стилям обучения, что позволяет учащимся учиться в своем собственном темпе. Это может включать адаптивные учебные планы, интерактивные упражнения и автоматическую обратную связь.',
                'Кроме того, AI может помочь преподавателям лучше понять прогресс своих учеников, анализируя данные об их успеваемости и предлагая рекомендации по улучшению учебного процесса.'
            ],
            buttonLink: 'guides.html'
        },
        2: {
            title: 'Использование AI для оценки знаний',
            imageSrc: 'img/1589462052803.jpg',
            paragraphs: [
                'Системы на базе искусственного интеллекта могут быстро и точно оценивать знания студентов, освобождая преподавателей от рутинных задач и позволяя им сосредоточиться на более значимых аспектах преподавания.',
                'Это повышает объективность и точность оценки знаний, а также позволяет преподавателям больше времени уделять индивидуальной работе со студентами.'
            ],
            buttonLink: 'guides.html'
        },
        3: {
            title: 'AI-технологии в создании учебных материалов',
            imageSrc: 'img/education-main-1600.jpg',
            paragraphs: [
                'Искусственный интеллект используется для создания интерактивных учебных материалов, таких как виртуальные лаборатории и симуляции, которые делают обучение более увлекательным и эффективным.',
                'Эти технологии позволяют студентам лучше понимать сложные концепции и применять полученные знания на практике.'
            ],
            buttonLink: 'guides.html'
        },
        4: {
            title: 'Использование AI в обучении программированию',
            imageSrc: 'img/949652688.jpg',
            paragraphs: [
                'AI может помочь студентам учиться программированию, предоставляя советы и автоматическую проверку кода.',
                'Эти технологии позволяют студентам быстро получать обратную связь и улучшать свои навыки программирования.'
            ],
            buttonLink: 'guides.html'
        },
        5: {
            title: 'AI в языковом обучении',
            imageSrc: 'img/1643625790132.jpg',
            paragraphs: [
                'Искусственный интеллект используется для создания адаптивных языковых курсов, которые подстраиваются под уровень знаний и прогресс ученика.',
                'AI может также помочь в изучении произношения, грамматики и словарного запаса через интерактивные упражнения и обратную связь.'
            ],
            buttonLink: 'guides.html'
        },
        6: {
            title: 'AI в искусстве и дизайне',
            imageSrc: 'img/0_Ytj0SnjPnK4Ozgol.png',
            paragraphs: [
                'AI для создания новых форм искусства и дизайна, предлагая инновационные инструменты для художников и дизайнеров.',
                'AI может генерировать идеи, создавать произведения искусства и помогать в процессе творчества.'
            ],
            buttonLink: 'guides.html'
        }
    };

    articles.forEach(article => {
        article.addEventListener('click', function() {
            const articleId = this.dataset.articleId;
            const data = popupData[articleId];
            if (data) {
                popup.querySelector('h2').textContent = data.title;
                popup.querySelector('.popup-image').src = data.imageSrc;
                const paragraphs = popup.querySelectorAll('.popup-content p');
                paragraphs[0].textContent = data.paragraphs[0];
                paragraphs[1].textContent = data.paragraphs[1];
                
                const button = document.createElement('a');
                button.href = data.buttonLink;
                button.className = 'custom-button';
                button.textContent = 'Узнать больше';
                
                const existingButton = popup.querySelector('.custom-button');
                if (existingButton) {
                    existingButton.replaceWith(button);
                } else {
                    popup.querySelector('.popup-content').appendChild(button);
                }
                
                popup.style.display = 'flex';
            }
        });
    });

    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});