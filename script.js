// get ref to grid container
const gridContainer = document.querySelector('#grid-container');

// create columns
function createColumns(count) {
    for (let i = 0; i < count; i++) {
        const colDiv = document.createElement('div');
        colDiv.setAttribute("class", "colDiv");
        gridContainer.appendChild(colDiv);
    }
}

// create squares within columns
function createSquares(count) {
    const columnNodes = document.querySelectorAll('.colDiv');
    console.log(columnNodes);
    columnNodes.forEach((col) => {
        for (let i = 0; i < count; i++) {
            const square = document.createElement('div');
            square.setAttribute("class", "square");
            col.appendChild(square);
        }
    })
}

const promptBtn = document.querySelector('#prompt-btn');
promptBtn.addEventListener('click', () => {
    const count = prompt("Enter count of rows x columns:");
    gridContainer.textContent = "";
    createColumns(count);
    createSquares(count);
})

