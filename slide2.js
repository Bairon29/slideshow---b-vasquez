var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n)
{
	showDivs(slideIndex +=n);
}

function showDivs(n)
{
	var i;
	var x = document.getElementsByClassName("slide");
	var y = document.getElementsByClassName("slide1");
	if(n> x.length)
	{
	slideIndex = 1;
	}
	if(n<1)
	{
	slideIndex = x.length;
	}
	for(i=0; i<x.length;i++)
	{
	x[i].style.display = "none";
	y[i].style.display = "none";
	
	}
	x[slideIndex-1].style.display = "block";
	y[slideIndex-1].style.display = "block";
	document.body.style.background = "#f3f3f3 url('HTML test/ring.jpg') fixed";
	if(slideIndex-1 == 1)
	{
		document.body.style.background = "#f3f3f3 url('HTML test/anabel.jpg') fixed";
	}
	if(slideIndex-1 == 2)
	{
		document.body.style.background = "#f3f3f3 url('HTML test/saw.jpg') fixed";
	}
	if(slideIndex-1 == 3)
	{
		document.body.style.background = "#f3f3f3 url('HTML test/ghost.jpg') fixed";
	}
	if(slideIndex-1 == 4)
	{
		document.body.style.background = "#f3f3f3 url('HTML test/insidious.jpg') fixed";
	}
	if(slideIndex-1 == 5)
	{
		document.body.style.background = "#f3f3f3 url('HTML test/conjuuring.jpg') fixed";
	}
	
	}

	