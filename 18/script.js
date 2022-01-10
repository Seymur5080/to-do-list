let form = document.querySelector("form");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
// let btn = document.querySelector('#btn');

form.addEventListener('submit', elaveEt);
document.addEventListener('DOMContentLoaded', localGetir);

function elaveEt() {
   if (inp.value == '') {
      alert('Form-u doldurun');
   } else {
      localYaz(inp.value);
      add(inp.value);
   }

   inp.value = "";
}

function localYaz(not) {
   let notlar;

   if (localStorage.getItem('list') === null) {
      notlar = [];
   } else {
      notlar = JSON.parse(localStorage.getItem('list'));
   }

   notlar.push(not);

   localStorage.setItem('list', JSON.stringify(notlar));

}

function localGetir() {
   let notlar;

   if (localStorage.getItem('list') === null) {
      notlar = [];
   } else {
      notlar = JSON.parse(localStorage.getItem('list'));
   }

   notlar.forEach(item => {
      add(item)
   });
}


function add(not) {
   let yeniLi = document.createElement('li');
   yeniLi.classList.add('list-group-item');
   yeniLi.classList.add('d-flex');
   yeniLi.classList.add('justify-content-between');
   yeniLi.textContent = not;
   ul.appendChild(yeniLi);

   let yeniBtn = document.createElement('button');
   yeniBtn.classList.add('btn');
   yeniBtn.classList.add('btn-danger');
   yeniBtn.classList.add('btn-sm');
   yeniBtn.textContent = "Sil";
   yeniLi.appendChild(yeniBtn);

   yeniBtn.addEventListener('click', function () {
      yeniLi.remove();

      let jsonLocal = JSON.parse(localStorage.getItem('list'));
      jsonLocal.splice(0, 1);
      let j = JSON.stringify(jsonLocal);
      localStorage.setItem('list', j);
   });
}

