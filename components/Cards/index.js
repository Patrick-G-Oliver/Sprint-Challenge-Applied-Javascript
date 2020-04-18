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
    // problem: The arrays are within an object.
    // And that object contains key / value pairs whose values are arrays of objects.
    // Those objects are the target items to be passed to the cardMaker function.
    console.log(Object.values(response.data.articles));
    // solution (part 1): Use Object.values to circumvent the object and get to the arrays 
    // containing the target objects. Store the resultant array in dataObjArrays.
    const dataObjArrays = Object.values(response.data.articles)
    // solution (part 2): Iterate through the array of target objects...
    dataObjArrays.forEach( (dataArr) => {
        // solution (part 2) (continued): ...and iterate over those objects
        // simultaneously passing them to the cardMaker function and appending the returned  
        // cardDiv(s) to the cardsContainerDiv to add them to the DOM (i.e. get them on screen). 
        dataArr.forEach( (cardArr) => {
            cardsContainerDiv.appendChild(cardMaker(cardArr))
        })
    })

})
.catch( (err) => {
    console.log('Something else went wrong.', err)
})

