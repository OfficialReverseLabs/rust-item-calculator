// script.js

// Calculate button click event handler
document.getElementById('calculate-btn').addEventListener('click', calculateResources);

// Style switcher button click event handler
// document.getElementById('style-switcher-btn').addEventListener('click', switchStyle);

// Calculate the required resources
function calculateResources() {
  // Retrieve the input values
  const rockets = parseInt(document.getElementById('rockets-input').value);
  const hvRockets = parseInt(document.getElementById('hv-input').value);
  const flamingRockets = parseInt(document.getElementById('flaming-input').value);
  const c4 = parseInt(document.getElementById('c4-input').value);
  const ammo = parseInt(document.getElementById('ammo-input').value);
  const satchel = parseInt(document.getElementById('satchel-input').value);

  // Calculate the resource requirements
  const rocketsSulfur = rockets * 1000;
  const rocketsCharcoal = rockets * 150;
  const rocketsMetalFrags = rockets * 2500;
  const rocketsMetalPipes = rockets * 10;

  const hvSulfur = hvRockets * 1000;
  const hvCharcoal = hvRockets * 150;
  const hvMetalFrags = hvRockets * 2000;
  const hvMetalPipes = hvRockets * 5;

  const flamingSulfur = flamingRockets * 1500;
  const flamingCharcoal = flamingRockets * 200;
  const flamingMetalFrags = flamingRockets * 2000;
  const flamingLowGrade = flamingRockets * 250;
  const flamingMetalPipes = flamingRockets * 5;

  const c4Sulfur = c4 * 2400;
  const c4Charcoal = c4 * 300;
  const c4MetalFrags = c4 * 3500;
  const c4Cloth = c4 * 50;
  const c4TechTrash = c4 * 4;

  const ammoSulfur = ammo * 75;
  const ammoCharcoal = ammo * 10;
  const ammoMetalFrags = ammo * 200;

  const satchelSulfur = satchel * 500;
  const satchelCharcoal = satchel * 100;
  const satchelMetalFrags = satchel * 3000;
  const satchelCloth = satchel * 10;
  const satchelRope = satchel * 4;

  // Update the output with the calculated values
  document.getElementById('rockets-sulfur-output').textContent = rocketsSulfur;
  document.getElementById('rockets-charcoal-output').textContent = rocketsCharcoal;
  document.getElementById('rockets-metal-frags-output').textContent = rocketsMetalFrags;
  document.getElementById('rockets-metal-pipes-output').textContent = rocketsMetalPipes;

  document.getElementById('hv-sulfur-output').textContent = hvSulfur;
  document.getElementById('hv-charcoal-output').textContent = hvCharcoal;
  document.getElementById('hv-metal-frags-output').textContent = hvMetalFrags;
  document.getElementById('hv-metal-pipes-output').textContent = hvMetalPipes;

  document.getElementById('flaming-sulfur-output').textContent = flamingSulfur;
  document.getElementById('flaming-charcoal-output').textContent = flamingCharcoal;
  document.getElementById('flaming-metal-frags-output').textContent = flamingMetalFrags;
  document.getElementById('flaming-low-grade-output').textContent = flamingLowGrade;
  document.getElementById('flaming-metal-pipes-output').textContent = flamingMetalPipes;

  document.getElementById('c4-sulfur-output').textContent = c4Sulfur;
  document.getElementById('c4-charcoal-output').textContent = c4Charcoal;
  document.getElementById('c4-metal-frags-output').textContent = c4MetalFrags;
  document.getElementById('c4-cloth-output').textContent = c4Cloth;
  document.getElementById('c4-tech-trash-output').textContent = c4TechTrash;

  document.getElementById('ammo-sulfur-output').textContent = ammoSulfur;
  document.getElementById('ammo-charcoal-output').textContent = ammoCharcoal;
  document.getElementById('ammo-metal-frags-output').textContent = ammoMetalFrags;

  document.getElementById('satchel-sulfur-output').textContent = satchelSulfur;
  document.getElementById('satchel-charcoal-output').textContent = satchelCharcoal;
  document.getElementById('satchel-metal-frags-output').textContent = satchelMetalFrags;
  document.getElementById('satchel-cloth-output').textContent = satchelCloth;
  document.getElementById('satchel-rope-output').textContent = satchelRope;
}

// Switch between styles
// function switchStyle() {
  // const oldStyle = document.getElementById('old-style');
  // const newStyle = document.getElementById('new-style');
  // const styleSwitcherBtn = document.getElementById('style-switcher-btn');

  // Check if the old style is disabled
  // if (oldStyle.disabled) {
    // oldStyle.disabled = false; // Enable the old style
    // newStyle.disabled = true; // Disable the new style
    // styleSwitcherBtn.textContent = 'New Style'; // Update the button text
  // } else {
   // oldStyle.disabled = true; // Disable the old style
    // newStyle.disabled = false; // Enable the new style
    // styleSwitcherBtn.textContent = 'Old Style'; // Update the button text
  // }
// }
