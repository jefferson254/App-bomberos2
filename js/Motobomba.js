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
            document.getElementById('estado').innerHTML='<img src="img/azul.jpg" windth="130px" height="100px">'
        var parrafo=document.createElement('li')
            parrafo.innerHTML = 'Esta Encendido'
            document.body.appendChild(parrafo)
            carro.apagar()
            document.getElementById("boton").innerHTML= "Encendido"
    }
    if(this.estado == false){
        document.getElementById('estado').innerHTML='<img src="img/rojo.jpg" windth="130px" height="100px">'
    var parrafo=document.createElement('li')
        parrafo.innerHTML = 'Esta Apagado'
        document.body.appendChild(parrafo)
        carro.encendido()
        document.getElementById("boton").innerHTML= "Apagado"
        }
    }
    
     guardar(){
        var  recuperar= document.getElementById('id').value;
        var  recu1= document.getElementById('capacidad').value;
    this.id=recuperar;
    this.capacidad=recu1;
    console.log(this.id)
    console.log(this.capacidad)
    document.getElementById("demo").innerHTML ='El ID es: '+recuperar+' '+" "+'Capacidad es:  '+ recu1;
    
    
  
       
        
    }
    }
    