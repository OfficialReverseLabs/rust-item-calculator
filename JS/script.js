const calculateBtn = document.getElementById('calculate-btn');
const rocketsInput = document.getElementById('rockets-input');
const hvInput = document.getElementById('hv-input');
const flamingInput = document.getElementById('flaming-input');
const c4Input = document.getElementById('c4-input');
const satchelInput = document.getElementById('satchel-input');

calculateBtn.addEventListener('click', function() {
  const rockets = parseInt(rocketsInput.value) || 0;
  const hv = parseInt(hvInput.value) || 0;
  const flaming = parseInt(flamingInput.value) || 0;
  const c4 = parseInt(c4Input.value) || 0;
  const satchel = parseInt(satchelInput.value) || 0;

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

  const rocketsSulfurOutput = rockets * 1400;
  const rocketsCharcoalOutput = rockets * 1950;
  const rocketsMetalFragsOutput = rockets * 100;
  const rocketsMetalPipesOutput = rockets * 2;

  const hvSulfurOutput = hv * 1500;
  const hvCharcoalOutput = hv * 2100;
  const hvMetalFragsOutput = hv * 100;
  const hvMetalPipesOutput = hv * 2;

  const flamingSulfurOutput = flaming * 610;
  const flamingCharcoalOutput = flaming * 900;
  const flamingMetalFragsOutput = flaming * 10;
  const flamingMetalPipesOutput = flaming * 2;

  const c4SulfurOutput = c4 * 2200;
  const c4CharcoalOutput = c4 * 3000;
  const c4MetalFragsOutput = c4 * 200;
  const c4ClothOutput = c4 * 5;
  const c4TechTrashOutput = c4 * 2;

  const satchelSulfurOutput = satchel * 480;
  const satchelCharcoalOutput = satchel * 720;
  const satchelMetalFragsOutput = satchel * 80;
  const satchelClothOutput = satchel * 10;
  const satchelRopeOutput = satchel * 1;

  document.getElementById('rockets-sulfur-output').textContent = rocketsSulfurOutput;
  document.getElementById('rockets-charcoal-output').textContent = rocketsCharcoalOutput;
  document.getElementById('rockets-metal-frags-output').textContent = rocketsMetalFragsOutput;
  document.getElementById('rockets-metal-pipes-output').textContent = rocketsMetalPipesOutput;

  document.getElementById('hv-sulfur-output').textContent = hvSulfurOutput;
  document.getElementById('hv-charcoal-output').textContent = hvCharcoalOutput;
  document.getElementById('hv-metal-frags-output').textContent = hvMetalFragsOutput;
  document.getElementById('hv-metal-pipes-output').textContent = hvMetalPipesOutput;

  document.getElementById('flaming-sulfur-output').textContent = flamingSulfurOutput;
  document.getElementById('flaming-charcoal-output').textContent = flamingCharcoalOutput;
  document.getElementById('flaming-metal-frags-output').textContent = flamingMetalFragsOutput;
  document.getElementById('flaming-metal-pipes-output').textContent = flamingMetalPipesOutput;

  document.getElementById('c4-sulfur-output').textContent = c4SulfurOutput;
  document.getElementById('c4-charcoal-output').textContent = c4CharcoalOutput;
  document.getElementById('c4-metal-frags-output').textContent = c4MetalFragsOutput;
  document.getElementById('c4-cloth-output').textContent = c4ClothOutput;
  document.getElementById('c4-tech-trash-output').textContent = c4TechTrashOutput;

  document.getElementById('satchel-sulfur-output').textContent = satchelSulfurOutput;
  document.getElementById('satchel-charcoal-output').textContent = satchelCharcoalOutput;
  document.getElementById('satchel-metal-frags-output').textContent = satchelMetalFragsOutput;
  document.getElementById('satchel-cloth-output').textContent = satchelClothOutput;
  document.getElementById('satchel-rope-output').textContent = satchelRopeOutput;
});
