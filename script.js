let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let price_element = document.getElementById('price');
let last_price = null;

ws.onmessage = (event) => {
  let crypto_object = JSON.parse(event.data);
  let current_price = parseFloat(crypto_object.p).toFixed(2);
  price_element.innerText = current_price;
  price_element.style.color = !last_price || last_price === current_price ? 'black' : current_price > last_price ? 'green' : 'red';
  last_price = current_price;
}
