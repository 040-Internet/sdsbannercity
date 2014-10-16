$(document).ready(function(){

  var eventdate = new Date("2014-12-12");

  countDown();
  setInterval(countDown, 500);

  function countDown() {
    var diff = eventdate - new Date();
    var days = parseInt(diff/(1000*3600*24));
    var hours = parseInt((diff - days*1000*3600*24)/(1000*3600));
    var mins = parseInt((diff - days*1000*3600*24 - hours*1000*3600)/(1000*60));
    var secs = parseInt((diff - days*1000*3600*24 - hours*1000*3600 - mins*1000*60)/1000);
    $("#counter .days").text(days);
    $("#counter .hours").text(hours);
    $("#counter .minutes").text(mins);
    $("#counter .seconds").text(secs);
  }
});