document.addEventListener("DOMContentLoaded", function() {

var a;
(function () { 

document.querySelector("#tab1-0").addEventListener("click", function(event) {
    

     for(var i =0; i<=8; i++){
                if(document.getElementsByClassName('gs-faq__answer')[0].style.display == 'block'){
                    continue;
                }else{
        document.getElementsByClassName('gs-faq__answer')[i].style.display = 'none';
                }
    
 
}     
event.preventDefault();
}, false);
document.querySelector("#tab2-1").addEventListener("click", function(event) {


    for(var i =0; i<=8; i++){
        if(document.getElementsByClassName('gs-faq__answer')[1].style.display == 'block'){
            continue;
        }else{
document.getElementsByClassName('gs-faq__answer')[i].style.display = 'none';
        }


}           
event.preventDefault();
}, false);
document.querySelector("#tab3-2").addEventListener("click", function(event) {
 
    for(var i =0; i<=8; i++){
        if(document.getElementsByClassName('gs-faq__answer')[2].style.display == 'block'){
            continue;
        }else{
document.getElementsByClassName('gs-faq__answer')[i].style.display = 'none';
        }


}           
event.preventDefault();
}, false);
document.querySelector("#tab4-3").addEventListener("click", function(event) {
    
    for(var i =0; i<=8; i++){
        if(document.getElementsByClassName('gs-faq__answer')[3].style.display == 'block'){
            continue;
        }else{
document.getElementsByClassName('gs-faq__answer')[i].style.display = 'none';
        }


}           
event.preventDefault();
}, false);
document.querySelector("#tab5-4").addEventListener("click", function(event) {
 
    for(var i =0; i<=8; i++){
        if(document.getElementsByClassName('gs-faq__answer')[4].style.display == 'block'){
            continue;
        }else{
document.getElementsByClassName('gs-faq__answer')[i].style.display = 'none';
        }


}             
event.preventDefault();
}, false);

document.querySelector("#tab6-5").addEventListener("click", function(event) {

    for(vart i =0; i<=8; i++){
        if(document.getElementsByClassName('gs-faq__answer')[5].style.display == 'block'){
            continue;
        }else{
document.getElementsByClassName('gs-faq__answer')[i].style.display = 'none';
        }


}        
    document.querySelector("#tab7-6").addEventListener("click", function(event) {

    for(var i =0; i<=8; i++){
        if(document.getElementsByClassName('gs-faq__answer')[6].style.display == 'block'){
            continue;
        }else{
document.getElementsByClassName('gs-faq__answer')[i].style.display = 'none';
        }


}   
            document.querySelector("#tab8-7").addEventListener("click", function(event) {

    for(var i =0; i<=8; i++){
        if(document.getElementsByClassName('gs-faq__answer')[7].style.display == 'block'){
            continue;
        }else{
document.getElementsByClassName('gs-faq__answer')[i].style.display = 'none';
        }


}   
    event.preventDefault();
    }, false);

}());


});
