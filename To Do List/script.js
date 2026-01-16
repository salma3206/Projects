let input = document.getElementById('input');
let add = document.querySelector('.add');
let del = document.querySelector('.delete');
let ul = document.querySelector('ul');

add.addEventListener('click', function() {
    if (input.value.length === 0) {
        alert("Please enter a task");
        return;
    } 
    let li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = '';  
    li.classList.add('unselected');
    li.addEventListener('click', () => {
        li.classList.toggle('unselected');
        li.classList.toggle('selected');
    });
});

del.addEventListener('click', () => { 
    let items = document.querySelectorAll('.selected');
    if (items.length === 0) {
        alert("Please select at least one task to delete");
        return;
    }
    items.forEach((item)=> {
        if (confirm("Are you sure you want to delete this task?")) {
        ul.removeChild(item);
        }
    });
});