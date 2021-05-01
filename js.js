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
    const template = document.querySelector('template');
    const content = template.content.cloneNode(true);

    const firstLetterFirstName = user.firstName.charAt(0).toUpperCase();
    const firstLetterLastName = user.lastName.charAt(0).toUpperCase();
    content.querySelector('.image-placeholder').innerHTML = firstLetterFirstName + firstLetterLastName;
    content.querySelector('.full-name').innerHTML = user.firstName + " " + user.lastName;

    const img = new Image();
    img.src = user.image;
    console.log(content.querySelector('.image-wrapper'));//?????
    img.addEventListener('load', ({currentTarget}) => {
        currentTarget.classList.add('image');
        console.log(content.querySelector('.image-wrapper'));//?????
        //content.querySelector('.image-wrapper').innerHTML = '';
        //content.querySelector('.image-wrapper').appendChild('Hello');
    });

    const users = document.querySelector('.users');
    users.append(content);
}




