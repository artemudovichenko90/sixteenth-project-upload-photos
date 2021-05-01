const users = [
    {
        firstName: "Petr",
        lastName: "Petrov",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500&quot;"
    },
    {
        firstName: "Ivan",
        lastName: "Ivanov",
        image: "https://www.breakingbelizenews.com/wp-content/uploads/2017/02/Arnold-Schwarzenegger.jpg"
    }
]

for (const user of users) {
    const article = document.createElement('article');

    article.className = 'user';
    const imageWrapper = document.createElement('div');

    imageWrapper.className = 'image-wrapper';
    const firstLetterFirstName = user.firstName.charAt(0).toUpperCase();
    const firstLetterLastName = user.lastName.charAt(0).toUpperCase();
    imageWrapper.innerHTML = `<h3 class="image-placeholder">${firstLetterFirstName + firstLetterLastName}</h3>`;

    const img = new Image();
    img.src = user.image;
    img.addEventListener('load', ({currentTarget}) => {
        currentTarget.classList.add('image');
        imageWrapper.innerHTML = '';
        imageWrapper.appendChild(currentTarget);
    });

    const h1 = document.createElement('h1');
    h1.className = 'full-name';
    h1.innerHTML = user.firstName + " " + user.lastName;

    const users = document.querySelector('.users');
    article.append(imageWrapper);
    article.append(h1);
    users.append(article);
}