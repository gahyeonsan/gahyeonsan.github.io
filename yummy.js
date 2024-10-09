// https://www.reddit.com/r/webdev/comments/k0tjax/is_there_to_make_an_html_table_load_with_rows_in/

// Create references to table and table rows
let table = document.querySelector("#content-table");
let rows = table.querySelectorAll("tr");

// 도우미 기능을 만들어 어레이 또는 반복 가능한 어레이를 셔플합니다
function shuffle (iterable) {
  // convert array-like objects into arrays
  let array = Array.from(iterable);
  
  // TODO: Shuffle the array
  //  Use an array shuffling algorithm, such as fisher-yates
  
  return array;
}

let randomRows = shuffle(rows);

// Clear the contents of the table
table.innerHTML = "";

// TODO: Iterate over each row of randomRows
//   append each row to table
