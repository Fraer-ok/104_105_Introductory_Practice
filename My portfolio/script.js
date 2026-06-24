const portfolioData = {
    profile: {
        name: "Дмитрий",
        profession: "Фронтенд-разработчик",
        age: 18
    },
    projects: [
        {
            id: 1,
            title: "Железный человек",
            date: 2008,
            estimation: 9,
            actor: "Robert John Downey Jr.",
            image: "ironman.jpg"
        },
        {
            id: 2,
            title: "Властелин колец",
            date: 2001,
            estimation: 6,
            actor: "Elijah Jordan Wood",
            image: "Ringowner.jpg"
        },
        {
            id: 3,
            title: "Backrooms",
            date: 2026,
            estimation: 6,
            actor: "Chiwetel Ejiofor",
            image: "Backrooms.jpg"
        },
        {
            id: 4,
            title: "Коммерсант",
            date: 2026,
            estimation: 8,
            actor: "Хаски",
            image: "Haski.jpg"
        },
        {
            id: 5,
            title: "The Sopranos",
            date: 1999,
            estimation: 10,
            actor: "James Gandolfini",
            image: "Soprano.jpg"
        },
        {
            id: 6,
            title: "Духлесс",
            date: 2012,
            estimation: 10,
            actor: "Данила Козловский",
            image: "Souless.jpg"
        }
    ],
    preferences: new Map([
        ["theme", "dark"],
        ["language", "ru"]
    ])
};
const moviesContainer = document.querySelector('#moviesContainer');
if (moviesContainer) {
    moviesContainer.innerHTML = '';
    portfolioData.projects.forEach(movie => {
        const movieCard = document.createElement('div');
        const cardImage = document.createElement('div');
        const cardTitle = document.createElement('h4');
        const cardDate = document.createElement('p');
        const cardActor = document.createElement('p');
        movieCard.classList.add('movie-card');
        cardImage.classList.add('card-image');
        if (movie.image) {
            cardImage.style.backgroundImage = `url('${movie.image}')`;
            cardImage.classList.add('card-image--photo');
        }
        cardTitle.classList.add('card-title');
        cardDate.classList.add('card-text');
        cardActor.classList.add('card-text');
        cardTitle.textContent = movie.title;
        cardDate.textContent = movie.date;
        cardActor.textContent = `Актер: ${movie.actor}`;
        movieCard.dataset.rating = movie.estimation;
        movieCard.dataset.id = movie.id;
        movieCard.append(cardImage);
        movieCard.append(cardTitle);
        movieCard.append(cardDate);
        movieCard.append(cardActor);
        moviesContainer.append(movieCard);
    });
    
    console.log(`Создано ${portfolioData.projects.length} карточек фильмов`);
} else {
    console.error('Контейнер #moviesContainer не найден!');
}
const profileKeys = Object.keys(portfolioData.profile);
console.log('Ключи профиля:', profileKeys);
const bestProjectsStrings = portfolioData.projects
    .filter(project => project.estimation > 8)
    .map(project => `${project.title} (${project.date}) - оценка: ${project.estimation}/10`);
console.log('Лучшие фильмы:', bestProjectsStrings);
let totalLikes = 0;
portfolioData.projects.forEach(movie => totalLikes += movie.estimation);
console.log(`Общая оценка всех фильмов: ${totalLikes}`);
const uniqueActors = new Set();
for (const movie of portfolioData.projects) {
    uniqueActors.add(movie.actor);
}
console.log('Уникальные актеры:', uniqueActors);
const moviesTitle = document.querySelector('.movies-section .section-title');
if (moviesTitle) {
    const count = portfolioData.projects.length;
    moviesTitle.textContent = `ЛЮБИМЫЕ ФИЛЬМЫ (${count})`;
}