//  chpter no 1:

//  Answer no 1.
alert("Hi, Welcome to our Website\nWe have got something for you\n Let's Go!");

//  Answer no 2. 
alert("Error! please enter a valid password")

// Answer no 3.
alert("Welcome to JS Land...\nHappy Coding!")

// Answer no 4. 
alert("Welcome to JS Land...\nPrevent this page from creating additional dialogs.")

//Answer no 5. 
alert("\nHello... I can run JS through my web browser's console")

// Answer no 6. 
alert ("my name")

// Answer no 7 . Practice placement of <script></script> element in following sections of your project in exercise:
// yes I tried javascript code is running a b c d section of the question. 

// chapter no 2:

// Answer no 1:
var userName;

//  Answer no 2:
var myName = "Hafsa khan";

// Answer no 3:
var message;
message = "Hello World";
alert(message);

// Answer no 4:
var stdName = "Hafsa khan";
var stdAge = "20 year old!";
var certification = " Certified Mobile Application Development";
alert(stdName);
alert(stdAge);
alert(certification);

// Answer no 5:
var item = "PIZZA";
 alert(item +"\nPIZZ\nPIZ\nPI\n\P");

 // Answer no 6:
var email = "hafsakhan7776@gmail.com";
alert("My email address is " + email);

// Answer no 7:
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

// Answer no 8:
var displayBrowse = "Yah! I can write HTML content through JavaScript";
document.write(displayBrowse);

// Answer no 9:
var designOfLine =  "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(designOfLine);

// chapter no 3:

// Answer no 1:
var age = 20;
alert( "I am " + age + " year old")

// Answer no 2:
var visitedTime = 14;
alert("You have visited this site " + visitedTime + " times");

// Answer no 3:
var birthYear = 2004;
document.write("My birth year is " + birthYear)
document.write("<br>")


// Answer no 4:
 var store = " Big Store"
var visitorName = "John Doe";
var productTitle = " Shoes"
var Quantity = "5";

document.write( visitorName + " ordered " + Quantity + " " + productTitle + " on " + store);


// chapter no 4:

// Answer no 1:
var name  , age , bloodGroup
// Answer no 2:
var My_Age;
var $myAccount
var _myBloodGroup
var legalVariable
var not_Illegal_Variable

// var  1_myAccount
// var %myPercentage
// var #BitcoinHash
// var ~transaction
// var +addition

// Answer no 3:

document.write(`A variable can use contain : lettres,____. numbers <br><br>`)
document.write(`variable must begin : letters,___.<br><br>`)
document.write(`variable names are case sensitive <br><br>`)
document.write(`variable names should not be JS keywords<br><br>`)

// chapter no 5:


//  Answer no 1:

var firstNumber = parseInt(prompt("Enter First Number : "))
var secondNumber = parseInt(prompt("Enter Second Number : "))
var sum = firstNumber + secondNumber
document.write(" Sum of " + firstNumber + " and " + secondNumber + " is " + sum)
document.write("<br>")


// Answer no 2:
// For Subtraction
var firstNumber = parseInt(prompt("Enter First Number : "))
var secondNumber = parseInt(prompt("Enter Second Number : "))
var subtract = firstNumber - secondNumber
document.write(" Subtraction of " + firstNumber + " and " + secondNumber + " is " + subtract)
document.write("<br>")

// For Multiplication 
var firstNumber = parseInt(prompt("Enter First Number : "))
var secondNumber = parseInt(prompt("Enter Second Number : "))
var Multiplication = firstNumber * secondNumber
document.write(" Multiplication of " + firstNumber + " and " + secondNumber + " is " + Multiplication)
document.write("<br>")

// Division
var firstNumber = parseInt(prompt("Enter First Number : "))
var secondNumber = parseInt(prompt("Enter Second Number : "))
var Division = firstNumber / secondNumber
document.write(" Divsion of " + firstNumber + " and " + secondNumber + " is " + Division)
document.write("<br>")

// Modulus
var firstNumber = parseInt(prompt("Enter First Number : "))
var secondNumber = parseInt(prompt("Enter Second Number : "))
var modulus = firstNumber % secondNumber
document.write(" Modulus of " + firstNumber + " and " + secondNumber + " is " + modulus)
document.write("<br>")
document.write("<br>")
document.write("<br>")

// Answer no 3:
var myAge = 23
document.write("Value after variable declaration is  " + myAge)
document.write("<br>")
myAge = 5
document.write('Initial Value is : ' +  myAge)
document.write("<br>")
myAge++
document.write('Value after increment is  ' +  myAge)
document.write("<br>")
myAge = myAge+7
document.write("Value after addition is : " + myAge)
document.write("<br>")
myAge--
document.write('Value after decrement is  ' +  myAge)
document.write("<br>")
myAge = myAge/3
document.write("The reminder is : " + myAge)

// Answer no 4:
var oneTicket = 600
var costOfFiveTickets = oneTicket*5
document.write("Total Cost to buy  a 5 tickets to a movie is " + costOfFiveTickets+"PKR") 

// Answer no 5:
 var x = parseInt(prompt("Enter any number of your choice : "))
 for(i=1;i<11;i++){
    document.write(x +" " + "*" + " " + i + " "+ "=" + " " + x*i)
    document.write("<br>")
 }
 // Answer no 6:
 var celsiusTemprature = prompt("Enter a Celsius Temparature")
 var Fahrenheit =  (celsiusTemprature*9/5)+32;
document.write(celsiusTemprature+"<sup>0</sup>C " + "is "+Fahrenheit +"<sup>0</sup>F")
document.write("<br>")
var FahrenheitTemprature = prompt("Enter a Fahrenheit Temparature")
var celsius = (FahrenheitTemprature -32)*5/9
document.write(FahrenheitTemprature+"<sup>0</sup>F " + "is " +celsius + "<sup>0</sup>C")
document.write("<br>")

// Answer no 7: 
var itemOnePrice = 650
var itemSecondPrice = 100
var itemOneQuantity = 3
var itemSecondQuantity = 7
var shippingCharges = 100
document.write("<h1>Shopping Cart</h1>")
document.write("price of item 1 is " + itemOnePrice)
document.write("<br>")
document.write("Quantity of item 1 is " + itemOneQuantity)
document.write("<br>")
document.write("price of item 2 is " + itemSecondPrice)
document.write("<br>")
document.write("Quantity of item 2 is " + itemSecondQuantity)
document.write("<br>")
document.write("Shipping charges " + shippingCharges)
document.write("<br>")
var totalCost =  itemOnePrice*itemOneQuantity+itemSecondPrice*itemSecondQuantity+shippingCharges
document.write("Total cost of your order is : " +totalCost)

// Answer no 8:
var totalMarks = 980
var MarksObtained = 804
var percentage = (MarksObtained*100)/totalMarks;
document.write("Total Marks: " + totalMarks)
document.write("<br>")
document.write("Obtained Marks: " + MarksObtained)
document.write("<br>")
document.write("percentage: "+ percentage+"%")

// Answer no 9:
var usDollars = 10
var saudiRiyals = 25
usDollars = usDollars*104.80
saudiRiyals = saudiRiyals*28
totalCurrency = usDollars+saudiRiyals
document.write("<h1>Currency in PKR</h1>")
document.write("<br>")
document.write("<br>")
document.write("Total Currency in PKR: " + totalCurrency)

// Answer no 10:
var num = 35+ 5 *10/2
document.write(num)

// Answer no 11:
var currentYear = prompt("Enter Current year: ")
var birthYear = prompt("Enter birth year: ")
var age = currentYear - birthYear
document.write("Current year :" + currentYear)
document.write("<br>")
document.write("Birth year :" + birthYear)
document.write("<br>")
document.write("Your age is :" + age)

// answer no 12:
var radius = prompt("What is the radius of a circle? ")
var circumference = 2*(3.142)* radius
var area = 3.142 * radius*radius
document.write("<h1>The Geometerizer</h1>")
document.write("<br>")
document.write("Radius of Circle: " + radius)
document.write("<br>")
document.write("The Circumference is : " + circumference)
document.write("<br>")
document.write("The Area is: " + area)

// answer no 13:
var favouriteSnack = "Chocolate chip"
var currentAge = 20
var maximumAge = 30
var estimatedPerDay = 3
var needSnacks = (maximumAge - currentAge)* estimatedPerDay;
 document.write("<h1>The Lifetime Supply Calculator</h1>")
document.write("<br>")
document.write("Favourite Snack: " + favouriteSnack)
document.write("<br>")
document.write("Current Age " + currentAge)
document.write("<br>")
document.write("Estimated Maximum Age: " +  maximumAge)
document.write("<br>")
document.write("Amount of snack pe day: " + estimatedPerDay)
document.write("<br>")
document.write("You will need " + needSnacks + " " + favouriteSnack + " to last you untill the ripe old age of " + maximumAge)


































































