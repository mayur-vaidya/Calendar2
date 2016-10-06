$(document).ready(function(){
  monthName();
  dropDown();
  dropYear();
  weekDays();
  monthDates();
  // $("a").on("click", function() {
  //   clickedDate = $(this).attr('data-date');
  //   dayFinder();
  //
  //   //console.log(clickedDate);
  // });
  //window.setTimeout(function() {
    //document.getElementById("dayArea").innerHTML = "";

  //},1000);
});


var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var year = 2000;
var month = 0;
var clickedDate;
var totalDays = [];
function monthName(){
  var today = new Date();
  today.setFullYear(year);
  //if(year % 4 != 0 && month == 2){ month -= 1;}
  today.setDate(1);
  today.setMonth(month);
  var newMonth = today.getMonth();
  var newYear = today.getFullYear();
  year = newYear;

  month = newMonth;
  document.getElementById("monthName").innerHTML = monthNames[newMonth] + " " + newYear;
  // choosenYear(newYear);
  // choosenMonth(newMonth);
}

function weekDays() {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var elements = document.getElementsByTagName("td");
  for(var i = 0; i < 7; i++)
  {
    elements[i].innerHTML = days[i];
  }
}

function monthDates(){
  var currentDate = new Date();
  currentDate.setFullYear(year);
  currentDate.setMonth(month);
  var firstDay = currentDate.setDate(1);
  var start = new Date(firstDay).getDay();
  var one = month + 1;
  currentDate.setMonth(one);
  var lastDay = currentDate.setDate(0);
  var end = new Date(lastDay).getDate();
  var i = 1;
  var k = 1;
  var m;
  start += 1;
  m = "<table align='center'><tr>";
  if(start > 1){
    for (var j = 1; j < start; j++, k++){
      m += "<td class='fullDates1'>";
      m += "</td>";
    }
  }

  for( i = i; i <= end; i++, k++)
  {

    m += "<td class='fullDates'><a class='date-clicker' data-date='";
    m += i
    m +="'";
    //m +="onclick='dayFinder("
    //m += i;
    //m +=")'";
    m += ">";
    m += i;
    m +="</a></td>";

    if(k%7 === 0){
      m += "</tr><tr>";
    }
  }
m += "</tr></table>";
document.getElementById("dates").innerHTML = m;
$("a").bind("click", function() {
  clickedDate = $(this).attr('data-date');
  dayFinder();

  //console.log(clickedDate);
});
}

function dropDown(){
  var d = document.getElementsByTagName("option");
  for(var i=0; i<12; i++){
  d[i].innerHTML = monthNames[i];
  }
}

function dropMonth(){
  var d = document.getElementById("monthDrop").value;
  var selectedMonth = parseInt(d);
  month = selectedMonth;
  monthName();
  monthDates();
  //console.log(typeof(a));
}

function dropYear(){
  var m = "<select onchange='yearDrop()' id='dropYear'>";
  for(var i = 2000; i <= 2050; i++){
    m += "  <option value='";
    m += i;
    m += "'>";
    m += i;
    m += "</option>";
  }
 m += "</select>"
 document.getElementById("yearDown").innerHTML = m;

  }

  function yearDrop(){
    var d = document.getElementById("dropYear").value;
    var selectedYear = parseInt(d);
    year = selectedYear;
    monthName();
    monthDates();
  }

  function present(){
    var d = new Date();
    document.getElementById("currentDay").innerHTML = d;
  }

  // function selector(i){
  //   var date = i;
  //   return date;
  //
  //   //console.log(date);
  // }

  // function choosenYear(years){
  //   var choiceYear = years;
  //   return choiceYear;
  //   //console.log(choiceYear);
  // }
  //
  // function choosenMonth(months){
  //   var choiceMonth = months;
  //   return choiceMonth;
  //   //console.log(choiceMonth);
  // }

  function dayFinder() {
    //var clickedDate = i;
    var clickedMonth = month;
    var clickedYear = year;
    //console.log(clickedDate+" "+clickedMonth+" "+clickedYear);
    var selectorDate = new Date();
    selectorDate.setFullYear(clickedYear);
    selectorDate.setMonth(clickedMonth);
    selectorDate.setDate(clickedDate);
    console.log(selectorDate);
    var clickedDay = selectorDate.getDay();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("dayArea").innerHTML = "Selected Date's days are: ";
    totalDays.push(selectorDate);
    if(totalDays.length == 2)
    {
      //var compareDate = new Date();
      if(totalDays[0].getTime() > totalDays[1].getTime())
      {
        $("#dayArea").empty();
        $("#dayArea").append("The input is not valid!!! Please enter dates in increasing order.");
      }
      else{
      var current;
      var oneDay = 24*60*60*1000;
      var diffDays = Math.round(Math.abs((totalDays[0].getTime() - totalDays[1].getTime())/(oneDay)));
      //console.log(diffDays);
      var dateArray = [];
      selectorDate.setTime(totalDays[0].getTime());
      var day = selectorDate.getDay();
      for(var a = 0;a <= diffDays; a++){
        dateArray[a] = day;
        if(dateArray[a] > 6) {
          dateArray[a] -= 7;
        }
        day++;
        //console.log(dateArray);
      }
      // if(totalDays[0].getDate() > totalDays[1].getDate())
      // {
      // }
      if(dateArray.length < 7){
       for(var v = 0; v < dateArray.length ; v++){
        current = dateArray[v];
          $("#dayArea").append(days[current]+" ");
          console.log();
       }}
       else{
         for(var v = 0; v < days.length ; v++){
            $("#dayArea").append(days[v]+" ");
         }
        // console.log(days);
       }
     }
    }
    if(totalDays.length > 2){
      totalDays = [];
      dateArray = [];
    }
  }


function loader(){

}

  //console.log("2");
  //  $("a").click(function(){
  //    console.log("1");
  //  });

  //   var clickedDate = $(this).attr('data-date');
  //   console.log(clickedDate);
  //   //dayfinder();
  // });
