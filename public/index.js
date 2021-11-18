async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
    const api_url = "https://api.twelvedata.com/time_series?symbol=GME,BNTX,DIS,MSFT&interval=1min&apikey=b191a421d6e6468ab03e1c1bedbb82f1"

    let response = await fetch(api_url)
    let data = await response.json()
    console.log(data)
}

main()