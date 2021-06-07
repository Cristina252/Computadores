function calculo() {
  let cant = document.getElementById("cantidad").value;
  const precio = 820000;
  let subtotal = precio * cant;
  let total;
  let descuento;
  let alerta;

  if (subtotal >= 1640000 && subtotal <= 3280000){
      descuento=subtotal * (15 / 100)
    total = subtotal -descuento;
    alerta= "El descuento aplicado es del 15%";
  }

 else if (subtotal > 3280000 && subtotal <= 6560000) {
     descuento=subtotal* (25/100);
    total = subtotal - descuento;
    alerta= "El descuento aplicado es del 25%";
 }

 else if (subtotal > 6560000 && subtotal <= 9840000) {
     descuento=subtotal* (35/100);
    total = subtotal - descuento;
    alerta= "El descuento aplicado es del 35%";
 }
  else {
      descuento=0;
      total=subtotal;
      alerta="No hay descuento para esta compra"
  }

  document.getElementById("valor").value = subtotal;
  document.getElementById("descuento").value = descuento;
  document.getElementById("total").value = total;

  document.getElementById("alerta").innerHTML = alerta;

  mostrarResumen();
}

function mostrarResumen() {
  document.getElementById("resumen").style.display = "block";
  document.getElementById("table").style.display = "none";
}


