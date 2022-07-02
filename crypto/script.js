


//------------------------
fetch('https://api.coinbase.com/v2/prices/BTC-USD/spot').then(function(response) { 
  // Convert to JSON
  return response.json();
}).then(function(data) {
  
var price = data.data.amount;

var nf = new Intl.NumberFormat();

//Display the Bitcoin price
  
document.getElementById('BTC-USD').textContent = '$' + nf.format(price)
;


});
//--------------eth
fetch('https://api.coinbase.com/v2/prices/ETH-USD/spot').then(function(response) { 
  // Convert to JSON
  return response.json();
}).then(function(data) {
  
var price = data.data.amount;

var nf = new Intl.NumberFormat();

//Display the Bitcoin price
  
document.getElementById('ETH-USD').textContent = '$' + nf.format(price)
;


});
//=========shib
fetch('https://api.coinbase.com/v2/prices/SOL-USD/spot').then(function(response) { 
  // Convert to JSON
  return response.json();
}).then(function(data) {
  
var price = data.data.amount;

var nf = new Intl.NumberFormat();

//Display the Bitcoin price
  
document.getElementById('SOL-USD').textContent = '$' + nf.format(price)
;


});
//===========
fetch('https://api.coinbase.com/v2/prices/DOGE-USD/spot').then(function(response) { 
  // Convert to JSON
  return response.json();
}).then(function(data) {
  
var price = data.data.amount;

var nf = new Intl.NumberFormat();

//Display the Bitcoin price
  
document.getElementById('DOGE-USD').textContent = '$' + nf.format(price)
;


});