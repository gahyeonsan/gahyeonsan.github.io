// https://www.reddit.com/r/webdev/comments/k0tjax/is_there_to_make_an_html_table_load_with_rows_in/

// Create references to table and table rows
let tbody = document.querySelector("#randomized-table");
let rows = tbody.querySelectorAll("tr");

// Create a helper function to shuffle an array or iterable
function shuffle (iterable) {
  // convert array-like objects into arrays
  let array = Array.from(iterable);
  
  // TODO: Shuffle the array
  
  return array;
}


let randomRows = shuffle(rows);

// Clear the contents of the table
// table.innerHTML = "";

// TODO: Iterate over each row of randomRows
//   append each row to table
