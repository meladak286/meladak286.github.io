fetch('skills.json')
  .then(response => response.json())
  .then(data => {
    // Step 2: Parse JSON data
    // Step 3: Iterate over keys and values
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        // Step 4: Find HTML element with corresponding ID
        const element = document.getElementById(key);
        if (element) {
          // Step 5: Change the width of the HTML element
          element.style.width = value;
        } else {
          console.error(`Element with ID '${key}' not found.`);
        }
      }
    }
  })
  .catch(error => console.error('Error loading JSON file:', error));
