const animateSpinner = (iterations, delay) => {
  const spinner = ['|', '/', '-', '\\'];
  let index = 0;

  const printSpinner = () => {
    process.stdout.write(`\r${spinner[index]}   `);

    index = (index + 1) % spinner.length;

    if (iterations > 0) {
      iterations--;

      // Schedule the next animation frame
      setTimeout(printSpinner, delay);
    }
  };

  // Start the animation
  printSpinner();
};

// Example usage
animateSpinner(8, 200);