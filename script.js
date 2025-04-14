
function myFunc(id,innerText){
    console.log(id,innerText);
    const ele= document.getElementById(id);
    ele.style.backgroundColor=innerText;
   
}
const inputField= document.getElementById('name');
const btn = document.getElementById('btn');

const inputValue = btn.addEventListener('click',()=>{
    const user = inputField.value
    const head=document.getElementById('head');
    head.innerHTML='Hello, '+user;

})

// function displayName() {
//     var userName = document.getElementById("userName").value;
//     document.getElementById("greeting").textContent = "Hello, " + userName + "!";
//   }


