let form = document.forms.login
let btn = document.querySelector('.btn2')
let inps = document.querySelectorAll('.input')


form.onsubmit = (event) => {
    event.preventDefault();

    let error_count = 0

    inps.forEach(item => {
        if (item.value.length > 0) {
            item.classList.remove('eror')
        } else {
            item.classList.add('eror')
        }
    });


    let user = {}

    let fm = new FormData(form)
    fm.forEach((value, key) => {
        user[key] = value

    })
    console.log(user);


}





let inp_name = document.querySelector('#name')
let inp_surname = document.querySelector('#surname')
let inp_Email = document.querySelector('#Email')
let inp_number = document.querySelector('#number')
let inp_Mom = document.querySelector('#Mom')
let inp_Paps = document.querySelector('#Paps')
let inp_age = document.querySelector('#age')
let inp_about = document.querySelector('#about')
let inp_JavaScript = document.querySelector('#JavaScript')
let inp_HTML = document.querySelector('#HTML')
let inp_CSS = document.querySelector('#CSS')
let inp_car = document.querySelector('#car')



inp_name.addEventListener('input', validateName);

function validateName() {
  if ( /^[a-zA-Zа-яА-Я]+\s?[a-zA-Zа-яА-Я]*$/.test(inp_name.value)) {
    inp_name.style.border = "3px solid blue";
  } else {
    inp_name.style.border = "3px solid red";
  }
}


inp_surname.addEventListener('input', validatesurname);

function validatesurname() {
  if ( /^[a-zA-Zа-яА-Я]+\s?[a-zA-Zа-яА-Я]*$/.test(inp_surname.value)) {
    inp_surname.style.border = "3px solid blue";
  } else {
    inp_surname.style.border = "3px solid red";
  }
}




inp_Email.addEventListener('input', validateinp_Email);

function validateinp_Email() {
  if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inp_Email.value)) {
    inp_Email.style.border = "3px solid blue";
  } else {
    inp_Email.style.border = "3px solid red";
  }
}






inp_number.addEventListener('input', validateinp_number);

function validateinp_number() {
  if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(inp_number.value)) {
    inp_number.style.border = "3px solid blue";
  } else {
    inp_number.style.border = "3px solid red";
  }
}









inp_Mom.addEventListener('input', validateinp_Mom);

function validateinp_Mom() {
  if ( /^[a-zA-Zа-яА-Я]+\s?[a-zA-Zа-яА-Я]*$/.test(inp_Mom.value)) {
    inp_Mom.style.border = "3px solid blue";
  } else {
    inp_Mom.style.border = "3px solid red";
  }
}





inp_Paps.addEventListener('input', validateinp_Paps);

function validateinp_Paps() {
  if ( /^[a-zA-Zа-яА-Я]+\s?[a-zA-Zа-яА-Я]*$/.test(inp_Paps.value)) {
    inp_Paps.style.border = "3px solid blue";
  } else {
    inp_Paps.style.border = "3px solid red";
  }
}











inp_age.addEventListener('input', validateinp_age);

function validateinp_age() {
  if (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(inp_age.value)) {
    inp_age.style.border = "3px solid blue";
  } else {
    inp_age.style.border = "3px solid red";
  }
}









inp_about.addEventListener('input', validateinp_about);

function validateinp_about() {
  if (inp_about.value.trim().length == 0) {
    inp_about.style.border = "3px solid red";
  } else {
    inp_about.style.border = "3px solid blue";
  }
}











inp_JavaScript.addEventListener('input', validateinp_JavaScript);

function validateinp_JavaScript() {
  if (inp_JavaScript.value.trim().length==0) {
    inp_JavaScript.style.border = "3px solid red";
  } else {
    inp_JavaScript.style.border = "3px solid blue";
  }
}









inp_HTML.addEventListener('input', validateinp_HTML);

function validateinp_HTML() {
  if (inp_HTML.value.trim().length==0 ) {
    inp_HTML.style.border = "3px solid red";
  } else {
    inp_HTML.style.border = "3px solid blue";
  }
}





inp_CSS.addEventListener('input', validateinp_CSS);

function validateinp_CSS() {
  if (inp_CSS.value.trim().length==0) {
    inp_CSS.style.border = "3px solid red";
  } else {
    inp_CSS.style.border = "3px solid blue";
  }
}








inp_car.addEventListener('input', validateinp_car);

function validateinp_car() {
  if (inp_car.value.trim().length==0) {
    inp_car.style.border = "3px solid red";
  } else {
    inp_car.style.border = "3px solid blue";
  }
}











