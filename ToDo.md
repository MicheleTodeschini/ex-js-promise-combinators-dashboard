# Esercizio: Dashboard Data con Promise.all()

In questo esercizio utilizzerai **Promise.all()** per creare la funzione `getDashboardData(query)`, che recupera **più dati in parallelo** da diverse API e restituisce un oggetto con i risultati aggregati.

---

## Obiettivo

La funzione `getDashboardData(query)` deve accettare **una città come input** e recuperare simultaneamente:

### 1. Informazioni sulla destinazione

Endpoint:
/destinations?search=[query]


Dati da estrarre:

- `result.name` → proprietà `city`
- `result.country` → proprietà `country`

---

### 2. Meteo attuale

Endpoint:
/weathers?search={query}


Dati da estrarre:

- `result.temperature` → proprietà `temperature`
- `result.weather_description` → proprietà `weather`

---

### 3. Aeroporto principale

Endpoint:
/airports?search={query}


Dati da estrarre:

- `result.name` → proprietà `airport`

---

## Requisiti della funzione

La funzione `getDashboardData(query)` deve:

- Essere **asincrona** (`async`)
- Utilizzare **Promise.all()** per eseguire le richieste **in parallelo**
- Restituire una **Promise** che risolve con un **oggetto contenente i dati aggregati**
- Stampare i dati nella console con **un messaggio ben formattato**

---

## Struttura dell’oggetto restituito

La funzione deve restituire un oggetto con questa struttura:

```javascript
{
  city: "City Name",
  country: "Country",
  temperature: "Temperature value",
  weather: "Weather description",
  airport: "Airport name"
}

Testa la funzione utilizzando la query:
getDashboardData("london")

Esempio di output in console
City: London, UK
Temperature: 18°C
Weather: Cloudy
Main Airport: Heathrow Airport