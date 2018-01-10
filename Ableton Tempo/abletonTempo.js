//Repitamos conceptos hasta que se nos queden
//Los objetos de @Live son accedidos mendiante rutas (PATHS) de acuerdo a LOM:
autowatch = 1; // ponemos autowatch para poder grabar desde un editor externo.

outlets = 1;

var liveObject = new LiveAPI("live_set"); 

function tempo() {
	var liveObject = new LiveAPI("live_set");
	var tempo = liveObject.get("tempo");
	outlet(0, tempo);//Send tempo for the outlet
}

function setTempo(elTempo){
	var liveObject = new LiveAPI("live_set");
	//Split the incoming signal from 20 to 999 (Ableton´s tempo limits.)
	if (elTempo > 20. && elTempo < 999.){
		liveObject.set("tempo", elTempo);
		log(elTempo);
	} 	
}

//Funcion de log para sacar los mensajes por la ventana MAX (cmd+m)
//log Function from Adam Murray (http://compusition.com).
function log() {
	for(var i=0,len=arguments.length; i<len; i++) {
		var message = arguments[i];
		if(message && message.toString) {
			var s = message.toString();
			if(s.indexOf("[object ") >= 0) {
				s = JSON.stringify(message);
			}
			post(s);
		}
		else if(message === null) {
			post("<null>");
		}
		else {
			post(message);
		}
	}
	post("\n");
}
 
log("___________________________________________________");
log("Grabado...");
log("Reload:", new Date);