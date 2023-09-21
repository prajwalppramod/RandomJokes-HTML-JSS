function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Fetch the JSON data from jokes.json
fetch('jokes.json')
  .then(response => response.json())
  .then(data => {
    const randomNumber = getRandomNumber(1, 30);
    document.getElementById("joke").innerHTML = data[randomNumber].joke
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });
