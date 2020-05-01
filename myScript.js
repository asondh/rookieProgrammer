window.addEventListener('load',myScript);
function myScript() {
var name = prompt("Please enter your name below:");
if (name == null || name == "") {
document.getElementById("compareBtn").addEventListener("click", pinChecker2);
} else {
alert("Thank you!");
document.getElementById("compareBtn").addEventListener("click", pinChecker);
}
   
       function pinChecker() {
                 var p1 = document.getElementById("pin1");
        var p2 = document.getElementById("pin2");
        if (p1.value == 0 && p2.value == 0){
              
              alert (name + ", please enter both PINs before comparing.");
              
              
        }

else if (p1.length !== 64 || p2.length !== 64) {
            
            alert (name+", please enter a valid 64 character PIN in each field.");
            
        }
        else if (p1.value == p2.value) {
            
            alert (name+", PINs Match!");
            
        }
        
        else {
         
          alert (name+", PINs do not Match. Please try again.");
          
                          
        }
event.preventDefault();
        
      }

function pinChecker2() {
                 var p1 = document.getElementById("pin1");
        var p2 = document.getElementById("pin2");
        if (p1.value == 0 && p2.value == 0){
              
              alert ("Please enter both PINs before comparing.");
              
              
        }

else if (p1.length !== 64 || p2.length !== 64) {
            
            alert ("Please enter a valid 64 character PIN in each field.");
            
        }
        else if (p1.value == p2.value) {
            
            alert ("PINs Match!");
            
        }
        
        else {
         
          alert ("PINs do not Match. Please try again.");
          
                          
        }
event.preventDefault();
        
      }

}