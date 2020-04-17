// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

//console.log(axios.get('https://lambda-times-backend.herokuapp.com/topics'));

const topicsDiv = document.querySelector('.topics');

function topicTabMaker(topic) {
    const topicTabDiv = document.createElement('div');
    topicTabDiv.classList.add('tab');
    topicTabDiv.textContent = topic;

    return topicTabDiv
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then( (response) => {

    console.log('response', response.data.topics)

    response.data.topics.forEach( (topicDatum) => {
        topicsDiv.appendChild(topicTabMaker(topicDatum))
    })
.catch(err => {
    console.log('Something went wrong.', err)
})    
});
/*
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then( (response) => {

    console.log('response', response.data)

    const responseData = Array.from(response.data);

    const topicTabs = responseData.forEach( (topicDatum) => {
        const topicTabDiv = document.createElement('div')
        topicTabDiv.classList.add('tab')
        topicTabDiv.textContent = `${topicDatum}`

        return topicTabDiv
    })

    topicsDiv.appendChild(topicTabs)
})
.catch( (err) => {
    console.log('Something went wrong.', err)
});
*/ 
