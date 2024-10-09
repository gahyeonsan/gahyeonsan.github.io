function sortTable() {
  //get the parent table for convenience
  let table = document.getElementById("content-table");

  //1. get all rows
  let rowsCollection = table.querySelectorAll("tr");

  //2. convert to array
  let rows = Array.from(rowsCollection)
   // .slice(1); //첫번째 타이틀 행 제외 시키고 두번째 부터 적용

  //3. shuffle
  shuffleArray(rows);

  //4. add back to the DOM
  for (const row of rows) {
    table.appendChild(row);
  }
}


/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/12646864#12646864
 */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}


// JavaScript 위로가기 Top
2    const backToTopButton = document.querySelector(".back-to-top");
3
4    // 스크롤 이벤트 등록
5    window.addEventListener("scroll", function () {
6      // 현재 스크롤 위치가 200 이상인 경우에만 버튼 보이기
7      if (window.pageYOffset > 200) {
8        backToTopButton.style.display = "block";
9      } else {
10        backToTopButton.style.display = "none";
11      }
12    });
13
14    // 위로가기 버튼 클릭 이벤트 등록
15    backToTopButton.addEventListener("click", function () {
16      window.scrollTo({ top: 0, behavior: "smooth" });
17    });
