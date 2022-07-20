const list = [
    'Menu 1',
    'Menu 2',
    'Menu 3',
    'Menu 4'
];

const $counterUl = document.querySelector("ul#list");
const $subLi = document.createElement('li');
const addCount = (countEl) => {
$subLi.innerText = 'Count of Menu Elements is '+countEl;
$counterUl.appendChild($subLi);
}

const $ul = document.querySelector('ul#menu');

const addItem = (item) => {
    const $li = document.createElement('li');
    $li.innerText = item;
    $ul.appendChild($li);
    $li.addEventListener('click', (event) =>{
        removeItem(event.target);
    });
    addCount(menuCounter+1);
};

const removeItem = ($element) => {
    $ul.removeChild($element);
    menuCounter--;
    if (menuCounter < 10) {
        $submit.removeAttribute('disabled');
        
     }
     addCount(menuCounter); 
}
let menuCounter = 0;
list.forEach((el, index) => {
     addItem(el);  
     menuCounter++;  
});



const $form = document.querySelector('form#add_form');
const $input = $form.querySelector('input[name="new_text"]');
const $alert = document.querySelector('alert');
const $submit = $form.querySelector('button');

$form.addEventListener('submit', (event) => {
    event.preventDefault();
     if (!$input.value) {
        $alert.style.visibility = "visible";
     } else {
     
     $alert.style.visibility = "hidden";
     addItem($input.value);
     $input.value = '';
     menuCounter ++;
     if (menuCounter > 9) {
        $submit.disabled = "true";
        
     }
}});
