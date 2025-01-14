// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!', product);

  //... your code goes here
  const priceNode = product.querySelector('.price > span'); // llamar al span que contiene el precio de html para ponerlo en una constante
  const quantityNode = product.querySelector('.quantity > input'); // llamar al input que tiene la cantidad en html
  const price = Number (priceNode.textContent); // convertir el precio en un numero ya que me lo trae en string
  const quantity = Number (quantityNode.value) // convertir la cantidad a numero ya que me lo trae en string
  subtotalValue = price * quantity; // multiplicar las dos constante para obtener el valor 

  const subtotalNode = product.querySelector('.subtotal > span') // llamo al Nodo subtotal de html que esta en un span
  subtotalNode.textContent = subtotalValue.toFixed(2); // el Nodo subtotal va hacer igual al valor del subtal obtenido arriba
  return subtotalValue; // retornar el valor total

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const dobleProducts = document.getElementsByClassName('product'); 
  /* hacer una constante llamando a los dos productos que tengo ahora por su clase */
  

  Array.from(dobleProducts).forEach((product) => {
  updateSubtotal(product);
  // para poder monstrarlo lo convierto en un array y le aplico un foreach para iterar entre ellos ya c

  })

  

  // ITERATION 3
  //... your code goes here
 // const subtotalNode1 = document.getElementsByClassName('.subtotal > span');
  let totals = 0; // una variales donde vamos a guardar el valor
  Array.from(dobleProducts).forEach((subtotalNode) =>{
    totals += updateSubtotal(subtotalNode)
    /* hacemos un foreach para iterar por los dos valores diciendole: a cada uno de los productos lo vamos allamar que son los 
    subtotales y los vamos a guardar en la variable total y la sumamos desde la funcion updateSubtotal(subtotalNode) */
  })
  console.log('Total:', totals.toFixed(2)) // un console para ver si se ven los totales

  const calculateTotalNode = document.querySelector ('h2 > span');
  calculateTotalNode.textContent = totals;



}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  event.target.closest('tr').remove();
  calculateAll(); // llamo la funcion para que me recalcule luego que le haga remove y me de el valor del de que queda.

}

// ITERATION 5

const createProductBtn = document.getElementById('create');
createProductBtn.onclick = (event) => {
  createProduct();
}

function createProduct() {
  //... your code goes here
  const productNam = document.querySelector('tr.create-product input')
  const productNamValue = productNam.value; // capturar el valor del nombre del producto

  const productValue = document.querySelector('tr.create-product > td + td > input');
  const productPriceValue = Number (productValue.value); // capturar el valor del producto
  

  if (productNamValue && productPriceValue ){

      // crear nueva fila
    const newRow = document.createElement('tr');
    newRow.classList.add('product');

    const namesTableBody = document.querySelector('tbody');

    // crear celda nombre

    const nameElement = document.createElement ('td');
    nameElement.classList.add ('name');
    const spanElement = document.createElement ('span');
    spanElement.textContent = productNamValue;
    nameElement.appendChild(spanElement);



    // crear celda precio

    const priceElement = document.createElement('td');
    priceElement.classList.add('price');
    priceElement.textContent = '$';
    //content.appendChild(priceElement);
    const priceElementSpan = document.createElement('span');
    priceElementSpan.textContent = productPriceValue.toFixed(2);
    priceElement.appendChild(priceElementSpan);

    // crear celda cantidad

    const quantityElement = document.createElement('td')
    quantityElement.classList.add('quantity')
    const inputquantityElement = document.createElement('input');
    inputquantityElement.type = 'number';
    inputquantityElement.value = '0';
    inputquantityElement.min = '0';
    inputquantityElement.placeholder = 'Quantity';
    quantityElement.appendChild(inputquantityElement);

    // crear celda subtotal

    const subtotalElement = document.createElement('td');
    subtotalElement.classList.add('subtotal')
    subtotalElement.textContent ='$';
    const inputSubtotalElement =  document.createElement('span');
    inputSubtotalElement.textContent = '0';
    subtotalElement.appendChild(inputSubtotalElement);
    
    // crear action

    const actionElement = document.createElement('td');
    actionElement.classList.add('action');
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('btn','btn-remove');
    buttonElement.textContent('Remove');
    actionElement.appendChild(buttonElement);


    newRow.append(nameElement, priceElement, quantityElement, subtotalElement, actionElement );
    namesTableBody.appendChild(newRow);

  }





  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
const removBottom = document.getElementsByClassName ('btn-remove')
Array.from(removBottom).forEach((button) => {
  button.addEventListener('click' , removeProduct)
})


});
