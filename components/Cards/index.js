// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function cardMaker(dataObjArr) {
    // Elements
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgContainerDiv = document.createElement('div');
    const imgElement = document.createElement('img');
    const bySpan = document.createElement('span');
    // Classes
    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainerDiv.classList.add('img-container');
    // Content
    headlineDiv.textContent = dataObjArr.headline;
    imgElement.src = `${dataObjArr.authorPhoto}`;
    bySpan.textContent = `By ${dataObjArr.authorName}`;
    // Structure
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgContainerDiv);
    imgContainerDiv.appendChild(imgElement);
    authorDiv.appendChild(bySpan);

    return cardDiv;
}

const cardsContainerDiv = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( (response) => {

    console.log('cards response', response.data.articles)

    console.log(Object.values(response.data.articles));

    const dataObjArrays = Object.values(response.data.articles)

    dataObjArrays.forEach( (dataArr) => {
        dataArr.forEach( (cardArr) => {
            cardsContainerDiv.appendChild(cardMaker(cardArr))
        })
    })

})
.catch( (err) => {
    console.log('Something else went wrong.', err)
})
