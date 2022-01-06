// Database of links
const db = {
  cute: ['https://i.ibb.co/8DWdgC1/Simone.jpg', 'https://i.ibb.co/3cP3vXZ/Pussy.jpg', 'https://media.giphy.com/media/5Yl2dLAzUDoEEy9zXu/giphy.gif', 'https://media.giphy.com/media/12wUXjm6f8Hhcc/giphy.gif', 'https://media.giphy.com/media/kudIERso2pFiE/giphy.gif', 'https://media.giphy.com/media/QFgGO4Yr52R9u/giphy.gif', 'https://media.giphy.com/media/Y4pAQv58ETJgRwoLxj/giphy-downsized-large.gif', 'https://media.giphy.com/media/2xPJm26Rf1EMBTykwG/giphy-downsized-large.gif', 'https://media.giphy.com/media/jKh4NVg2i2eXK/giphy-downsized-large.gif', 'https://worldwideinterweb.com/wp-content/uploads/2017/10/cutest-picture-ever.jpg', 'https://img2.thejournal.ie/inline/1587176/original/?width=330&version=1587176', 'https://img2.thejournal.ie/inline/1587247/original/?width=400&version=1587247'],
  cringe: ['https://img.buzzfeed.com/buzzfeed-static/static/2018-03/14/14/asset/buzzfeed-prod-web-04/sub-buzz-8857-1521052958-4.png?crop=790:696;0,295&downsize=600:*&output-format=auto&output-quality=auto', 'https://media.giphy.com/media/yEZjzglgjrMUo/giphy.gif', 'https://media.giphy.com/media/yEZjzglgjrMUo/giphy.gif', 'https://img.buzzfeed.com/buzzfeed-static/static/2020-05/7/17/asset/d1c89b64332e/sub-buzz-464-1588871586-1.png', 'https://img.buzzfeed.com/buzzfeed-static/static/2020-05/7/19/asset/bee5d7b50627/sub-buzz-177-1588878522-8.png', 'https://img.buzzfeed.com/buzzfeed-static/static/2020-05/7/20/asset/0ad75dc9d6f7/sub-buzz-1240-1588883758-18.png', 'https://media.giphy.com/media/26BRrLIAO89O5kqNa/giphy.gif', 'https://uberhumor.com/wp-content/uploads/2020/04/you-know-nothing-about-having-a-bad-day-photos-1.jpg', 'https://img.buzzfeed.com/buzzfeed-static/static/2020-05/7/17/asset/d1c89b64332e/sub-buzz-464-1588871586-1.png', 'https://godlycreature.com/wp-content/uploads/2021/03/2-4.jpg', 'https://www.boredpanda.com/blog/wp-content/uploads/2018/01/5a65d8813653f_lgP7rvk__605.jpg', 'https://www.boredpanda.com/blog/wp-content/uploads/2018/01/people-having-bad-day-well-shit-351-5a674ae5012cd__605.gif', 'https://static.boredpanda.com/blog/wp-content/uploads/2016/08/people-having-bad-day-well-shit-32-57bffa20803c5__605.jpg', 'https://static.boredpanda.com/blog/wp-content/uploads/2016/08/people-having-bad-day-well-shit-66-57bffa6e81f50__605.jpg', 'https://static.boredpanda.com/blog/wp-content/uploads/2018/01/people-having-bad-day-well-shit-402-5a6eefb49f6f5__605.jpg', 'https://static.boredpanda.com/blog/wp-content/uploads/2018/01/5a6c84e0c4345_AasNGNu__605.jpg', 'https://www.buzzfeed.com/erinchack/gifs-guaranteed-to-make-you-laugh-every-time?utm_source=dynamic&utm_campaign=bfsharecopy&sub=0_4715653#4715653'],
  lol: ["https://www.rover.com/blog/wp-content/uploads/2019/09/pit-bull-plays-dead-to-avoid-nail-trim-960x540.jpg", 'https://i.ytimg.com/vi/_iTxAFrOL10/maxresdefault.jpg', 'https://media.giphy.com/media/3o7Zez01HKXvaLXiHS/giphy.gif', 'https://media.giphy.com/media/SggILpMXO7Xt6/giphy.gif', 'https://i.ibb.co/X7JrgJg/Naboo.jpg', 'https://media.giphy.com/media/jsIa0hyKnzhQRDYObr/giphy-downsized-large.gif', 'https://media.giphy.com/media/10A06pOVcpo6hW/giphy.gif', 'https://img.buzzfeed.com/buzzfeed-static/static/2020-05/7/18/asset/6e71fe312ae9/sub-buzz-850-1588877880-8.png', 'https://funnyordie.com/wp-content/uploads/2021/10/XSJAgRcSDWxIXlDFmMzU_Door_Tape_Fail.0.gif', 'https://www.buzzfeed.com/erinchack/gifs-guaranteed-to-make-you-laugh-every-time?utm_source=dynamic&utm_campaign=bfsharecopy&sub=0_4717353#4717353', 'https://www.buzzfeed.com/erinchack/gifs-guaranteed-to-make-you-laugh-every-time?utm_source=dynamic&utm_campaign=bfsharecopy&sub=0_4717392#4717392', 'https://www.buzzfeed.com/erinchack/gifs-guaranteed-to-make-you-laugh-every-time?utm_source=dynamic&utm_campaign=bfsharecopy&sub=0_4717464#4717464', 'https://www.buzzfeed.com/erinchack/gifs-guaranteed-to-make-you-laugh-every-time?utm_source=dynamic&utm_campaign=bfsharecopy&sub=0_4717708#4717708', 'https://img2.thejournal.ie/inline/1587241/original/?width=280&version=1587241', 'https://img2.thejournal.ie/inline/1587198/original/?width=480&version=1587198' ]
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

