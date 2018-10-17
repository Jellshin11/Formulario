function valida() {
 var nombre = document.getElementById('nombre').value;
 var apellido = document.getElementById('apellido').value;
 var edad = document.getElementById('edad').value;
 var domicilio= document.getElementById('domicilio').value;
 var telefono = document.getElementById('telefono').value;
 var seleccion = document.getElementById('seleccionar').selectedIndex;
 var check = document.getElementById('elegido').checked;
 

 if(nombre == null || nombre.length==0|| /^\s+$/.test(nombre)){
     alert('Error: El campo no debe estar vacío o lleno de espacios');
     return false;
 }
 
 if(apellido == null || apellido.length==0|| /^\s+$/.test(apellido)){
    alert('Error: El campo no debe estar vacío o lleno de espacios');
    return false;
}

if(edad == null || edad.length==0||isNAN(edad)){
    alert('Error: El campo edad no debe de estar vacio o introducir un entero');
    return false;
}

if(!check.checked){
    alert('Debe seleccionar el checkbox');
    return false;
}

if(domicilio == null || domicilio.length==0|| /^\s+$/.test(domicilio)){
    alert('Error: El campo no debe estar vacío o lleno de espacios');
    return false;
}

if(telefono == null || telefono.length==0||isNAN(telefono)){
    alert('Error: El campo telefono no debe de estar vacio o introducir un entero');
    return false;
}
if(seleccion== null|| seleccion==0){
    alert('Debe seleccionar una opcion');
    return false;
}


}