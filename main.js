canvas = document.getElementById("lienzo");
dibujo = canvas.getContext("2d");

pelota_y=100;
pelota_x=100;

pelota_ancho=50;
pelota_alto=50;

hoyo_y=400;
hoyo_x=800;

hoyo_ancho=100;
hoyo_alto=100;

campo="verde.png"
pelota="pelota.png";
hoyo="bandera.png";

function iniciar(){
	poner_fondo = new Image(); 
	poner_fondo.onload=cargar_fondo;
	poner_fondo.src=campo;

	poner_pelota=new Image();
	poner_pelota.onload=cargar_pelota;
	poner_pelota.src=pelota;

	poner_hoyo=new Image();
	poner_hoyo.onload=cargar_bandera;
	poner_hoyo.src=hoyo;
	
}

function cargar_fondo() {
	dibujo.drawImage(poner_fondo, 0, 0, canvas.width, canvas.height);
}

function cargar_bandera() {
	dibujo.drawImage(poner_hoyo, 700, 342, hoyo_ancho, hoyo_alto);
}

function cargar_pelota() {
	dibujo.drawImage(poner_pelota, pelota_x, pelota_y, pelota_ancho, pelota_alto);
}



window.addEventListener("keydown", botones);

function botones(e)
{
	boton = e.keyCode;
	console.log(boton);

	if((pelota_x==740)&&(pelota_y==400)){
		console.log("¡Lo lograste!");
		document.getElementById("mensaje").innerHTML="¡Lo lograste!";
	    document.getElementById("lienzo").style.borderColor="red";
	}
	else{
	
		if(boton == '38')
		{
			arriba();
			console.log("arriba");
		}
		if(boton == '40')
		{
			abajo();
			console.log("abajo");
		}
		if(boton == '37')
		{
			izquierda();
			console.log("izquierda");
		}
		if(boton == '39')
		{
			derecha();
			console.log("derecha");
		}
		

	}
}
	
	function arriba()
	{
		if(pelota_y >=0)
		{
			pelota_y = pelota_y - 10;
			cargar_fondo();
			cargar_bandera();
			cargar_pelota();

		}
	}

	function abajo()
	{
		if(pelota_y <=450)
		{
			pelota_y = pelota_y + 10;
			console.log("posicion, X =  " + pelota_x + " , Y = "+pelota_y);
			cargar_fondo();
			cargar_bandera();
			cargar_pelota();
		}
	}

	function izquierda()
	{
		if(pelota_x >5)
		{
			pelota_x = pelota_x - 10;
			cargar_fondo();
			cargar_bandera();
			cargar_pelota();
		}
	}

	function derecha()
	{
		if(pelota_x <=1050)
		{
			pelota_x = pelota_x + 10;
			console.log("posicion, X =  " + pelota_x + " , Y = "+pelota_y);
			cargar_fondo();
			cargar_fondo();
			cargar_bandera();
			cargar_pelota();
		}
	}

	function ganar(){
		if((pelota_x>=700) && (pelota_y>=342))
		{
		document.getElementById("mensaje").innerHTML="¡Lo lograste!";
	
		}
	}
	


