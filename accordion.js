document.addEventListener("DOMContentLoaded", function() {

var a;
(function () { 
let tab =document.querySelectorAll("#tab1-0");
tab.addEventListener("click", function(event) {
    

     for(var i =0; i<=tab.length; i++){
        let anwser =  document.getElementsByClassName('gs-faq__answer');
                         let answerIndex =  i+1;
                if(anwser[answerIndex].style.display == 'block'){
                    continue;
                }else{
        document.getElementsByClassName('gs-faq__answer')[i].style.display = 'none';
                }
    
 
}     
event.preventDefault();
}, false);


}());


});
