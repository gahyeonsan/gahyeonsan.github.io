var
  trs = document.querySelectorAll('tr'),
  i = trs.length,
  tr;

for (; i > 1; i -= 1) {
  tr = trs.item(Math.floor(Math.random() * i));
  tr.parentNode.appendChild(tr);
}
