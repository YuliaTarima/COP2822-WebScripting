Textbook: Hands-On Project 2-1

In this project, you will create an application to convert temperature readings between Fahrenheit and Celsius and between Celsius and Fahrenheit. 
The formula to convert a Fahrenheit temperature to the Celsius scale is


Celsius = (Fahrenheit − 32)/1.8

and the formula to convert a Celsius temperature to the Fahrenheit scale is

Fahrenheit = Celsius × 1.8 + 32

Users will enter a value in a Celsius or Fahrenheit input box, 
press the Tab key and have the other input box automatically show 
the temperature reading in the other scale. 
A preview of the completed page is shown in Figure 2-30. 
Please use CSS to have your project look as engaging 
as Figure 2-30 in the textbook.

Submissions:

1. Text Box Submission (50 points):
Use vocabulary from Chapter 2. (5 sentences minimum)
What was the most enjoyable or challenging part of this assignment?  
Please share a new coding concept you learned, how it was used
in your coding project, and where the concept is explained in the textbook.

2-8a. Talks about working with input control values to retrieve values 
from the web form. It further clarifies that input control values are text 
strings even if they appear as numbers. Knowing this, I had to convert a text 
string by enclosing the text within the parseFloat(value) 
(also, Number() could be used) function to return the numeric value.

2-3. Using Built-in JavaScript Functions talks about the built-in functions 
created for our convenience. In addition to the parseFloat() function, 
mentioned above, I used isNaN() function to determine whether 
the input is not a number and to throw a message at the user to make them 
alert may the issue arise.

In 2-2a I learned that the most direct way to associate a function with 
an event is by using an event handler. However, I prefer not to mix HTML 
and JavaScript code in the same document, and one drawback of adding 
event handlers as HTML attributes is that they place JavaScript code 
within the HTML file. 

Part 2-2b teaches that if your application requires multiple functions 
to be assigned to the same event, you can use an event listener.

That is exactly what I needed to use since I used conversion on "tab", 
but also challenged myself to convert both ways when a new value 
is entered in either of the input fields.

Section 2-8c talks about using the change event with web form controls,
and how it is triggered only when the control loses the focus by either 
tabbing out or clicking outside of it.

I wanted a more dynamic effect, so I used input instead of change event 
because it fires every time the user types, pastes, or modifies the input. 
Being triggered instantly as the value changes, makes it best for real-time 
validation or live updates.

I used the extra check to listen when the user leaves the input filed
using the blur event listener to ensure the accurate final conversion
for the last entered value (both ways).

I also challenged myself to use custom CSS and CSS variables.

2. Upload: Video file (60 seconds minimum)

Show your project working
Show your code - be sure to have comments in your code.
Describe your coding process - as it relates to the assignment Hands-On Project 2-1.
Show the comments as you are describing the code
What is your code doing?
Using vocabulary from the chapter, describe your code in the video.

This portion is 50 points

Total 100 points

Hint:
https://www.youtube.com/watch?v=gNrmdXciNIE Links to an external site.