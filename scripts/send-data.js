function fetchData() {
  const title = document.querySelector('title').innerText;
  const url = window.location.href;

  return {
    title: title,
    url: url
  }
}

function sendData(data) {
  const url = 'https://airbnb-mbbx7tp3.herokuapp.com/';
  fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "author": "Le Wagon chrome extension",
      "content": `I've found something cool: ${data.title} on ${data.url}`
    })
  })
}

sendData(fetchData());
