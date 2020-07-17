function day (cc,yy,mm,dd){
    return ((((cc/19)+1*cc-1)+((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7)+1
 }
 function dateakan() {
    var cc = (document.getElementById("CC").value); 
    var yy = (document.getElementById("YY").value);
    var mm = (document.getElementById("MM").value);
    var dd = (document.getElementById("DD").value);
    var gender=(document.getElementById("Id5").value);

var result=day(cc,yy,mm,dd).toFixed(); 
var males = ["Kwasi", "kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var females = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; 