# SWAF
SWAF is a markup language for mobile platforms to develop graphical web application. It has its own compiler, tags, elements and properties. It supports all standard browsers. The SWAF markup language helps the user to code in an easy and efficient way. By embedding the SWAF compiler into the HTML file, the user can make use of SWAF tags, elements and properties to develop a mobile web application. SWAF elements support Touch events with all the given elements. The user can easily customize the theme for any application by modifying the specific CSS file. For creating an element using HTML5, CSS, JavaScript the user needs to have more knowledge in front-end web development and need to write more lines of code, but in SWAF we can accomplish the same with very few lines of code. As a result, a user can easily develop mobile web application for different platforms with few lines of code.
#Objective
The objective of SWAF has an ability to write an efficient mobile web application in a very less time with a few lines of code and small file in size with a high level of design and special library for themes. Comfortable application for interacting with other programming languages.  Suitable mobile web application for touch devices without having a good acknowledgement from front-end web development also no need a big web storage for storing SWAF files if you don’t have the acknowledgement above SWAF with a few days can learn this markup language  and make a produce to Soran University like how MIT university have Scratch Script.
#Features in SWAF
1.	SWAF have its own compiler, tags and properties.
2.	It has a special library for theme.
3.	It supports touch events.
4.	The application produced by SWAF is a cross platform application. 
5.	SWAF has two philosophies.
•	Short 
•	Complete
	<btn t=”n”> </btn> or   <ezzat.button type=”normal”> </ezzat.button> 
6.	It is non-case sensitive markup language. For example: There is no difference 	between <BTN> and </btn>
7.	The other feature of SWAF is the small size of compiler. It is just 60kb and 	easy to load and compile. The compiler has been designed is such a way that 	its performance is high. 

#Limitations in SWAF
1.	You cannot write SWAF tags as a separate file with special extension because 	the SWAF tags need to be embedded into a HTML file since we haven’t 	web browser to recognize the SWAF extension. All standard web 	browsers 	only compile the HTML file and create element by the tags wrote inside the 	HTML file. In case if we want to fix this limitation we should create our own 	 browser and define SWAF extension on the browser.
3.	The HTML tags was not working on SWAF because the SWAF was embedded 	into html and SWAF compiler only recognize SWAF tags if found html tag on 	SWAF the compiler assume it is not important thing and not compile the tags.
4.	It works perfectly with server side scripting languages but with client side 	scripting it haven’t problem.
#How to using this markup language?
SWAF has its own compiler. The developer should reference the compiler source as a External JavaScript file  then add ezzat tag into the body tag and write the SWAF tags inside ezzat tag like below code 

<!DOCTYPE html>
<html>
<head>
<script src="SWAF.js"></script>
<link rel="stylesheet" href="dark.css">
</head>
<body>
	<ezzat >
		<!—Write SWAF tags in this area 
	</ezzat>
</body>
</html>

Also if you want use theme should be reference theme source file and set the theme name to t property in ezzat tag for this example I used dark theme 
Warning! Avoid using class property because it is not working only you can specified elements via ID property 
NOTE! SWAF is case sensitive Markup language do difference between CAPITAL And SMALL
NOTE! Please when you use SWAF put IMG folder and swaf.js compiler into on destination then reference swaf.js file 
Theme Template: if you want write your own theme we are prepared the template you can just modify the codes as you want also we commented the codes possible to modify inside Theme-templet.css file on Bag folder
#How to write custom theme?
Answer - When you try to write your own theme follow that phrases
* replace your theme name with the end of the element class names
For example in this example I want write my own theme with AVIN name
.SWAF_N_BTN_THEME_AVIN,
.SWAF_A_BTN_THEME_AVIN
Also do this for all elements
Note// the theme name should be CAPITAL like AVIN not avin
* uncomment the css properties and set your favorite value
*when you write your own Theme then references your theme file as CSS file
And set the value of T or Theme property inside ezzat tag as your theme name like this example
And put the theme you was created to themes folder
<!DOCTYPE html>
<html>
<head>
<script src="../src/swaf.js"></script>
<link rel="stylesheet" href="../themes/AVIN.css">
</head>
<body>
	<ezzat  t="AVIN" >
	</ezzat>
</body>
</html>
* save the file with your theme name
Like AVIN.CSS
