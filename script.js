console.log("Buenas Noches y Buena Suerte")

const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')
const botonModoOscuro = document.querySelector('button')

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.getElementById('btnCalcular')

const pResult = document.getElementById('result')

botonModoOscuro.addEventListener('click', () => body.classList.toggle('luz') 
)

h1.addEventListener('click', () => {
  h1.classList.toggle('verde')
})

//crear un elemento

// document.createElement('img')
// console.log(document.createElement('span'))

const img = document.createElement('img');
img.setAttribute('src', 'imagenes/lobo.jpg')
// console.log(img)

pid.innerHTML = ""
pid.append(img)

form.addEventListener('submit', sumarInputValues)
// form.addEventListener('click', sumarInputValues)

function sumarInputValues(event) {
  // console.log({event});
  event.preventDefault() // esta linea evita que la pagina se recargue al hacer click en ultimo boton dentro del formulario 
  const sumaInputs = (+input1.value + +input2.value)
  pResult.innerHTML = sumaInputs
}

