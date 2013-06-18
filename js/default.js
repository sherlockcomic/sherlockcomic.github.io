$(document).ready(function(){

    Tick();

    function Tick() {
        var now = new Date();
        var futureDate = Date.parse("June 30, 2013 9:00:00");
        var timeRemaining = (futureDate - now);
        
        days  = Math.floor( timeRemaining / (1000*60*60*24) );
        hours = Math.floor( timeRemaining / (1000*60*60) );
        mins  = Math.floor( timeRemaining / (1000*60) );
        secs  = Math.floor( timeRemaining / 1000 );
        
        dd = days;
        hh = hours - days  * 24;
        mm = mins  - hours * 60;
        ss = secs  - mins  * 60;
        
        jQuery("#countdown-timer #days").html(dd);
        jQuery("#countdown-timer #hours").html(hh);
        jQuery("#countdown-timer #minutes").html(mm);
        jQuery("#countdown-timer #seconds").html(ss);
    }
    
    window.setInterval(Tick, 1000);

});
