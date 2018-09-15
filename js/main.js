
$( document ).ready(function() {

	let left = 'left-copy-1tomany';
	let right = 'right-copy-1tomany';
	let rightb = 'right-copy-1tomanyb';
	let rightc = 'right-copy-1tomanyc';
	let rightd = 'right-copy-1tomanyd';
	let righte = 'right-copy-1tomanye';

	dragula([document.getElementById(left), 
		document.getElementById(right), 
		document.getElementById(rightb), 
		document.getElementById(rightc), 
		document.getElementById(rightd), 
		document.getElementById(righte)], {
	  copy: function (el, source) {
	  	el.id = randomId()
	    return source === document.getElementById(left)
	  },
	  accepts: function (el, target) {
	    getConnectors();
	    return target !== document.getElementById(left)
	  }
	});

});

var matchIds = [];


function getConnectors (){
	var connectors = document.getElementsByClassName('connector');
	connectors = Array.from(connectors);
	connectors.forEach(function(element) {
	element.addEventListener('click', getId);
	})
	//.addEventListener("click", modifyText, false);
}

function getId(e){
	var id = e.target.parentNode.id;	
	matchIds.push(id);
	if (matchIds.length > 2) {
		matchIds.length = 0;
	} 
	if (matchIds.length === 2){
		makeLines(matchIds);
	}
}


function makeLines(ids){
	console.log(ids[0]);
	console.log(ids[1]);
}
//from http://www.frontcoded.com/javascript-create-unique-ids.html
/**
   * Creates a string that can be used for dynamic id attributes
   * Example: "id-so7567s1pcpojemi"
   * @returns {string}
   */
function randomId() {
  return 'id-' + Math.random().toString(36).substr(2, 16);
};
