let cashTips = 0
let chargeTips = 0
let barCash = 0
let barTips = 0
let barTotal = 0
let tipsTotal = 0
let chargeSales = 0

let netSales = parseFloat(prompt('Digite o valor do NetSales: '))
let cashDue = parseFloat(prompt('Digite o valor do CashDue (Sera cobrado apenas 11% do valor total): '))

let cashDueDeclaracao = 0.11*Math.round(cashDue)
let cashSales = Math.round(cashDue)/1.07

var employersQ = prompt('Digite a quantidade de Foodrunners: ')
while (employersQ != 1 && employersQ != 2) {
    alert('Apenas 1 ou 2')
    var employersQ = prompt('Digite a quantidade de Foodrunners: ')
}

if (employersQ == 1) {
    cashTips = 0.10*cashDueDeclaracao
    chargeTips = 0.10* netSales
    barCash = 0.90*cashDueDeclaracao
    barTips = netSales - chargeTips
    barTotal = barCash + barTips
    tipsTotal = chargeTips + cashTips + barTotal
    chargeSales = netSales - cashTips
    alert(`\nCash Sales: ${cashSales.toFixed(2)}\nCharge Sales: ${netSales.toFixed(2)}\nCash Tips Foodrunner: ${cashTips.toFixed(2)}\nCash Tips Bar: ${barCash.toFixed(2)}\nCharge Tips Foodrunner: ${chargeTips.toFixed(2)}\nCharge Tips Bar: ${barTips.toFixed(2)}\nCash Due: ${cashDue.toFixed(2)}\nCash Enclosed: ${Math.round(cashDue).toFixed(2)}\nTotal Tips: ${tipsTotal.toFixed(2)}\n`)
}

if (employersQ == 2) {
    cashTips = 0.075*cashDueDeclaracao
    chargeTips = 0.075* netSales
    barCash = 0.85*cashDueDeclaracao
    barTips = netSales - chargeTips
    barTotal = barCash + barTips
    tipsTotal = chargeTips + cashTips + barTotal
    chargeSales = netSales - cashTips
    alert(`\nCash Sales: ${cashSales.toFixed(2)}\nCharge Sales: ${netSales.toFixed(2)}\nCash Tips Foodrunner: ${cashTips.toFixed(2)}\nCash Tips Bar: ${barCash.toFixed(2)}\nCharge Tips Foodrunner: ${chargeTips.toFixed(2)}\nCharge Tips Bar: ${barTips.toFixed(2)}\nCash Due: ${cashDue.toFixed(2)}\nCash Enclosed: ${Math.round(cashDue).toFixed(2)}\nTotal Tips: ${tipsTotal.toFixed(2)}\n`)
}

