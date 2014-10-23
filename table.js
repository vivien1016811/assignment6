/*
   File: /~vchow/assignment6/table.js/
   Author: Vivien Chow, UMass Lowell Computer Science Student
   Course: 91.461 GUI Programming I
   E-mail: vivien_chow@student.uml.edu
   Assignment 6: Creating an Interactive Dynamic Table
   Date Created: October 21, 2014
   Description: This is to style the webpage.
   Updated by Vivien Chow on October 21, 2014 at 5:38 PM
*/

/*The following function is the main function used for this multiplication table.*/
$(document).ready( function() {
  /*Once the user submitted, the following function will be executed. */
  $("#frm").submit(function () {
    /*Clears everything from the previous run. */
    $("#result").html("");
    $("span[id^='err']").html("");
    
    var cStart = $("#colStartVal").val();
    var cEnd = $("#colEndVal").val();
    var rStart = $("#rowStartVal").val();
    var rEnd = $("#rowEndVal").val();
    
    /*Checking if the input is within the range of -100 to 100. */
    var flag = 0;
    if (cStart < -100 || cStart > 100) {
      $("#err1").html("Please enter an integer between -100 to 100.");
      flag = 1;
    }
    if (cEnd < -100 || cEnd > 100) {
      $("#err2").html("Please enter an integer between -100 to 100.");
      flag = 1;
    }
    if (rStart < -100 || rStart > 100) {
      $("#err3").html("Please enter an integer between -100 to 100.");
      flag = 1;
    }
    if (rEnd < -100 || rEnd > 100) {
      $("#err4").html("Please enter an integer between -100 to 100.");
      flag = 1;
    }
    
    /*Checking if the input is an integer. */
    if (!$.isNumeric(cStart)) {
      $("#err1").html("Please enter an integer.");
      flag = 1;
    }
    if (!$.isNumeric(cEnd)) {
      $("#err2").html("Please enter an integer.");
      flag = 1;
    }
    if (!$.isNumeric(rStart)) {
      $("#err3").html("Please enter an integer.");
      flag = 1;
    }
    if (!$.isNumeric(rEnd)) {
      $("#err4").html("Please enter an integer.");
      flag = 1;
    }
    
    /*If any of the validation failed, the table will not be generated. */
    if (flag == 1) {
      return false;
    }
    
    /*Convert the input into integers. */
    cStart = parseInt(cStart);
    cEnd = parseInt(cEnd);
    rStart = parseInt(rStart);
    rEnd = parseInt(rEnd);
    
    /*Create an array for column and row for easy printing. */
    var cArr = makeArr(cStart, cEnd);
    var rArr = makeArr(rStart, rEnd);
    
    /*Print out the result. */
    Output_result(cArr, rArr);
  });
});

/*The following function prints out the multiplication table. */
function Output_result(cArr, rArr) {

    var i = 0;
    var j = 0;
    
    /*The following lines are for printing out the first row of the table. */
    var firstrow = "<tr><td>*</td>";
    for (var j = 0; j < cArr.length; j++)
    {
      firstrow += "<td class='firstrow'>" + cArr[j] + "</td>";
    }
    firstrow += "</tr>"
    $("#result").append(firstrow);
    
    /*The following lines are for printing out the rest of the table. */
    for ( i = 0; i < rArr.length; i++)
    {
      var row = "<tr><td>" + rArr[i] + "</td>";
      for ( j = 0; j < cArr.length; j++)
      {
       row += "<td>" + rArr[i] * cArr[j] + "</td>";
      }
      row += "</tr>";
      $("#result").append(row);
    }
}

/*The following function creates an array. */
function makeArr(start, end){
  
  var array = [];
  
  /*Use abs to make sure the result is non-negative. */
  var arr_length = Math.abs(end - start);
  
  /*2 different cases as user may input a start value that is larger than the end value. */
  if (start < end) {
    for (var i = 0; i <= arr_length; i++) {
       array[i] = start;
       start = start + 1;
    }
  }
  else {
    for (var i = 0; i <= arr_length; i++) {
       array[i] = start;
       start = start - 1;
    }
  }
  return array;
  
}

