  const poemDiv = document.querySelector('#poem');
  const poemTitle = document.querySelector('#title');
  const imageCollection = document.querySelector('#imageCollection');
  const pexelSearch = "poem";

  function createRandomPoem (poemText, i) {
    const sentence = poemText.split('\n');
    let poemContent = document.createElement('div');
    // console.log(i);
    poemContent.innerHTML += `${sentence[i]} \n`;
    poemContent.innerHTML += ` ${sentence[i+1]}`;
    poemContent.innerHTML += ` ${sentence[i+2]}`;
    poemContent.style.display = 'block';
    poemDiv.appendChild(poemContent);
  }

  function createRandomTitle (title, i) {
    const separateWords = title.split(' ');
    let titleContent = document.createElement('div');
    if (i == 0) {
      titleContent.innerHTML += `${separateWords[0]} `;
    }
    if (i == 1) {
      console.log(`${separateWords[0]}`);
      word = `${separateWords[0]}`;
    }
    else {
      if (separateWords[0] == 'The') {
        titleContent.innerHTML += ` ${separateWords[1]} `;
      }
      else {
        titleContent.innerHTML += ` ${separateWords[0]} `;
      }
    }
    console.log(poemTitle);
    poemTitle.appendChild(titleContent);
  }

  function drawImage (url, i) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const x = Math.cos(i * 0.5) * 400 + (w / 2);
    const y = Math.sin(i * 0.5) * 400 + (h / 2);
    const img = document.createElement('img');
    img.style.borderRadius = '50%';
    img.style.width = '100px';
    img.style.height = '100px';
    img.style.position = 'absolute';
    img.style.top = `${y - 30}px`;
  	img.style.left = `${x - 30}px`;
    img.src = url;
    imageCollection.appendChild(img);
  }

  fetch(`https://api.pexels.com/v1/search?query=${pexelSearch}`,{
      headers: {
        Authorization: "563492ad6f917000010000016031626409644f6bbaab6a914e7b0433"
      }
    })
   .then(resp => {
     return resp.json()
    })
   .then(data => {
     for (let i = 0; i < data.photos.length; i++) {
       // console.log(data.photos[i].src.original);
       drawImage(data.photos[i].src.original, i);
     }
    })

	async function getPoem () {
    const res = await window.fetch('https://www.poemist.com/api/v1/randompoems');
    const data = await res.json();
    // console.log(data);
    data.forEach((o,i) => createRandomTitle(o.title, i));
    data.forEach((o, i) => createRandomPoem(o.content, i));
  }

  getPoem();
