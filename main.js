console.log('funzia');

let data = []

async function getPaese(query) {
    const paeseResponse = await fetch(`http://localhost:3333/destinations?search=${query}`)
    const paese = await paeseResponse.json()
    return {
        name: paese[0].name,
        country: paese[0].country
    }
}

async function getMeteo(query) {
    const meteoResponse = await fetch(`http://localhost:3333/weathers?search=${query}`)
    const meteo = await meteoResponse.json()
    console.log(meteo);

    return {
        temperature: meteo[0].temperature,
        weather_description: meteo[0].weather_description
    }
}

async function getAereoporto(query) {
    const aereoportoResponse = await fetch(`http://localhost:3333/airports?search=${query}`)
    const aereoporto = await aereoportoResponse.json()
    return {
        aereoporto_name: aereoporto[0].name
    }
}

(async () => {
    try {
        const promise1 = getPaese('london')
        const promise2 = getMeteo('london')
        const promise3 = getAereoporto('london')
        const info = await Promise.all([promise1, promise2, promise3])
        console.log(info);
        console.log(`The city of ${info[0].name} is in the ${info[0].country}. Today there are ${info[1].temperature} and the weather is ${info[1].weather_description}. The nearest airport to the city is the ${info[2].aereoporto_name}`);

    } catch (error) {
        console.error('errore', error)
    }
})

/* async function fetchJson(url) {
    const response = await fetch(url)
    const obj = await response.json()
    return obj
}

async function getDashboardData(query) {
    console.log(`Tra qualche secondo riceverai informazioni per la city ${query}`);

    const destinationPromise = fetchJson(`http://localhost:3333/weathers?search=${query}`)
    const weatherPromise = fetchJson(`http://localhost:3333/weathers?search=${query}`)
    const airportPromise = fetchJson(`http://localhost:3333/weathers?search=${query}`)


    const promises = [destinationPromise, weatherPromise, airportPromise]
    const [destinations, weathers, airports] = await Promise.all(promises)

    return {
        city: destinations[0].name,
        country: destinations[0].country,
        temperature: weathers[0].temperature,
        weather: weathers[0].weather_description,
        airport: airports[0].name,
    }
}

getDashboardData('london') */