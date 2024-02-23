let day = prompt("Enter your favorite day of the week:").toLowerCase();
let theResponse;
switch (day) {
    case "monday":
        theResponse = "Ack!";
        break;
    case "tuesday":
        theResponse = "Taco day!";
        break;
    case "wednesday":
        theResponse = "Halfway there!";
        break;
    case "Thursday":
        theResponse = "It’s the new Friday!";
        break;
    case "Friday":
        theResponse = "TGIF! Yeah!";
        break;
    case "Saturday":
        theResponse = "What a day!";
        break;
    case "Sunday":
        theResponse = "Sunday = Funday!";
        break;
    default:
        theResponse = "I haven’t heard of that one!";
        break;
}
alert(theResponse);
