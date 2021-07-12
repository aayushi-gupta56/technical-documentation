const menubar= document.querySelector('.menu');
const btn = document.getElementsByClassName('smartphone-menu-trigger')[0];
function myFunction(e){
    e.preventDefault();
    (function(){
        toggleClass('active');
        })();
        function toggleClass (className){
          var active=menubar.classList.contains(className);
           if(active){
                menubar.classList.remove(className);
                btn.style.background = "orangered";
           }
          else{
                menubar.classList.add(className);
                btn.style.background = "black";
          }
         }
     }