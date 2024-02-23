/*
Take the start code for the Shopping Cart Project and Debug through it
Then complete the shopping cart by adding REMOVE buttons that performs the opposite to the Add Button
Please remember if you remove - to prevent from going into negative quantities
Also add a Checkout Button that calculates the total price of items in the Shopping cart and places the total on the page (make a new function for this ).
You are done!
*/

var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalQty = 0;
var totalOrderAmt = 0;


//Using addEventListener() method:
//document.getElementById("checkOut").addEventListener("click", checkOut);

    //Using onClick method: document.getElementById("addIt").onclick = addTheThing;
    //document.getElementById("checkOut").onclick = checkOut;

        //Using variable && addEventListener:
            //var placeOrder = document.getElementById("placeOrder");
            //placeOrder.addEventListener("click", placeOrder);


function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];

    //totalQty += quantities[x];

    totalOrderAmt += prices[x];
    totalQty = totalQty + 1;
    //totalQty += quantities[x];

    display_all();
}

//add REMOVE buttons that performs the opposite to the Add Button
function remove_selection(x) {
    console.log(x);
    if (quantities[x] > 0) {
        quantities[x] = quantities[x] - 1;
        totals[x] = prices[x] * quantities[x]
        totalOrderAmt -= prices[x];
        totalQty = totalQty - 1;
    } else {
        //prevent from going into negative quantities
        alert("Quantity cannot be less than 0")
    }
    // quantities[x] = quantities[x] - 1;
    //totals[x] = prices[x] * quantities[x];
    //totalOrderAmt -= prices[x];
    //totalQty = totalQty - 1;

    display_all();
}

function display_all() {
    var myTable = "<table><th style='width: 30px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 30px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 30px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 30px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 30px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 30px; color: red; text-align: center;'>Add Item</th>";
    myTable += "<th style='width: 30px; color: red; text-align: center;'>Remove Item</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 30px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 30px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 30px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 30px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 30px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button style='margin: 6px 22px;' onclick='add_selection(" + i + ")'>+</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>-</button></td>";
    }

    myTable += "</table>";
    myTable += `<br/><p>You have <b>${totalQty}</b> items in your shopping cart.</p>`;
    myTable += `<p>Total Order Amount: <b>R${totalOrderAmt.toFixed(2)}</b>.</p>`;
    //myTable += "<p>Total: " + totalOrderAmt + "</p>";
    myTable += "<td><button onClick='checkOut(" + totalOrderAmt +")'>Check Out </button></td>";

    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;

}

window.onload = function() {
    display_all();
}

//Also add a Checkout Button that calculates the total price of items in the Shopping cart and places the total on the page (make a new function for this ).
function checkOut(x) {
    alert(`Total Order Amount = R${x.toFixed(2)}.`);
}

window.onload = function() {
    display_all();
}

