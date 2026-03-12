console.log('funzia');

async function getPaese(query) {
    const paeseResponse = await fetch(`http://localhost:3333/destinations?search=${query}`)
    const paese = await paeseResponse.json()

    return paese.name, paese.country

}

async function getMeteo(query) {
    const meteoResponse = await fetch(`http://localhost:3333/weathers?search=${query}`)
    const meteo = await meteoResponse.json()
    return meteo.temperature, meteo.weather_description
}

async function getAereoporto(query) {
    const aereoportoResponse = await fetch(`http://localhost:3333/airports?search=${query}`)
    const aereoporto = await aereoportoResponse.json()
    return aereoporto.name
}

(async () => {
    try {
        const promise1 = getPaese('london')
        const promise2 = getMeteo('london')
        const promise3 = getAereoporto('london')
        const info = await Promise.all([promise1, promise2, promise3])
        console.log(info);

    } catch (error) {
        console.error('errore', error)
    }
})() 