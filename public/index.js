function getColor(stock) {
    if (stock === "GME") {
        return 'rgba(61, 161, 61, 0.7)'
    }
    if (stock === "MSFT") {
        return 'rgba(209, 4, 25, 0.7)'
    }
    if (stock === "DIS") {
        return 'rgba(18, 4, 209, 0.7)'
    }
    if (stock === "BNTX") {
        return 'rgba(166, 43, 158, 0.7)'
    }
}

async function main() {

    const timeChartCanvas = document.querySelector('#time-chart')
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart')
    const averagePriceChartCanvas = document.querySelector('#average-price-chart')
    const api_url = "https://api.twelvedata.com/time_series?symbol=GME,AMC,AAPL,ALF&interval=1min&apikey=b191a421d6e6468ab03e1c1bedbb82f1"
    const response = await fetch(api_url)
    const data = await response.json()
    const { GME, AMC, AAPL, ALF } = data
    const stocks = [GME, AMC, AAPL, ALF]

    // console.log(data)
    stocks.forEach(stock => stock.values)

    // Time Chart
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.reverse().map(value => value.datetime),
            datasets: stocks.map(stock => ({
                label: stock.meta.symbol,
                data: stock.values.map(value => parseFloat(value.high)),
                backgroundColor: getColor(stock.meta.symbol),
                borderColor: getColor(stock.meta.symbol),
            }))
        }
    });








}

main()