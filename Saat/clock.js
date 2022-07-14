// 
const Name=document.querySelector("#myName");
const myClock=document.querySelector("#myClock")


let UserName=prompt("İsim Soyisim?")
if (UserName.length>0){
    Name.innerHTML=UserName;
}

function getDayString(dayNumber){
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşaba', 'Perşembe', 'Cuma' , 'Cumartesi'];
    return days[dayNumber];
}


function getTimeAndDay(){
    const date = new Date();
    let currentTimeAndDate;

    const options = { hour12: false }
    currentTimeAndDate = `${date.toLocaleTimeString('tr-TR', options)} ${getDayString(date.getDay())}`;
    return currentTimeAndDate;

}


function showTime(){
    myClock.innerHTML = getTimeAndDay();
}


setInterval(showTime);