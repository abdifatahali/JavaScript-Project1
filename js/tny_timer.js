"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Abdifatah Ali
   Date:   01/17/2020
*/

/* Call the showClock() function. */
showClock();

/* Insert a command that runs the showClockO function every second. */
setInterval("showClock()", 1000);


/* Create a function named showClock() that has no parameters.*/
function showClock() {
   /* Within the showClock() function declare a variables named thisDay, localDate and localTime*/
   var thisDay = new Date();
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();

   /* . Within the inner HTML of the page element with the ID currentTime, write the following code: <span>date</span><span>time</span>  */
   document.getElementById("currentTime").innerHTML =
      localDate + "<br />" + localTime;


   /* Call the nextjuly4() function using thisDay as the parameter value */
   var j4Date = nextJuly4(thisDay);
   /* Apply the setHours() 
   method to the j4Date variable to change the hours value to 9 p.m. */
   j4Date.setHours(21);

   /* Create variables named days, hrs, mins, and secs containing the days, hours, minutes, and seconds until 9 p.m.*/
   var days = (j4Date - thisDay) / (1000 * 60 * 60 * 24);

   var hrs = (days - Math.floor(days)) * 24;

   var mins = (hrs - Math.floor(hrs)) * 60;

   var secs = (mins - Math.floor(mins)) * 60;

   /* Change the text content of the elements with the IDs "dLeft", "hLeft", "mLeft", and "sLeft" to 
   the values of the days, hrs, mins, and secs variables rounded down to the next lowest integer. */
   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.floor(secs);
}


function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}
