// JavaScript Document
 
 $(document).ready(function(e) {
    document.addEventListener("diviceready",function(){
		
		$('#izquierda').on("swipeleft",function(){
			navigator.notification. alert ("deslizo a la izquierda",function(){"Aplicacion7","Aceptar"});
			
});
	$('#derecha').on("swipeleft",function(){
			navigator.notification. alert ("¿Que quieres hacer?",function(opt){
				switch(opt) 
				{
					case 1:
					navigator.notification.beep(1);
					break;
					
					case 2:
					navigator.notification.vibrate(1000);
					break;
				}
			},"Aplicacion7","Beep,Vibar,Cancelar");
			
	});
	},false);
	
 });