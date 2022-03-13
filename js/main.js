  const poemDiv = document.querySelector('#poem');

  function createRandomPoem (poemText, i) {
    const text = new Text();
    const sentence = poemText.split('\n');
    console.log(sentence);
    // const poemSelectorNumber = Math.floor(Math.random()*5);
    for (let i = 0; i <= sentence.length; i++) {
      let poemContent = document.createTextNode(sentence);
      poemDiv.appendChild(poemContent);
    }
  }

	async function getPoem () {
    const res = await window.fetch('https://www.poemist.com/api/v1/randompoems');
    const data = await res.json();
    data.forEach((o, i) => createRandomPoem(o.content, i));
  }

//Google Image API surrounding poem? Tone.js for music
  getPoem();
