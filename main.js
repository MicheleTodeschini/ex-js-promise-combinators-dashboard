console.log('funzia');

let data = []

async function getPaese(query) {
    const paeseResponse = await fetch(`http://localhost:3333/destinations?search=${query}`)
    const paese = await paeseResponse.json()
    return [paese[0].name, paese[0].country]


}

async function getMeteo(query) {
    const meteoResponse = await fetch(`http://localhost:3333/weathers?search=${query}`)
    const meteo = await meteoResponse.json()
    console.log(meteo);

    return [meteo[0].temperature, meteo[0].weather_description]
}

async function getAereoporto(query) {
    const aereoportoResponse = await fetch(`http://localhost:3333/airports?search=${query}`)
    const aereoporto = await aereoportoResponse.json()
    return aereoporto[0].name
}

(async () => {
    try {
        const promise1 = getPaese('london')
        const promise2 = getMeteo('london')
        const promise3 = getAereoporto('london')
        const info = await Promise.all([promise1, promise2, promise3])
        console.log(info);
        console.log(`A ${info[0]}`);

    } catch (error) {
        console.error('errore', error)
    }
})() 