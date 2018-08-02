
onmessage = function(event) {
  const data = event.data;
  switch(data.action) {
    case 'add': {
      postMessage(data.value.reduce((initial, value) => initial + value));
      break;
    };
    case 'sub': {
      postMessage(data.value.reduce((initial, value) => initial - value));
      console.log('get data');
      break;
    };
    case 'req': {
      const request = new XMLHttpRequest();
      request.addEventListener('load', function() {
        const value = JSON.parse(this.response);
        postMessage(value.message);
      });

      request.open('GET', '/data');
      request.send();
      break;
    };
    default: {
      postMessage('invalid data');
      console.log('invalid data');
    }
  }
}