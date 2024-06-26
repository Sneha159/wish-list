const addlistinput = document.getElementById('addlist');
const addBtn = document.getElementById('addBtn');
const wishlist = document.getElementById('wishlist');
wishlist.setAttribute("style","color:white","font-style:bold");

function structure() {

    const addlisttext = addlistinput.value;
    addlistinput.value = '';

    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const wishtext = document.createElement('span');
    const deleteBtn = document.createElement('button');

    checkbox.type =  'checkbox';

    listItem.appendChild(checkbox);
    listItem.appendChild(wishtext);
    listItem.appendChild(deleteBtn);

    wishtext.textContent = addlisttext;
    deleteBtn.textContent = 'Delete';

    wishlist.appendChild(listItem);

    deleteBtn.addEventListener('click',function(){
        wishlist.removeChild(listItem);
    })

}

addBtn.addEventListener('click',structure)


