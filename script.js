const tableParent = document.getElementById('sampleTable');
const insertBtn = document.querySelector('input');

function insert_Row()
{
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>New Cell1</td>
    <td>Row1 cell1</td>
    `;
    tableParent.prepend(row);
}