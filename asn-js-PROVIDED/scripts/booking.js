/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var daysSelected = 0;
var totalCost = 0;
var costPerDay = 35;



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
const dayButtons = [
    document.getElementById("monday"), 
    document.getElementById("tuesday"),
    document.getElementById("wednesday"),
    document.getElementById("thursday"),
    document.getElementById("friday")
];

function init()
{
    for (i = 0; i < dayButtons.length; i++)
{
    dayButtons[i].addEventListener("click", updateSelected);
}
}
init()
function updateSelected(evt)
{
    if(evt.currentTarget.classList.contains("clicked"))
    {
        return; 
    }
    else
    {
        evt.currentTarget.classList.add("clicked");
        daysSelected ++; 
    }
    console.log("Days selected: " + daysSelected);
    recalculate();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

var clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", reset)

function reset()
{
    for (j = 0; j < dayButtons.length; j++)
    {
        dayButtons[j].removeEventListener("click", updateSelected)
        dayButtons[j].classList.remove("clicked"); 
    }
    totalCost = 0;
    daysSelected = 0;
    console.log("Days Selected: " + daysSelected)
    console.log("Cost per day: " + costPerDay)
    recalculate()
    init()
}


var halfButton = document.getElementById("half");
var fullButton = document.getElementById("full");
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfButton.addEventListener("click", resetDailyRate)

function resetDailyRate()
{
    if (fullButton.classList.contains("clicked"))
    {
        fullButton.classList.remove("clicked");
        halfButton.classList.add("clicked");
        costPerDay = 20;
    }
    else if (halfButton.classList.contains("clicked"))
    {
        halfButton.classList.remove("clicked");
        fullButton.classList.add("clicked");
        costPerDay = 35;
    }
    console.log("Cost per day: " + costPerDay);
    recalculate()

}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullButton.addEventListener("click", resetDailyRate)




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
var costSpan = document.getElementById("calculated-cost");

function recalculate()
{
    totalCost = daysSelected * costPerDay;
    costSpan.innerHTML = totalCost;
    console.log("Total Cost: " + totalCost); 
}

