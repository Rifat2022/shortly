const input = document.getElementById("link-input"); 
const form = document.getElementById("link-form"); 
const errMsg = document.getElementById("err-msg"); 
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
 

form.addEventListener('submit', formSubmit); 
btn.addEventListener('click', navToggle); 
function formSubmit(e){
    e.preventDefault();
    if(input.value === ''){
        errMsg.innerHTML = 'Please enter something'; 
        input.classList.add('border-red');
    }
}
//toogle mobile menu 
function navToggle(){
    btn.classList.toggle('open'); 
    menu.classList.toggle('flex'); 
    menu.classList.toggle('hidden'); 

}