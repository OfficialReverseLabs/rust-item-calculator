// style-switcher.js

// Function to switch to the new style
function switchToNewStyle() {
    const oldStyle = document.getElementById('old-style');
    const newStyle = document.getElementById('new-style');
    
    oldStyle.disabled = true; // Disable the old style
    newStyle.disabled = false; // Enable the new style
  }
  
  // Function to switch to the old style
  function switchToOldStyle() {
    const oldStyle = document.getElementById('old-style');
    const newStyle = document.getElementById('new-style');
    
    oldStyle.disabled = false; // Enable the old style
    newStyle.disabled = true; // Disable the new style
  }
  