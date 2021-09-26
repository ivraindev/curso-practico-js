// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuesto (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio* porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento
}



function onclickButtonPriceDiscount () {
    const inputPrice = document.getElementById ("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById ("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuesto (priceValue, discountValue);

    const ResultadoPrecio = document.getElementById ("ResultadoPrecio");
    ResultadoPrecio.innerText = "El precio con descuento es: $" + precioConDescuento;
}

// console.log ({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });



