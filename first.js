const days1 = document.getElementById("days");
const hours1 = document.getElementById("hours");
const minutes1 = document.getElementById("minutes");
const seconds1 = document.getElementById("seconds");

setInterval(function countdown() {
    const deadline = new Date("sep 20, 2021 17:58:25").getTime();
    const now = new Date().getTime();
    // var t = deadline - now;
    // var day = Math.floor(t / (1000 * 60 * 60 * 24));
    // var hour = Math.floor((t % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    // var minute = Math.floor((t % (1000 * 60 * 60 * 24) / (1000 * 60*60)));
    // var second = Math.floor((t % (1000 * 60 * 60 * 24) / (1000*60)));
    
    var t = (deadline - now)/1000;
    var day = Math.floor(t / 60/60/24);
    var hour = Math.floor(t/60/60)% 24;
    var minute = Math.floor(t/60)%60;
    var second = Math.floor(t)%60;
    
    console.log(t);
    console.log(day);
    console.log(hour);
    console.log(minute);
    console.log(second);
    
    days1.innerHTML = kunal(day);
    hours1.innerHTML = kunal(hour);
    minutes1.innerHTML = kunal(minute);
    seconds1.innerHTML = kunal(second);
    function kunal(time){
        return (time<10 ? `0${time}`: time);
    }
    
},1000);

countdown();