// Diseñar un sistema para una tienda donde el menú ofrezca las siguientes opciones:
// Cobrar
// Retirar dinero de la caja
// Ver balance de caja
// Ver los montos totales de todas las operaciones realizadas
// (Ej: 2500,120,340). etc.
// Salir

// 1): Debemos ingresar los precios de cada uno de los objetos que el cliente fue comprando, uno por uno hasta que se avise que finalizó la carga.
//Preguntar si abona con tarjeta o efectivo. Si la compra supera los $2000 y paga en efectivo, realizar un descuento del 5%. Si la compra supera los $5000, realizar un descuento del 10% con ambos medios de pago. Mostrar el total de la cuenta. Si paga en efectivo, consultar con cuánto paga y avisar cuál es el vuelto que se le debe otorgar.
// 2) Si el monto que se solicita retirar es menor al monto que hay disponible en caja (pagos en efectivo), realizar la operación.
// 3) Ver cuánto se pagó en tarjeta y cuánto se pagó en efectivo.
// 4) Mostrar todos los montos de las operaciones (DE COMPRA, no retiros), tanto en tarjeta como en efectivo.
// 5) Finaliza el programa.


//Menu-   : Cobrar, retirar dinero, ver balance, ver montos totales y poder salir




let productoss = [];
let productos = [];
let almacen = [];
let frescos = [];
let verduleria = [];
let panaderia = [];
let suma = 0;
let precio;
let menu;
let pago;
let vuelto;
let totalEfectivo = 0;
let totalEfectivos = 0;
let totalTarjCredito = 0;
let totalTarjDebito = 0;
let totalTarjDebitos = 0;
let totalTarjDebitoss = 0;
let totalCajass = 0;
let totalCajasss = 0;
let totalCajas = 0;
let totalCaja = 0;
let caja = 2000;
let retiro;
let retiross = 0;
let total;
let sector;
let importeTicket = [];
let retiros = [];
let cont = 0;
let conta = 0;
let opcion;
let cajero = 1234;
let usuario = parseInt(prompt("ingresa tu clave 1234"));
while (usuario != cajero) {
    usuario = parseInt(prompt("Clave incorrecta!\ningresa tu clave nuevamente 1234"));
}
alert("Ingreso correcto");
do {
    suma = 0;
    retiro = 0;
    totalCaja = 0;
    pago = 0;
    totalEfectivo = 0;
    // totalEfectivos = 0;
    vuelto = 0;
    totalTarjDebito = 0;
    totalTarjDebitos = 0;
    precio = 0;


    if (totalCajas > 10000) {
        alert("debes realizar retiro de fondos");



        menu = parseInt(
            prompt(
                "2.Retirar dinero "
            )

        );







    } else {

        menu = parseInt(
            prompt(
                "¿Que operacion desea realizar?\n1.Cobrar\n2.Retirar dinero de la caja\n3.Ver balance de caja\n4.Ver los montos totales de todas las operaciones realizadas\n5.Salir"
            )

        );
    }







    productos.length = 0;
    almacen.length = 0;
    frescos.length = 0;
    verduleria.length = 0;
    panaderia.length = 0;



    switch (menu) {
        case 1:
            do {

                sector = parseInt(prompt("1-Almacen\n2-Frescos\n3-Verduleria\n4-Panaderia\n5-Cancelar operacion\n9-Fin Scanner-cobrar"));
                if (sector > 0 && sector < 5) {

                    switch (sector) {
                        case 1:

                            precio = parseInt(prompt("Ingrese importe-producto"));
                            while (isNaN(precio)) {
                                precio = parseInt(prompt("Has ingresado letras!!!\n por favor Ingrese importe-producto"));

                            }
                            almacen.push("Almacen $" + precio);
                            suma = suma + precio;
                            alert("Subtotal: " + suma);
                            break;


                        case 2:
                            precio = parseInt(prompt("Ingrese importe-producto"));
                            while (isNaN(precio)) {
                                precio = parseInt(prompt("Has ingresado letras!!!\n por favor Ingrese importe-producto"));

                            }
                            frescos.push("Frescos $" + precio);
                            suma = suma + precio;
                            alert("Subtotal: " + suma);
                            break;
                        case 3:
                            precio = parseInt(prompt("Ingrese importe-producto"));
                            while (isNaN(precio)) {
                                precio = parseInt(prompt("Has ingresado letras!!!\n por favor Ingrese importe-producto"));

                            }
                            verduleria.push("Verduleria $" + precio);
                            suma = suma + precio;
                            alert("Subtotal: " + suma);
                            break;
                        case 4:
                            precio = parseInt(prompt("Ingrese importe-producto"));
                            while (isNaN(precio)) {
                                precio = parseInt(prompt("Has ingresado letras!!!\n por favor Ingrese importe-producto"));

                            }
                            panaderia.push("Panaderia $" + precio);
                            suma = suma + precio;
                            alert("Subtotal: " + suma);
                            break;


                        default:
                            alert("opcion invalida");
                            break;
                    }
                } else if (sector === 9 && suma === 0) {
                    alert("Finalizaste Scanner en cero\nIngresaste importe en cero\nSistema cancelo Ticket");
                    console.log("\n\n");
                    console.log("Scanner en cero\nTicket cancelado");
                    console.log("\n");
                    sector = 5;
                    break;
                } else if (sector === 9) {
                    console.log("\n\n");
                    console.log("Fin de Scanner");
                    console.log("\n");
                    alert("Fin de Scanner");
                    break;
                }



            } while (sector !== 5);
            productos = productos.concat(almacen);
            productos = productos.concat(frescos);
            productos = productos.concat(verduleria);
            productos = productos.concat(panaderia);
            //productoss = productos;


            if (sector !== 5) {




                let abono = parseInt(prompt("FORMA DE PAGO:\n 1-EFECTIVO\n  2-TARJETA\n5-CANCELAR"));
                while (abono !== 1 && abono !== 2 && abono !== 5) {
                    alert("< Opcion Incorrecta > ");
                    abono = parseInt(prompt("FORMA DE PAGO:\n 1-EFECTIVO\n  2-TARJETA\n5-CANCELAR"));

                }
                if (abono === 5) {
                    sector = abono;

                }


                //PAGO EFECTIVO
                if (abono === 1) {
                    alert("PAGO EN EFECTIVO");
                    console.log("EFECTIVO");

                    if (suma >= 5000) {
                        console.log("\n");
                        for (let i = 0; i < productos.length; i++) {
                            console.log(productos[i]);
                        }

                        console.log("Subtotal s/d : $ " + suma);
                        descuento = suma * 0.1;
                        suma = suma - descuento;

                        console.log("DESCUENTO/EFECTIVO 10%\nimporte : $" + descuento);
                        console.log("Total a pagar : $ " + suma);

                        alert("descuento 10% $" + descuento);
                        alert("Total a pagar : $" + suma);


                    } else if (suma >= 2000) {
                        console.log("\n");

                        for (let i = 0; i < productos.length; i++) {
                            console.log(productos[i]);
                        }


                        console.log("Subtotal s/d : $ " + suma);
                        descuento = suma * 0.05;
                        suma = suma - descuento;

                        console.log("DESCUENTO/EFECTIVO 5%\nimporte : $" + descuento);
                        console.log("Total a pagar : $ " + suma);

                        alert("descuento 5% $ " + descuento);
                        alert("Total a pagar : $ " + suma);


                    } else {
                        console.log("\n");

                        for (let i = 0; i < productos.length; i++) {
                            console.log(productos[i]);
                        }



                        console.log("Total a pagar : $ " + suma);
                        alert("Total a pagar : $ " + suma);

                    }

                    pago = parseFloat(prompt("Total: $ " + suma + "\nIngrese importe-pago :"));
                    while (isNaN(pago)) {
                        pago = parseFloat(prompt("Has ingresado letras!\n" + "$ " + suma + "\nIngresa importe-pago :"));
                    }
                    while (pago < suma) {
                        opcion = parseInt(prompt("El monto ingresado es insuficiente!!\n¿Quieres ingresar otra suma?\n1-Ingresar otra suma\n5-Cancelar operacion"));
                        while (opcion !== 1 && opcion !== 5) {
                            alert("< opcion incorrecta >");
                            opcion = parseInt(prompt("¿Quieres ingresar otra suma?\n1-Si\n5-Cancelar operacion"));
                        }
                        if (opcion === 1) {
                            pago = parseFloat(prompt("Total: $ " + suma + "\nIngrese importe-pago :"));
                            while (isNaN(pago)) {
                                pago = parseFloat(prompt("Has ingresado letras!\n" + "$ " + suma + "\nIngresa importe-pago :"));
                            }
                        } else if (opcion === 5) {
                            sector = opcion;
                            break;

                        }

                    }

                    if (pago >= suma) {
                        vuelto = pago - suma;
                        console.log("\n");
                        console.log("EFECTIVO TOTAL/TICKET: $ " + suma);
                        console.log("EFECTIVO CAJA/ENTRADA: $ " + pago);
                        console.log("EFECTIVO CAJA/SALIDA: $ " + vuelto);
                        console.log("\n");
                        console.log("Atendido por: " + cajero)
                        console.log("\n\n\n");
                        alert("vuelto es: $ " + vuelto);

                        totalEfectivo = totalEfectivo + suma;
                        totalEfectivos = totalEfectivos + totalEfectivo;
                    } else {
                        alert("Sin Scannear");
                        console.log("\n\n");
                        console.log("Sin Scannear");
                        alert('Su dinero No es sufiente');
                        console.log("SIN MOVIMIENTOS");
                        console.log("Cancelado");
                        console.log("\n\n");
                        productos.length = 0;
                        break;

                    }
                    cont = cont + 1;
                    importeTicket.push("Ticket Nº" + cont + " | Importe: $ " + suma + " *EFECTIVO*");
                    productoss = productoss.concat(productos);
                    //productoss += productos;
                    totalCaja = totalCaja + totalEfectivo;
                    totalCajas = totalCajas + totalCaja;

                    totalCajasss = totalCajasss + totalCaja;
                    //PAGO TARJETAS
                } else if (abono === 2) {
                    alert("PAGO CON TARJETAS");
                    console.log("TARJETA");

                    if (suma >= 5000) {
                        console.log("\n");
                        for (let i = 0; i < productos.length; i++) {
                            console.log(productos[i]);
                        }

                        console.log("Subtotal s/d : $ " + suma);
                        descuento = suma * 0.15;
                        suma = suma - descuento;

                        console.log("DESCUENTO/DEBITO 15%\nimporte : $" + descuento);
                        console.log("Total a pagar : $ " + suma);

                        alert("descuento 15% $" + descuento);
                        alert("Total a pagar : $" + suma);


                    } else if (suma >= 2000) {
                        console.log("\n");

                        for (let i = 0; i < productos.length; i++) {
                            console.log(productos[i]);
                        }


                        console.log("Subtotal s/d : $ " + suma);
                        descuento = suma * 0.10;
                        suma = suma - descuento;

                        console.log("DESCUENTO/DEBITO 10%\nimporte : $" + descuento);
                        console.log("Total a pagar : $ " + suma);

                        alert("descuento 10% $ " + descuento);
                        alert("Total a pagar : $ " + suma);


                    } else {
                        console.log("\n");

                        for (let i = 0; i < productos.length; i++) {
                            console.log(productos[i]);
                        }



                        console.log("Total a pagar : $ " + suma);
                        alert("Total a pagar : $ " + suma);

                    }

                    pago = parseFloat(prompt("Total: $ " + suma + "\nIngrese importe-pago :"));
                    while (isNaN(pago)) {
                        pago = parseFloat(prompt("Has ingresado letras!\n" + "$ " + suma + "\nIngresa importe-pago :"));
                    }
                    while (pago < suma) {
                        opcion = parseInt(prompt("El monto ingresado es insuficiente!!\n¿Quieres ingresar otra suma?\n1-Ingresar otra suma\n5-Cancelar operacion"));
                        while (opcion !== 1 && opcion !== 5) {
                            opcion = parseInt(prompt("< opcion incorrecta >\n¿Quieres ingresar otra suma?\n1-Si\n5-Cancelar operacion"));
                        }
                        if (opcion === 1) {
                            pago = parseFloat(prompt("Total: $ " + suma + "\nIngrese importe-pago :"));
                            while (isNaN(pago)) {
                                pago = parseFloat(prompt("Has ingresado letras!\n" + "$ " + suma + "\nIngresa importe-pago :"));
                            }
                        } else if (opcion === 5) {
                            sector = opcion;
                            break;

                        }

                    }

                    if (pago >= suma) {
                        vuelto = pago - suma;
                        console.log("\n");
                        console.log("EFECTIVO TOTAL TICKET: $ " + suma);
                        console.log("EFECTIVO CAJA/ENTRADA: $ " + pago + " Débito");
                        console.log("EFECTIVO CAJA/SALIDA: $ " + " 00,00");
                        console.log("\n");
                        console.log("Atendido por: " + cajero)
                        console.log("\n\n\n");
                        alert("vuelto es: $ " + vuelto);

                        totalTarjDebito = totalTarjDebito + suma;
                        totalTarjDebitos = totalTarjDebitos + totalTarjDebito;
                        totalTarjDebitoss = totalTarjDebitoss + totalTarjDebitos;

                    } else {
                        alert("Sin Scannear");
                        console.log("\n\n");
                        console.log("Sin Scannear");
                        alert('Su dinero No es sufiente');
                        console.log("SIN MOVIMIENTOS");
                        console.log("Cancelado");
                        console.log("\n\n");
                        productos.length = 0;
                        break;

                    }
                    cont = cont + 1;
                    importeTicket.push("Ticket Nº" + cont + " | Importe: $ " + suma + " *TARJETA*");
                    productoss = productoss.concat(productos);
                    //totalCaja = totalCaja + totalTarjDebitos;
                    //totalCajas = totalCaja;
                    totalCajasss = totalCajasss + totalTarjDebitos;


                } //FIN TARJETA

            } else if (sector === 5) {
                alert("Sin operaciones");
                console.log("SIN OPERACIONES");
                suma = suma - suma;

            }
            break;

        case 2:
            retiro = parseInt(prompt("¿Cuánto dinero desea retirar?\nTienes al momento $" + totalCajas + " \nRecuerda que 2000 son el fondo minimo"));
            //total = caja + suma;
            if (retiro < totalCajas && retiro > 2000) {
                totalCajas = totalCajas - retiro;
                totalCajass = totalCajass + totalCajas;

                conta = conta + 1;

                //totalCajass=totalCaja;
                //totalCajass = totalCajass -retiro;


                console.log("retiro de fondos : $" + retiro)
                alert("Ha retirado $ " + retiro);
                alert("Total aun en Caja : $" + totalCajas);
                //totalCajas = 0;


                retiros.push("retiro de valores: Nº" + conta + " $" + retiro);



            } else if (retiro > totalCajas) {
                alert('Fondos insuficientes');
            }


            break;

        case 3:
            //BALANCE Mantenimiento
            break;

        case 4:
            //IMPORTES TOTALES Mantenimiento
            console.log("TOTAL CIERRE: \n")
                //console.log("Total valores en caja : $" + (totalCajass));console.log("DETALLE DE RETIRADAS:");
            console.log("\n");
            if (retiros.length === 0) {
                console.log("NO HUBO RETIRO DE VALORES")
            } else {
                for (let i = 0; i < retiros.length; i++) {
                    retiros[i] + "\n";
                }
            }
            alert("VISTA PREVIA CIERRE\n\n\nTotal efectivo parcial: $ " + totalEfectivos +

                "\n\nTotal Tarjetas de Débito parcial: $ " + totalTarjDebitoss +
                "\n\nRetiros: $ " + retiros +
                "\n\nTOTAL A RENDIR OPERADOR: $" + totalCajas +
                "\n\n\n" +
                "\nTOTAL SISTEMA : $" + totalCajasss);
            break;

        case 5:
            //SALIR mantenimiento
            break;
        default:
            alert("Operación inválida");
            break;

    }







}
while (menu !== 5);
console.log("\n\n\n");
console.log("INFORME DE SALIDA: ");
console.log("Salida de articulos");
console.log("\n");
for (let i = 0; i < productoss.length; i++) {
    console.log(i + " " + productoss[i] + " ");
}
console.log("\n\n");

console.log(productoss);


console.log("\n\n");
console.log("Importes Tickets: ");
console.log("\n");
for (let i = 0; i < importeTicket.length; i++) {
    console.log(importeTicket[i]);
}
console.log("\n\n");
console.log("Total efectivo parcial: $ " + totalEfectivos);
console.log("\n");
console.log("Total Tarjetas de Débito parcial: $ " + totalTarjDebitoss);

console.log("DETALLE DE RETIRADAS:");
console.log("\n");
if (retiros.length === 0) {
    console.log("NO HUBO RETIRO DE VALORES")
} else {
    for (let i = 0; i < retiros.length; i++) {
        console.log(retiros[i]);
    }
}

console.log("\n\n\n");
console.log("TOTAL CIERRE: \n")
    //console.log("Total valores en caja : $" + (totalCajass));
console.log("TOTAL A RENDIR OPERADOR: $" + totalCajas);
console.log("\n\n");
console.log("TOTAL SISTEMA : $" + totalCajasss);