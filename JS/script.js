document.getElementById('calculate-btn').addEventListener('click', function() {
    var rockets = parseInt(document.getElementById('rockets-input').value) || 0;
    var hv = parseInt(document.getElementById('hv-input').value) || 0;
    var flaming = parseInt(document.getElementById('flaming-input').value) || 0;
    var c4 = parseInt(document.getElementById('c4-input').value) || 0;
    var satchel = parseInt(document.getElementById('satchel-input').value) || 0;
  
    // Reset outputs
    document.querySelectorAll('.output').forEach(function(output) {
      output.textContent = '';
    });
  
    if (rockets === 0 && hv === 0 && flaming === 0 && c4 === 0 && satchel === 0) {
      alert('Please enter a quantity for at least one item.');
      return;
    }
  
    if (rockets < 0 || hv < 0 || flaming < 0 || c4 < 0 || satchel < 0) {
      alert('Invalid input. Quantity cannot be negative.');
      return;
    }
  
    document.getElementById('rockets-sulfur-output').textContent = rockets * 1400;
    document.getElementById('rockets-charcoal-output').textContent = rockets * 1950;
    document.getElementById('rockets-metal-frags-output').textContent = rockets * 100;
    document.getElementById('rockets-metal-pipes-output').textContent = rockets * 2;
  
    document.getElementById('hv-sulfur-output').textContent = hv * 1500;
    document.getElementById('hv-charcoal-output').textContent = hv * 2100;
    document.getElementById('hv-metal-frags-output').textContent = hv * 100;
    document.getElementById('hv-metal-pipes-output').textContent = hv * 2;
  
    document.getElementById('flaming-sulfur-output').textContent = flaming * 610;
    document.getElementById('flaming-charcoal-output').textContent = flaming * 900;
    document.getElementById('flaming-metal-frags-output').textContent = flaming * 10;
    document.getElementById('flaming-metal-pipes-output').textContent = flaming * 2;
    
    document.getElementById('c4-sulfur-output').textContent = c4 * 2200;
    document.getElementById('c4-charcoal-output').textContent = c4 * 3000;
    document.getElementById('c4-metal-frags-output').textContent = c4 * 200;
    document.getElementById('c4-cloth-output').textContent = c4 * 5;
    document.getElementById('c4-tech-trash-output').textContent = c4 * 2;
  
    document.getElementById('satchel-sulfur-output').textContent = satchel * 480;
    document.getElementById('satchel-charcoal-output').textContent = satchel * 720;
    document.getElementById('satchel-metal-frags-output').textContent = satchel * 80;
    document.getElementById('satchel-cloth-output').textContent = satchel * 10;
    document.getElementById('satchel-rope-output').textContent = satchel * 1;
  });
  