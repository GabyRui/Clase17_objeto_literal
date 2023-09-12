

/* PRIMERA FORMA DE ACCEDER A LOS VALORES DE UN OBJETO */

const compras = {

  verdura: "lechuga",
    fruta: "pera",
}

console.log(compras.verdura);
console.log(compras.fruta);

/* SEGUNDA FORMA DE ACCEDER A LOS VALORES DE UN OBJETO */


const comprasMercado = {

    verdura: "tomate",
      fruta: "mandarina",
  }

console.log(comprasMercado['verdura']);
console.log(comprasMercado['fruta']);


/* ¿cómo agrego contenido al objeto? */

comprasMercado.golosinas = 'oreo';
console.log(comprasMercado);



/* Modificar contenido del objeto? */

comprasMercado.golosinas = 'gaseosa';
console.log(comprasMercado);

/* Eliminar info de un objeto */

delete comprasMercado.verdura;
delete comprasMercado.fruta;
delete comprasMercado.golosinas;


console.log(comprasMercado);
