const talkingCalendar = function(date) {
let x = date.split('/');
switch(x[1]){
  case '01':
    x[1] = "January";
    break;
    case '02':
      x[1] = "February";
      break;
      case '03':
      x[1] = "March";
      break;
      case '04':
      x[1] = "April";
      break;
      case '05':
      x[1] = "May";
      break;
      case '06':
      x[1] = "June";
      break;
      case '07':
      x[1] = "July";
      break;
      case '08':
      x[1] = "August";
      break;
      case '09':
      x[1] = "September";
      break;
      case '10':
      x[1] = "October";
      break;
      case '11':
      x[1] = "November";
      break;
      case '12':
      x[1] = "December";
      break;
  default:
}

switch(x[2]){
  case '01':
    x[2] = "1st";
    break;
    case '02':
      x[2] = "2nd";
      break;
      case '01':
    x[2] = "3rd";
    break;
    default:
      x[2] = x[2] + "th";

}
let y = x[1] + " " + x[2] + ", " + x[0];
return y;
};




console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));



// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987