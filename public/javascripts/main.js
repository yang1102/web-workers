let worker = new Worker('javascripts/worker.js');

const input1 = document.getElementById('value1');
const input2 = document.getElementById('value2');

const addButton = document.getElementById('add');
const subButton = document.getElementById('sub');
const reqButton = document.querySelector('#req');

const result = document.querySelector('.result');

addButton.onclick = function() {
  worker.postMessage({action: 'add', value:[Number(input1.value), Number(input2.value)]});
}

subButton.onclick = function() {
  worker.postMessage({action: 'sub', value:[Number(input1.value), Number(input2.value)]});
}

reqButton.onclick = function() {
  worker.postMessage({action: 'req'});
}

worker.onmessage = function(event) {
  result.textContent = event.data;
  console.log('receive data from the worker');
}