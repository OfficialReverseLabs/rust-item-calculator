const ITEM_VALUES = {
    rockets: {
      sulfur: 1400,
      charcoal: 1950,
      metalFrags: 100,
      metalPipes: 2
    },
    hv: {
      sulfur: 1500,
      charcoal: 2100,
      metalFrags: 100,
      metalPipes: 2
    },
    flaming: {
      sulfur: 610,
      charcoal: 900,
      metalFrags: 10,
      metalPipes: 2
    },
    c4: {
      sulfur: 2200,
      charcoal: 3000,
      metalFrags: 200,
      cloth: 5,
      techTrash: 2
    },
    satchel: {
      sulfur: 480,
      charcoal: 720,
      metalFrags: 80,
      cloth: 10,
      rope: 1
    }
  };
  
  document.getElementById('calculate-btn').addEventListener('click', function() {
    const rockets = parseInt(document.getElementById('rockets-input').value) || 0;
    const hv = parseInt(document.getElementById('hv-input').value) || 0;
    const flaming = parseInt(document.getElementById('flaming-input').value) || 0;
    const c4 = parseInt(document.getElementById('c4-input').value) || 0;
    const satchel = parseInt(document.getElementById('satchel-input').value) || 0;
  
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
  
    const items = ['rockets', 'hv', 'flaming', 'c4', 'satchel'];
  
    items.forEach(function(item) {
      const itemValues = ITEM_VALUES[item];
  
      document.getElementById(`${item}-sulfur-output`).textContent = rockets * itemValues.sulfur;
      document.getElementById(`${item}-charcoal-output`).textContent = rockets * itemValues.charcoal;
      document.getElementById(`${item}-metal-frags-output`).textContent = rockets * itemValues.metalFrags;
  
      if (item === 'c4') {
        document.getElementById(`${item}-cloth-output`).textContent = rockets * itemValues.cloth;
        document.getElementById(`${item}-tech-trash-output`).textContent = rockets * itemValues.techTrash;
      }
  
      if (item === 'satchel') {
        document.getElementById(`${item}-cloth-output`).textContent = rockets * itemValues.cloth;
        document.getElementById(`${item}-rope-output`).textContent = rockets * itemValues.rope;
      }
    });
  });
  