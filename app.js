function valida() {
 var nombre = document.getElementById('nombre').value;
 var spellido = document.getElementById('apellido').value;
 var edad = document.getElementById('edad').value;
 var check = document.getElementById('check').value;
 

 if(nombre == null || nombre.length==0|| /^\s+$/.test(nombre)){
     alert('Error: El campo no debe estar vacío o lleno de espacios');
     return false;
 }
 
 if(apellido == null || apellido.length==0|| /^\s+$/.test(apellido)){
    alert('Error: El campo no debe estar vacío o lleno de espacios');
    return false;
}

if(edad == null || edad.length==0||isNAN(edad)){
    alert('Error: El campo no debe estar vacío o lleno de espacios');
    return false;
}

if(!check.checked){
    alert('Debe seleccionar el checkbox');
    return false;
}
}