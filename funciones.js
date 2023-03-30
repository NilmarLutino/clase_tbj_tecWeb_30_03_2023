window.addEventListener('load',inicializarEventos,false);

function inicializarEventos(e)
{
  var boton1=document.getElementById('b1');
  boton1.addEventListener('click',presionBoton1,false);  
  var boton2=document.getElementById('b2');
  boton2.addEventListener('click',presionBoton2,false); 
  var boton1=document.getElementById('b3');
  boton1.addEventListener('click',presionBoton1,false);  
  var boton2=document.getElementById('b4');
  boton2.addEventListener('click',presionBoton2,false); 
  var boton1=document.getElementById('b5');
  boton1.addEventListener('click',presionBoton1,false);  
  var boton2=document.getElementById('b6');
  boton2.addEventListener('click',presionBoton2,false);  
}

function presionBoton1(e)
{
  var boton1=document.getElementById('b1');
  alert("Vacunacion ");
}

function presionBoton2(e)
{
  var boton2=document.getElementById('b2');
  alert("Cirugia");
}
function presionBoton3(e)
{
  var boton2=document.getElementById('b3');
  alert("Consulta");
}
function presionBoton4(e)
{
  var boton1=document.getElementById('b4');
  alert("Peluqueria ");
}

function presionBoton5(e)
{
  var boton2=document.getElementById('b5');
  alert("Desparacitacion");
}
function presionBoton6(e)
{
  var boton2=document.getElementById('b6');
  alert("Laboratorio");
}