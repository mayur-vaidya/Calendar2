var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var year = 2000;
var month = 0;
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

    m += "<td class='fullDates'>";
    m += i;
    m +="</td>";

    if(k%7 === 0){
      m += "</tr><tr>";
    }
  }
m += "</tr></table>";
document.getElementById("dates").innerHTML = m;
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


function loader(){
  monthName();
  dropDown();
  dropYear();
  weekDays();
  monthDates();
}
