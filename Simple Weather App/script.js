const inputCity = document.getElementById('inputCity');
const getWeather = document.querySelector('form')//button
const weatherData = document.getElementById('section');

const apikey = '50ab2ef2bf78a518c3c5eab9d7611285';

getWeather.addEventListener('submit', async event => {
    event.preventDefault();

    const city = inputCity.value;
    
    if(city){
        try {
                const display = await weather(city);
                displayData(display);
            
        } catch (error) {
            console.log(error)
        }
    }else{
        throw new Error("Invalid city")
    }
   

    
})

async function weather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)

    try {
        if(!response.ok){
            alert('Could not fetch data')
            weatherData.innerHTML = ''
            inputCity.value = ''
        }
        return await response.json();
    }catch (error) {
      
    }
}

function displayData(data)  {
    
    weatherData.innerHTML = '';
    console.log(data)

    const { name: city,
            main: {feels_like, humidity, temp},
            weather: [{description, icon}],
            wind: {deg, speed}
    } = data;

    const center = document.createElement('div')
    center.className = 'center'
    const img = document.createElement('img')
    img.src = `https://openweathermap.org/img/wn/${icon}.png`;

    const span = document.createElement('span')
    span.innerHTML = `${temp}°C`

    const p = document.createElement('p')
    p.innerHTML = description

    const h2 = document.createElement('h2');
    h2.className = 'h2'
    h2.innerHTML = city

    center.appendChild(h2)
    center.append(img);
    center.append(span);
    center.append(p)

    weatherData.append(center)

    const footer = document.createElement('div')
    footer.className = 'footer'

    const box = document.createElement('div')
    box.className = 'box'
    box.innerHTML = `Feels like: ${feels_like}`

    const box1 = document.createElement('div')
    box1.className = 'box1'
    box1.innerHTML = `Humidity: ${humidity}`

    const box2 = document.createElement('div')
    box2.className = 'box2'
    box2.innerHTML = `Wind speed: ${deg}/${speed}`

    footer.append(box)
    footer.append(box1)
    footer.append(box2)
    weatherData.append(footer)
}