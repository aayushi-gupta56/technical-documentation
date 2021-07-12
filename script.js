const menubar= document.querySelector('.menu');
const btn = document.getElementsByClassName('smartphone-menu-trigger')[0];
const li = menubar.getElementsByTagName('LI');

for(const item of li){
    item.addEventListener('click', function(event){
        menubar.classList.remove('active');
    });
}

function myFunction(e){
    var active=menubar.classList.contains('active');
           if(active){
                menubar.classList.remove('active');
                btn.style.background = "orangered";
           }
          else{
                menubar.classList.add('active');
                btn.style.background = "black";
          }
}