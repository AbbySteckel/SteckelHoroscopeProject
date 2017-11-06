var now = new Date();
console.log(now);
console.log(now.getMonth());
console.log(now.getDate());

function onSubmit(){
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var name = document.getElementById("name").value;
    console.log(month);
    console.log(day);

    document.getElementById("image").innerHTML="<img src='img/"+ determineSign(month,day)+".png'>";
    document.getElementById("birthday").innerHTML=isBirthday(month,day);

    if(determineSign(month,day)=="aquarius") {
        return document.getElementById("output").innerHTML = "Hi " + name + "! You are an " + determineSign(month, day) + ". " +
            "Career success, particularly involving writing, teaching, and other communication skills, could come your way today. " +
            "You may not be aware that it's coming, so it could be a bit difficult to handle at first. " +
            "Still, you've been working toward this goal for a long time, and you'll be glad to hear the news.";
    }

    if(determineSign(month,day)=="pisces"){
        return document.getElementById("output").innerHTML = "Hi " + name + "! You are a " + determineSign(month, day) + ". " +
            "Have you been trying to learn about a subject for a long time? Whatever you've been hoping to gain from it could come to you today. " +
            "If it's a business advantage, you've got it. If it's knowledge for its own sake, you know a lot by now.";
    }
    if(determineSign(month,day)=="aries") {
        return document.getElementById("output").innerHTML = "Hi " + name + "! You are an " + determineSign(month, day) + ". " +
            "Some interesting dreams could come to you tonight. Don't be fooled by confusing symbolism. " +
            "These dreams could shed light on business concerns you've been trying to work out. " +
            "Make a list of the symbols and see what they're trying to tell you. Then if it makes sense, act on it.";
    }
    if(determineSign(month,day)=="taurus"){
        return document.getElementById("output").innerHTML = "Hi " + name + "! You are a " + determineSign(month, day) + ". " +
            "A social event could put you in touch with an old friend or two you haven't seen for a long time. " +
            "You'll have a wonderful time catching up. In fact, you have more in common now than you did before. " +
            "If you're single, you might think of this person as a potential romantic partner.";
    }
    if(determineSign(month,day)=="gemini"){
        return document.getElementById("output").innerHTML = "Hi " + name + "! You are a " + determineSign(month, day) + ". " +
            "A lot of people could vie for your attention. Your ego will receive a much-needed boost from all the acknowledgment. " +
            "Don't be embarrassed or guilty. Everyone needs a pat on the back now and then. ";
    }
    if(determineSign(month,day)=="cancer"){
        return document.getElementById("output").innerHTML = "Hi " + name + "! You are a " + determineSign(month, day) + ". " +
            "Recent study of philosophical or spiritual matters might inspire you to express your insights creatively. " +
            "Whether you choose to write, make music, or paint pictures, you'll notice a difference in your style.";
    }
    if(determineSign(month,day)=="leo"){
        return document.getElementById("output").innerHTML = "Hi " + name + "! You are a " + determineSign(month, day) + ". " +
            "Your character is much on your mind right now, as you ask yourself what you are really made of. " +
            "As you walk through life today, try to do as much good as you can, though you may have to figure out a few things first.";
    }
    if(determineSign(month,day)=="virgo"){
        return document.getElementById("output").innerHTML = "Hi " + name + "! You are a " + determineSign(month,day) + ". " +
            "A social event could land you in the middle of a room full of writers, artists, and teachers. " +
            "You might not know any of them, but don't panic. " +
            "Just listen to what they have to say. Your interest could attract their attention, and you could make some new friends. ";
    }
    if(determineSign(month,day)=="libra"){
        return document.getElementById("output").innerHTML = "Hi " + name + "! You are a " + determineSign(month,day) + ". " +
            "If you've been reading about health and fitness and putting what you read into action, today you might suddenly feel the results of your efforts. " +
            "You feel physically and mentally strong, healthy, and energetic. ";
    }
    if(determineSign(month,day)=="scorpio"){
        return document.getElementById("output").innerHTML = "Hi " + name + "! You are a " + determineSign(month,day) + ". " +
            "Conversations feed your intellect and get your curiosity going. You'll feel very positive about whatever you choose to do."

    }
    if(determineSign(month,day)=="sagittarius"){
        return document.getElementById("output").innerHTML = "Hi " + name + "! You are a " + determineSign(month,day) + ". " +
            "Your phone may not stop ringing today. " +
            "Friends and family may have good news and interesting information to share, so you'll want to spend a lot of time talking with them."
    }
    if(determineSign(month,day)=="capricorn"){
        return document.getElementById("output").innerHTML = "Hi " + name + "! You are a " + determineSign(month,day) + ". " +
            "This is a great day to plan new projects. Your mind may be especially quick and full of ideas."
    }

}

function isBirthday(month,day){
    var month1=now.getMonth();
    var day1=now.getDate();
    if(month-1==month1 && day==day1) {
        return "Also, happy birthday!";
    }else{
        return " ";
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