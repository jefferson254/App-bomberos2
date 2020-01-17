class Motobomba { 
constructor(id,capacidad,estado=false){
    this.id=id;
    this.capacidad=capacidad;
    this.estado=estado;
}
prender(){ 
this.estado=true;
}
apagar(){ 
this.eatado=false;

}
getEstado(){
   return this.estado;
}
toString(){
    if(this.estado == true){
    return  (this.estado + " " + "estado prendido")
}else{
    return "la motobomba con id " + this.id + " esta prendido"
}
    }
}

function guardar(){
    var  recuperar= document.getElementById('id').value;
    var  recu1= document.getElementById('capacidad').value;
this.id=recuperar;
this.capacidad=recu1;
console.log(this.id)
console.log(this.capacidad)
document.getElementById("demo").innerHTML ='El ID es: '+recuperar+' '+" "+'Capacidad es:  '+ recu1;

document.getElementById("imagen").innerHTML = ('<img src="https://static.vecteezy.com/system/resources/previews/000/109/957/non_2x/vector-fire-truck.jpg"/>');

let boton = document.createElement("button");
boton.innerHTML = "Ver el estado";
document.body.appendChild(boton);

boton.onclick = function(){
    if(this.estado == true){
        return boton.innerHTML='Apagado';
    }else{
        return boton.innerHTML='Encendido';
   
    
}
}
}
