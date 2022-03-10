  const canvas = document.querySelector('#mycanvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');

  function createRandomPoem (poemText, i) {
    const text = new Text();
    const sentence = poemText.split('\n');
    console.log(sentence[3]);
  }

	async function getPoem () {
    const res = await window.fetch('https://www.poemist.com/api/v1/randompoems');
    const data = await res.json();
    //console.log(data);
    data.forEach((o, i) => createRandomPoem(o.content, i));
  }

  getPoem();
