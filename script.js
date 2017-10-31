

function onSubmit(){
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var name = document.getElementById("name").value;
    console.log(month);
    console.log(day);

    document.getElementById("image").innerHTML="<img src='img/"+ determineSign(month,day)+".png'>";

    if(determineSign(month,day)=="aquarius"||determineSign(month,day)=="aries"){
        return document.getElementById("output").innerHTML = "Hi " + name + "! You are an "+ determineSign(month,day)+ ".";
    }else{
        return document.getElementById("output").innerHTML = "Hi " + name + "! You are a "+ determineSign(month,day)+ ".";
    }

}
function determineSign(month, day) {
    var sign = ["aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn"];
    var i = 0;
    if(month == 1 && day <= 20){
        i=0;
    }
    if(month==2 && day<=18){
        i=0;
    }
    if(month==2 && day>=19){
        i=1;
    }
    if(month==3 && day<=20){
        i=1;
    }
    if(month==3 && day>=21){
        i=2;
    }
    if(month==4 && day<=19){
        i=2;
    }
    if(month==4 && day>=20){
        i=3;
    }
    if(month==5 && day<=20){
        i=3;
    }
    if(month==5 && day>=21){
        i=4;
    }
    if(month==6 && day<=20){
        i=4;
    }
    if(month==6 && day>=21){
        i=5;
    }
    if(month==7 && day<=22){
        i=5;
    }
    if(month==7 && day>=23){
        i=6;
    }
    if(month==8 && day<=22){
        i=6;
    }
    if(month==8 && day>=23){
        i=7;
    }
    if(month==9 && day<=22){
        i=7;
    }
    if(month==9 && day>=23){
        i=8;
    }
    if(month==10 && day<=22){
        i=8;
    }
    if(month==10 && day>=23){
        i=9;
    }
    if(month==11 && day<=22){
        i=9;
    }
    if(month==11 && day>=23){
        i=10;
    }
    if(month==12 && day<=22){
        i=10;
    }
    if(month==12 && day>=23){
        i=11;
    }
    if(month==1 && day<=19){
        i=11;
    }

    return sign[i];
}

function determineDays(val) {

    document.getElementById("day").innerHTML="";


    if(val==4||val==6||val==9||val==11){
        for(i=1;i<=30;i++){
            document.getElementById("day").innerHTML += "<option value='" + i + "'>" + i + "</option>";
        }
    }

    if(val==1||val==3||val==5||val==7||val==8||val==10||val==12){
        for(i=1;i<=31;i++){
            document.getElementById("day").innerHTML += "<option value='" + i + "'>" + i + "</option>";
        }
    }

    if(val==2){
        for (i = 1; i <= 28; i++){
            document.getElementById("day").innerHTML += "<option value='" + i + "'>" + i + "</option>";
        }
    }


}