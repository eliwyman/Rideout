// JavaScript Document

 <!-- Login Script -->
 
function check(form)/*function to check userid & password*/
{
	/*the following code checkes whether the entered userid and password are matching*/
	if(form.userid.value == "myuserid" && form.pswrd.value == "mypswrd")
	{
	window.open('http://www.rideoutcommunications.com/software.html')/*opens the target page while Id & password matches*/
	}
	else
	{
	alert("Error Password or Username")/*displays error message*/
	}
}

    
<!-- End of Login Script -->

// Popup window code
function newPopup(url) {
	popupWindow = window.open(
		url,'popUpWindow','height=700,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
}

//<a href="JavaScript:newPopup('http://www.quackit.com/html/html_help.cfm');">Open a popup window</a> 