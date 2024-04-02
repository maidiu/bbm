window.alert = function(message) {
    document.getElementById('custom-alert').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('custom-alert').innerHTML = '<p>' + message + '</p><button onclick="closeAlert()">Close</button>';
  };

  console.log('dingus')