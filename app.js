const createStars = function () {
    const starContainer = document.createElement('div');
    starContainer.classList.add('star-container', 'flex', 'center', 'gap-xs');
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('img');
        star.src = 'images/icon-star.svg';
        starContainer.appendChild(star);
    }

    return starContainer;
}

const ratingBy = function () {
    const ratingBlock = document.querySelector('.ratingSection');
    const rated = ['Reviews', 'Report Guru', 'BestTech'];

    for (let i = 0; i < 3; i++) {
        const createBlock = document.createElement('div');
        createBlock.classList.add('ratingItem', 'block-layout-rating', 'flex', 'col', 'gap-xs'); // Add a class for styling

        const textRated = document.createElement('p');
        textRated.innerText = `Rated 5 Stars by ${rated[i]}`; // Set the text

        const starContainer = createStars(); // Create the star container

        createBlock.appendChild(starContainer); // Append the star container
        createBlock.appendChild(textRated); // Append the text

        ratingBlock.appendChild(createBlock);
    }
}

ratingBy();

const commentBy = function () {
    const commentBlock = document.querySelector('.commentSection');
    const image = ['image-colton', 'image-irene', 'image-anne'];
    const name = ['Colton Smith', 'Irene Roberts', 'Anne Wallace']
    const comments = [
        `We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!`,

        `Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.`,

        `Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!`
    ];

    for (let i = 0; i < 3; i++) {
        const createBlock = document.createElement('div');
        const topBlock = document.createElement('div');
        const botBlock = document.createElement('div');
        topBlock.classList.add('flex', 'width-top-block',); // Add a class for styling
        createBlock.classList.add('create-block');
        const profilePicture = document.createElement('img');
        const profileName = document.createElement('p')
        const textRated = document.createElement('p');
        const comment = document.createElement('p');
        const status = document.createElement('span');
        status.classList.add('color-l-magenta');
        status.innerText = 'Verified Buyer';

        profilePicture.src = (`images/${image[i]}.jpg`);

        textRated.innerText = `${name[i]} `;
        textRated.appendChild(status);  // Set the text
        comment.innerText = `" ${comments[i]}"`


        topBlock.appendChild(profilePicture);
        topBlock.appendChild(profileName);
        topBlock.appendChild(textRated); // Append the text
        botBlock.appendChild(comment);
        createBlock.appendChild(topBlock);
        createBlock.appendChild(botBlock);

        commentBlock.appendChild(createBlock);

    }
}

commentBy();

