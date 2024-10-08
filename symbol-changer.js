// Function to initialize the grid
function initializeGrid() {
  const cells = document.querySelectorAll("td");
  cells.forEach((cell) => {
    if (cell.classList.contains("positive")) {
      cell.dataset.type = "positive";
    } else if (cell.classList.contains("negative")) {
      cell.dataset.type = "negative";
    }
  });
}

// Function to change symbols
function changeSymbols(newSymbol, type) {
  const cells = document.querySelectorAll(`td[data-type="${type}"]`);
  cells.forEach((cell) => {
    cell.textContent = newSymbol;
  });
}

// Function to apply changes based on user input
function applyChanges() {
  const negativeCharacter = document.getElementById("whitespaceInput").value;
  const positiveCharacter = document.getElementById("mainInput").value;

  if (negativeCharacter) {
    changeSymbols(negativeCharacter, "negative");
  }
  if (positiveCharacter) {
    changeSymbols(positiveCharacter, "positive");
  }
}

// Function to initialize the page
function init() {
  initializeGrid();

  const applyButton = document.getElementById("applyChanges");
  applyButton.addEventListener("click", applyChanges);

  // Optional: Apply changes on input
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (this.value.length === 1) {
        applyChanges();
      }
    });
  });
}

// Run the init function when the page loads
window.addEventListener("load", init);
