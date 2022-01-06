// Database of links
const db = {
  cute: ['https://media.giphy.com/media/5Yl2dLAzUDoEEy9zXu/giphy.gif', 'https://media.giphy.com/media/12wUXjm6f8Hhcc/giphy.gif', 'https://media.giphy.com/media/kudIERso2pFiE/giphy.gif', 'https://media.giphy.com/media/QFgGO4Yr52R9u/giphy.gif'],
  cringe: ['https://img.buzzfeed.com/buzzfeed-static/static/2018-03/14/14/asset/buzzfeed-prod-web-04/sub-buzz-8857-1521052958-4.png?crop=790:696;0,295&downsize=600:*&output-format=auto&output-quality=auto', ],
  lol: ["https://www.rover.com/blog/wp-content/uploads/2019/09/pit-bull-plays-dead-to-avoid-nail-trim-960x540.jpg", 'https://i.ytimg.com/vi/_iTxAFrOL10/maxresdefault.jpg']
}

document.addEventListener('DOMContentLoaded', () => {
  // select buttons
  const cute = document.getElementById('cute');
  const cringe = document.getElementById('cringe');
  const lol = document.getElementById('lol');

  // add event listeners for button clicks, passing in openTab function
  cute.addEventListener('click', () => openTab('cute'));
  cringe.addEventListener('click', () => openTab('cringe'));
  lol.addEventListener('click', () => openTab('lol'));
  
  function openTab(category) {
    // generate random number with max length of category array in link object
    const rIndex = Math.floor(Math.random() * db[category].length);
    // opens specified link from db[key] in new tab
    chrome.tabs.create({active: true, url: String(db[category][rIndex])});
  }
});

