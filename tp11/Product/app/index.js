"use strict";

let formulario =document.getElementById(`product-form`);
formulario.addEventListener(`submit`, (e)=>{
    e.preventDefault();
    let name = document.getElementById(`name`).value;
    let price = document.getElementById(`price`).value;
    let year = document.getElementById(`year`).value;
    /*console.log(name,price,year);*/
    /*console.log(new product(name,price,year));*/
    let inter = new UI();
    inter.addProduct(new product(name,price,year));
    inter.clearProduct();
})


class product  {
     constructor(name,price,year) {
        this.name=name;
        this.price=price;
        this.year=year;
        
    }

}
class UI{
    addProduct(product){
        let producList = document.getElementById(`product-list`);
        let element= document.createElement(`div`);
        element.innerHTML =`
        <div class="card text-center mb-4">
           <div class="card-body row">
           <div class='col-md-12'>
                <strong>nombre: ${product.name}</strong>
                <strong>price: ${product.price}</strong>
                <strong>year: ${product.year}</strong>
            </div>
            <div class='col-md-2'>
                <a href="#" class='btn-danger' name='delete' >delete </a>
            </div>
        </div>`
      producList.appendChild(element);
    }
    deleteProduct(element){
        if (element.name=='delete'){
            element.parentElement.parentElement.parentElement.remove();
        }
    }
    clearProduct(){
        document.getElementById(`product-form`).reset();
    }
    showMensage(){}
}
let lista = document.getElementById('product-list');
lista.addEventListener('click',(e)=>{
    let inter = new UI();
    inter.deleteProduct(e.target)

})