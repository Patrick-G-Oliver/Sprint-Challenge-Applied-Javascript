// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function headerMaker() {
    // Elements:
    const headerDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const titularH1 = document.createElement('h1');
    const tempSpan = document.createElement('span');
    // Classes:
    headerDiv.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');
    // Content:
    dateSpan.textContent = 'MARCH 28, 2019';
    titularH1.textContent = 'Lambda Times';
    tempSpan.textContent = '98°';
    // Structure
    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(titularH1);
    headerDiv.appendChild(tempSpan);

    return headerDiv;
}

const headerContainerDiv = document.querySelector('.header-container');

headerContainerDiv.appendChild(headerMaker());
