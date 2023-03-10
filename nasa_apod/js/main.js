const config = {
    NASA_API_KEY: 'yJwx3NLHdwWnIxvVXHSp7bUyXidnqanuiHaLIeYC'
}

const title = document.querySelector("#title")
const date = document.querySelector("#date")
const picture = document.querySelector("#picture");
const explanation = document.querySelector('#explanation')

const url = "https://api.nasa.gov/planetary/apod?api_key=";
const api_key = config.NASA_API_KEY

const fetchNASAData = async () => {
    const result = await fetch(`${url}${api_key}`)
    const data = await result.json();
    displayData(data)
}

fetchNASAData()

function displayData(data) {
    const { title: TITLE, date: DATE, explanation: EXP, hdurl: IMG } = data;
    title.textContent = TITLE;
    date.textContent = DATE;
    picture.src = IMG;
    explanation.textContent = EXP;
}
