const myForm = document.querySelector('#my-form');
const listInput = document.querySelector('#text');
const btn = document.querySelector('#btn');
const itemList = document.querySelector('#items');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
  e.preventDefault();

  if (listInput.value === '') {
    alert('please add the list');
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${listInput.value}`));

    itemList.appendChild(li);

    text.value = '';
  }
}
