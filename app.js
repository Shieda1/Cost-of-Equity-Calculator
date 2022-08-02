// https://calculator.swiftutors.com/cost-of-equity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const costofEquityRadio = document.getElementById('costofEquityRadio');
const nextYearsDividendsperShareRadio = document.getElementById('nextYearsDividendsperShareRadio');
const currentMarketValueofStockRadio = document.getElementById('currentMarketValueofStockRadio');
const growthRateofDividendsRadio = document.getElementById('growthRateofDividendsRadio');

let costofEquity;
let nextYearsDividendsperShare = v1;
let currentMarketValueofStock = v2;
let growthRateofDividends = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

costofEquityRadio.addEventListener('click', function() {
  variable1.textContent = 'Next Year\'s Dividends per Share ($)';
  variable2.textContent = 'Current Market Value of Stock ($)';
  variable3.textContent = 'Growth Rate of Dividends';
  nextYearsDividendsperShare = v1;
  currentMarketValueofStock = v2;
  growthRateofDividends = v3;
  result.textContent = '';
});

nextYearsDividendsperShareRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of Equity';
  variable2.textContent = 'Current Market Value of Stock ($)';
  variable3.textContent = 'Growth Rate of Dividends';
  costofEquity = v1;
  currentMarketValueofStock = v2;
  growthRateofDividends = v3;
  result.textContent = '';
});

currentMarketValueofStockRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of Equity';
  variable2.textContent = 'Next Year\'s Dividends per Share ($)';
  variable3.textContent = 'Growth Rate of Dividends';
  costofEquity = v1;
  nextYearsDividendsperShare = v2;
  growthRateofDividends = v3;
  result.textContent = '';
});

growthRateofDividendsRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of Equity';
  variable2.textContent = 'Next Year\'s Dividends per Share ($)';
  variable3.textContent = 'Current Market Value of Stock ($)';
  costofEquity = v1;
  nextYearsDividendsperShare = v2;
  currentMarketValueofStock = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(costofEquityRadio.checked)
    result.textContent = `Cost of Equity = ${computeCostofEquity().toFixed(2)} %`;

  else if(nextYearsDividendsperShareRadio.checked)
    result.textContent = `Next Year's Dividends per Share = ${computeNextYearsDividendsperShare().toFixed(2)} $`;

  else if(currentMarketValueofStockRadio.checked)
    result.textContent = `Current Market Value of Stock = ${computeCurrentMarketValueofStock().toFixed(2)} $`;

  else if(growthRateofDividendsRadio.checked)
    result.textContent = `Growth Rate of Dividends = ${computeGrowthRateofDividends().toFixed(2)} %`;
})

// calculation

function computeCostofEquity() {
  return ((Number(nextYearsDividendsperShare.value) / Number(currentMarketValueofStock.value)) + (Number(growthRateofDividends.value) / 100)) * 100;
}

function computeNextYearsDividendsperShare() {
  return ((Number(costofEquity.value) / 100) - (Number(growthRateofDividends.value) / 100)) * Number(currentMarketValueofStock.value);
}

function computeCurrentMarketValueofStock() {
  return Number(nextYearsDividendsperShare.value) / ((Number(costofEquity.value) / 100) - (Number(growthRateofDividends.value) / 100));
}

function computeGrowthRateofDividends() {
  return ((Number(costofEquity.value) / 100) - (Number(nextYearsDividendsperShare.value) / Number(currentMarketValueofStock.value))) * 100;
}