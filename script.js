var td = document.querySelectorAll("td");
var reset= document.querySelector("button");
var count =0;
var h1= document.querySelector("h1");
var body= document.querySelector("body");
for(var i=0; i<td.length ;i++){
	td[i].addEventListener("click", function(){
		count++;
		if(count%2 === 0){  
       this.textContent ="O";}
         else{
       this.textContent ="X";
      
      }


   
	});


}
       for(var i=0; i<td.length ;i++){
	td[i].addEventListener("click", function(){

     	if(td[0].textContent===td[1].textContent && td[0].textContent === td[2].textContent){
	         h1.classList.add("win");
	         h1.textContent= td[0].textContent + " WINS";
	         for(var j=0;j<3;j++){
	         	td[j].classList.add("boxred");
	         	
	         }
}

if(td[6].textContent === td[7].textContent && td[6].textContent === td[8].textContent){
             h1.classList.add("win");
	         h1.textContent= td[6].textContent + " WINS";
	         for(var j=6;j<9;j++){
	         	td[j].classList.add("boxred");
	         }

}
if(td[3].textContent === td[4].textContent && td[3].textContent === td[5].textContent){
             h1.classList.add("win");
	         h1.textContent= td[3].textContent + " WINS";
	         for(var j=3;j<6;j++){
	         	td[j].classList.add("boxred");
	         }
}
if(td[0].textContent === td[4].textContent && td[0].textContent === td[8].textContent){
             h1.classList.add("win");
	         h1.textContent= td[4].textContent + " WINS";
             td[0].classList.add("boxred");
             td[4].classList.add("boxred");
             td[8].classList.add("boxred");

	     }
 if(td[2].textContent === td[4].textContent && td[2].textContent === td[6].textContent){
             h1.classList.add("win");
	         h1.textContent= td[2].textContent + " WINS";
             td[2].classList.add("boxred");
             td[4].classList.add("boxred");
             td[6].classList.add("boxred"); }


 if(td[0].textContent === td[3].textContent && td[0].textContent === td[6].textContent){
             h1.classList.add("win");
	         h1.textContent= td[0].textContent + " WINS";
             td[0].classList.add("boxred");
             td[3].classList.add("boxred");
             td[6].classList.add("boxred");

	     }

  if(td[1].textContent === td[4].textContent && td[1].textContent === td[7].textContent){
             h1.classList.add("win");
	         h1.textContent= td[1].textContent + " WINS";
             td[1].classList.add("boxred");
             td[4].classList.add("boxred");
             td[7].classList.add("boxred");

	     }

if(td[2].textContent === td[5].textContent && td[2].textContent === td[8].textContent){
             h1.classList.add("win");
	         h1.textContent= td[2].textContent + " WINS";
             td[2].classList.add("boxred");
             td[5].classList.add("boxred");
             td[8].classList.add("boxred");

	     }




   });
}