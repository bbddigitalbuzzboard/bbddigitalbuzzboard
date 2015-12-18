/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!DIGITAL BUZZBOARD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
TITLE: Digital Buzzboard
AUTHOR: Mitchell Ungar
DATE: November 27 2015
VERSION: 2.0.1

What this javascript does is allow the webpage display a Date and time that always is running.
*/
/*Beginning of Date function*/

function initDate() {
  /*an Array of months and days*/
  var dayName = new Array("Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
  var monName = new Array("January", "February", "March", "April", "May", "June", "July", "August",
   "September", "October","November","December");

   /*A variable being used to get the current date*/
   var now = new Date();
   /*Gets the months index, but isn't starting at 0 like Array, so +1 to make it correct month */
   var thisMonth = now.getMonth() + 1;
   /*The display string that is being sent to the index.html*/
   var dtString = monName[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
   /*Sending information to the HTML's <h1> tag called dtField*/
   document.getElementById("dtField").innerHTML = dtString;

   /*iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii Background Pictures iiiiiiiiiiiiiiiiiiiiiiii*/

   /*Allows the months to change the background picture*/
   var z = new Image();
   if(thisMonth == 1) {
     z.src = "Pictures/Januarybg.jpg";
   }
   else if(thisMonth == 2) {
     z.src = "Pictures/Februarybg.jpg";
   }
   else if(thisMonth == 3) {
     z.src = "Pictures/Marchbg.jpeg";
   }
   else if(thisMonth == 4) {
     z.src = "Pictures/Aprilbg.jpg";
   }
   else if(thisMonth == 5) {
     z.src = "Pictures/Maybg.jpg";
   }
   else if(thisMonth == 6) {
     z.src = "Pictures/Junebg.jpg";
   }
   else if(thisMonth == 7) {
     z.src = "Pictures/Julybg.jpg";
   }
   else if(thisMonth == 8) {
     z.src = "Pictures/Augustbg.jpg";
   }
   else if(thisMonth == 9) {
     z.src = "Pictures/Septemberbg.jpg";
   }
   else if(thisMonth == 10) {
     z.src = "Pictures/Octoberbg.jpg";
   }
   else if(thisMonth == 11) {
     z.src = "Pictures/Novemberbg.jpg";
   }
   if(thisMonth == 12) {
     z.src = "Pictures/Decemberbg.jpg";
   }
   /*Adds the month to the listing and shows new background*/
   //document.body.background= z.src;
   z.setAttribute("width","100%");
   z.setAttribute("height",'100%');

   document.getElementById('body').background = z.src;
}
/*End of Date Function*/
/*Beginning of showTheTime function*/
function showTheTime() {
  /*Creating a current date variable*/
  var now = new Date();
  /*String that is being sent to the HTML page*/
  var theTime = showTheHours(now.getHours()) +
  showZeroFilled(now.getMinutes()) + showZeroFilled(now.getSeconds())
  + showAmPm();
  /*Sending the String tot he HTML page*/
  document.getElementById("showTime").innerHTML = theTime;
  /*start the showTheTime function ever 1 second increment time on display*/
  setTimeout("showTheTime()", 1000);
  /*Javascript runs on a 24 hour clock, this displays 1-12 for the HTML*/
  function showTheHours(theHour) {
    if(theHour == 0) {
        return 12;
      }
      if (theHour < 13) {
        return theHour;
      }
      return theHour-12;
    }
  /*anything before 10 seconds gets a 0 before it*/
  function showZeroFilled(inValue) {
    if (inValue > 9) {
      return ":" + inValue;
    }
    return ":0" + inValue;
  }
  /*puts AM or PM at the end of the time*/
  function showAmPm() {
    if(now.getHours() < 12) {
      return " am";
    }
    return " pm";
  }
}
/*  jQuery ready function. Specify a function to execute when the DOM is fully loaded.  */
$(document).ready(

  /* This is the function that will get executed after the DOM is fully loaded */
  function () {
    /*Creates the first datepicker*/
    $( "#datepicker" ).datepicker({
      changeMonth: true,//this option for allowing user to select month
      changeYear: true //this option for allowing user to select from year range
    });
    /*Creates the second datepicker*/
    $( "#datepicker2" ).datepicker({
      changeMonth: true,//this option for allowing user to select month
      changeYear: true //this option for allowing user to select from year range
    });
    /*Creates third datepicker*/
    $( "#datepicker3" ).datepicker({
      changeMonth: true,//this option for allowing user to select month
      changeYear: true //this option for allowing user to select from year range
    });
    $( "#datepicker4" ).datepicker({
      changeMonth: true,//this option for allowing user to select month
      changeYear: true //this option for allowing user to select from year range
    });
    $( "#datepicker5" ).datepicker({
      changeMonth: true,//this option for allowing user to select month
      changeYear: true //this option for allowing user to select from year range
    });
  }
);
function eventHandler() {
  //This function grabs values from the URL
  function qs(search_for) {
    var query = window.location.search.substring(1);
    var parms = query.split('&');
    for (var i=0; i<parms.length; i++) {
      var pos = parms[i].indexOf('=');
      if (pos > 0  && search_for == parms[i].substring(0,pos)) {
        var newURI = decodeURIComponent(parms[i].substring(pos+1))
        newURI = newURI.replace(/\+/g, " ");
        return newURI;
      }
    }
    return "";
  }
    //Displaying what youtube video is going through video
    var videos = qs("youtubeURL");
    //console.log(videos);
    // create youtube player
    var player;
    function onYouTubePlayerAPIReady() {
        player = new YT.Player('vid-box', {
          height: '600',
          width: '640',
          videoId: videos,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
    }
    // autoplay video
    function onPlayerReady(event) {
        event.target.playVideo();
    }
    // when video ends
    function onPlayerStateChange(event) {
        if(event.data === 0) {
            //Clear the entire div
            document.getElementById('vid-area').innerHTML = "";
            //Recreate Divs
            document.getElementById('vid-area').innerHTML = "<div id='vid-box'></div>";
            if(qs("radioInstagram") == "slideshow"){
              //Allowing slideshow to happen
              //SnapWidget
              document.getElementById('vid-area').innerHTML = '<iframe src="http://snapwidget.com/sc/?u=YmJkY2FuYWRhfGlufDY0MHwzfDN8fHllc3wyMHxub25lfG9uU3RhcnR8eWVzfG5v&ve=111215" id="instagram-frame" title="Instagram Widget" class="snapwidget-widget" allowTransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:600px; height:400px"></iframe>';
              setTimeout(switchDisp,70000);
            }
            //Allowing tiles to happen
            if(qs("radioInstagram") == "tile"){
              document.getElementById('vid-area').innerHTML = '<iframe src="http://widget.websta.me/in/bbdcanada/?s=200&w=3&h=2&b=0&p=5&sb=off" allowtransparency="true" frameborder="0" scrolling="no" id="instagram-frame" style="border:none;overflow:hidden;width:615px; height: 410px" ></iframe> <!-- websta - websta.me -->';
              setTimeout(switchDisp,20000);
            }

            //Replaying the video at end of video
            if(qs("radioInstagram") == "none"){
            switchDisp();
            }
            if(qs("youtubeSlide") == "yes"){
              if(qs("youtubeURL2") != ""){
                ytSlideshow();
              } else {
                console.log("No youtube 2");
                switchDisp();
              }
            }
        }
    }

    function switchDisp(){
      //Create new video divs
      document.getElementById('vid-area').innerHTML = "";
      document.getElementById('vid-area').innerHTML = "<div id='vid-box'></div>";
      player = new YT.Player('vid-box', {
        height: '600',
        width: '640',
        videoId: videos,
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var player2;
var videos2 = qs("youtubeURL2");
function onYouTubePlayerAPIReady2() {
    player2 = new YT.Player('vid-box-2', {
      height: '600',
      width: '640',
      videoId: videos2,
      events: {
        'onReady': onPlayerReady2,
        'onStateChange': onPlayerStateChange2
      }
    });
}
// autoplay video
function onPlayerReady2(event) {
    event.target.playVideo();
}
function onPlayerStateChange2(event) {
    if(event.data === 0) {
      onPlayerReady2(event);
    }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function ytSlideshow(){
  //Create new video divs
  document.getElementById('vid-area').innerHTML = "";
  document.getElementById('vid-area').innerHTML = "<div id='vid-box'></div>";
  player = new YT.Player('vid-box', {
    height: '600',
    width: '640',
    videoId: videos2,
    events: {
      'onReady': onPlayerReady3,
      'onStateChange': onPlayerStateChange3
    }
  });
}
// autoplay video
function onPlayerReady3(event) {
    event.target.playVideo();
}
function onPlayerStateChange3(event) {
    if(event.data === 0) {
      document.getElementById('vid-area').innerHTML = "";
      document.getElementById('vid-area').innerHTML = "<div id='vid-box'></div>";
      onYouTubePlayerAPIReady();
    }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  function notificationHandler() {
    //Creating a counter
    var ctr = 0;
    //Creating a new notification division
    var notifcationDiv = document.getElementById("left-container");
    notifcationDiv.className = "notify";
    //Creating a list object tag
    var ul = document.createElement("ul");
    //Looping through all the elements creating each notification
    for (var i = 0; i < 10; i++) {
      ctr++;
      var li = document.createElement("li");
      li.className = "notList";
      var strNotification = "not" + ctr;
      if (qs(strNotification) != "") {
        //Putting the notification in the li elements
        li.appendChild(document.createTextNode(qs(strNotification)));
        //Putting the li element into the ul element
        ul.appendChild(li);
        //Putting the ul element into the div element
        notifcationDiv.appendChild(ul);
        //As you can see everything just gets added to eachother
        //to create a new section that cant be changed(static)
      }
    }

  }
  function pictureHandler() {
  //Creating all img elements for events
  var img1 = document.createElement('img');
  var img2 = document.createElement('img');
  var img3 = document.createElement('img');
  var img4 = document.createElement('img');
  var img5 = document.createElement('img');
  /*Creating new variables for each title and content piece
  Later work on dynamic with JAVA remotes*/
  var eventTitle1 = document.createElement("H1");
  var eventTitle2 = document.createElement("H1");
  var eventTitle3 = document.createElement("H1");
  var eventTitle4 = document.createElement("H1");
  var eventTitle5 = document.createElement("H1");

  var eventContent1 = document.createElement("H3");
  var eventContent2 = document.createElement("H3");
  var eventContent3 = document.createElement("H3");
  var eventContent4 = document.createElement("H3");
  var eventContent5 = document.createElement("H3");
  //Creating the vidbox youtube element
  document.getElementById("vid-box").innerHTML = qs("youtubeURL");


  /*Adding classes to the event variables so you can use CSS*/
  eventTitle1.className = "eventTitle";
  eventTitle2.className = "eventTitle";
  eventTitle3.className = "eventTitle";
  eventTitle4.className = "eventTitle";
  eventTitle5.className = "eventTitle";

  eventContent1.className = "eventContent";
  eventContent2.className = "eventContent";
  eventContent3.className = "eventContent";
  eventContent4.className = "eventContent";
  eventContent5.className = "eventContent";
  //Grabbing all the values of the datepicker and placing them into an array
  var arr1 = qs("datepicker").split('/');
  var arr2 = qs("datepicker2").split('/');
  var arr3 = qs("datepicker3").split('/');
  var arr4 = qs("datepicker4").split('/');
  var arr5 = qs("datepicker5").split('/');
  //Setting all the attributes for each picture
  img1.setAttribute("height", "100");
  img1.setAttribute("width", "100");
  img1.className = "calIMG";

  img2.setAttribute("height", "100");
  img2.setAttribute("width", "100");
  img2.className = "calIMG";

  img3.setAttribute("height", "100");
  img3.setAttribute("width", "100");
  img3.className = "calIMG";

  img4.setAttribute("height", "100");
  img4.setAttribute("width", "100");
  img4.className = "calIMG";

  img5.setAttribute("height", "100");
  img5.setAttribute("width", "100");
  img5.className = "calIMG";


/*All the if statements that handle the day picture for events1*/
//Creating counter for dynamic pictures
var ctr = 0;
for (var i = 0; i < 31; i++) {
  //Incrementing Counter for each day
  ctr++;
  //Creating dynamic text
  var strDateIcon1 = "0" + ctr;
  var strDateIcon2 = ctr;
  var strPictureURL = "Pictures/calendar_" + ctr + ".png";
  //Determining what day each section is.
  if(arr1[1] == strDateIcon1 || arr1[1] == strDateIcon2){
    img1.setAttribute("src", strPictureURL);
    img1.setAttribute("alt",ctr);
    img1.setAttribute("height", "100");
    img1.setAttribute("width", "100");
    img1.className = "calIMG";
  }
 //Determining what day each section is.
  if(arr2[1] == strDateIcon1 || arr2[1] == strDateIcon2){
    img2.setAttribute("src", strPictureURL);
    img2.setAttribute("alt",ctr);
    img2.setAttribute("height", "100");
    img2.setAttribute("width", "100");
    img2.className = "calIMG";
  }
 //Determining what day each section is.
  if(arr3[1] == strDateIcon1 || arr3[1] == strDateIcon2){
    img3.setAttribute("src", strPictureURL);
    img3.setAttribute("alt",ctr);
    img3.setAttribute("height", "100");
    img3.setAttribute("width", "100");
    img3.className = "calIMG";
  }
  //Determining what day each section is.
  if(arr4[1] == strDateIcon1 || arr4[1] == strDateIcon2){
    img4.setAttribute("src", strPictureURL);
    img4.setAttribute("alt",ctr);
    img4.setAttribute("height", "100");
    img4.setAttribute("width", "100");
    img4.className = "calIMG";
  }
  //Determining what day each section is.
  if(arr5[1] == strDateIcon1 || arr5[1] == strDateIcon2){
    img5.setAttribute("src", strPictureURL);
    img5.setAttribute("alt",ctr);
    img5.setAttribute("height", "100");
    img5.setAttribute("width", "100");
    img5.className = "calIMG";
  }
}
var ctr2 = 0;
//Creating element if there is data
if (qs("title") != "") {
  ctr2++;
  var e1divId = 'event1Div' + ctr2;
  var event1Div = document.createElement('div');
  event1Div.className = 'rcs';
  event1Div.id = e1divId;
  document.getElementById("right-container").appendChild(event1Div);
  eventTitle1.appendChild(document.createTextNode(qs("title")));
  event1Div.appendChild(img1);
  event1Div.appendChild(eventTitle1);
}
//Creating element if there is data
var ctr3 = 0;
if (qs("title2") != "") {
  ctr3++;
  var e2divId = 'event1Div' + ctr3;
  var event2Div = document.createElement('div');
  event2Div.className = 'rcs';
  event2Div.id = e2divId;
  document.getElementById("right-container").appendChild(event2Div);
  eventTitle2.appendChild(document.createTextNode(qs("title2")));
  event2Div.appendChild(img2);
  event2Div.appendChild(eventTitle2);
}
//Creating element if there is data
var ctr4 = 0;
if (qs("title3") != "") {
  ctr4++;
  var e3divId = 'event1Div' + ctr4;
  var event3Div = document.createElement('div');
  event3Div.className = 'rcs';
  event3Div.id = e3divId;
  document.getElementById("right-container").appendChild(event3Div);
  /*Putting the TITLE1 and DATE1 onto the screen*/
  eventTitle3.appendChild(document.createTextNode(qs("title3")));
  event3Div.appendChild(img3);
  event3Div.appendChild(eventTitle3);
}
//Creating element if there is data
var ctr5 = 0;
if (qs("title4") != "") {
  ctr5++;
  var e4divId = 'event1Div' + ctr5;
  var event4Div = document.createElement('div');
  event4Div.className = 'rcs';
  event4Div.id = e4divId;
  document.getElementById("right-container").appendChild(event4Div);
  /*Putting the TITLE1 and DATE1 onto the screen*/
  eventTitle4.appendChild(document.createTextNode(qs("title4")));
  event4Div.appendChild(img4);
  event4Div.appendChild(eventTitle4);
}
//Creating element if there is data
var ctr6 = 0;
if (qs("title5") != "") {
  ctr6++;
  var e5divId = 'event1Div' + ctr6;
  var event5Div = document.createElement('div');
  event5Div.className = 'rcs';
  event5Div.id = e5divId;
  document.getElementById("right-container").appendChild(event5Div);
  /*Putting the TITLE1 and DATE1 onto the screen*/
  eventTitle5.appendChild(document.createTextNode(qs("title5")));
  event5Div.appendChild(img5);
  event5Div.appendChild(eventTitle5);
}
}
function titlePicture() {
var titleInfo = qs("titleHeader");
var titleLabel = document.getElementById("titleLabel")
titleLabel.innerHTML = titleInfo;
}

function twitter() {
  var notificationTwitter = document.getElementById('left-container');
  //This is the twitter widget customized to be put into the div only when the user chooses to
  //And when there are no notifications to be said.
  //If statement decides whether or not it should create the twitter feed
  if(qs("twitterSwitch") == "On"){
      //The element by id is customized as well. everything displays where the <a> tag is
      //So instead of having a static <a> tag I am using a dynamic one where I can place it
      //in any div I choose by using its id.
      document.getElementById("left-container").innerHTML = "<a class='twitter-timeline' href='https://twitter.com/bbdcanada' data-chrome='noscrollbar nofooter noborders noheader' data-widget-id='672834180640718848'>Tweets by @bbdcanada</a>";
      //The rest is what twitter gave me for the widget that I got off their site.
      var js,fjs=document.getElementsByTagName("script")[0],
      p=/^http:/.test(document.location)?'http':'https';
      if(!document.getElementById("twitter-wjs")){
        js=document.createElement("script");
        js.id="twitter-wjs";js.src=p+"://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js,fjs);
  }
}
}
//Calling handler so they happen when the screen loads
twitter();
notificationHandler();
pictureHandler();
titlePicture();
if(qs("youtube1Switch") == "yes" && qs("youtubeURL") != ""){
onYouTubePlayerAPIReady();
}
if(qs("youtube2Switch") == "yes" && qs("youtubeURL2") != ""){
  if(qs("youtube1Switch") != "yes"){
    //Clear the entire div
    document.getElementById('vid-area').innerHTML = "";
    onYouTubePlayerAPIReady2();
  }else{
    onYouTubePlayerAPIReady2();
  }

}

}
ScrollRate = 175;

function scrollDiv_init() {
  //iiiiiiiiiiiiiiiiiiiiiiiiiii Right Container iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
  //Defining Element
	DivElmnt = document.getElementById('right-container');
	ReachedMaxScroll = false;
	DivElmnt.scrollTop = 0;
	PreviousScrollTop  = 0;
	ScrollInterval = setInterval('scrollDiv()', ScrollRate);
  //iiiiiiiiiiiiiiiiiiiiiiiiii Left Container iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
  //Defining Element
  DivElmnt2 = document.getElementById('left-container');
  ReachedMaxScroll2 = false;
  DivElmnt2.scrollTop = 0;
  PreviousScrollTop2  = 0;
  ScrollInterval2 = setInterval('scrollDiv()', ScrollRate);
}

function scrollDiv() {
//iiiiiiiiiiiiiiiiiiiiiiiii Right Container iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
	if (!ReachedMaxScroll) {
		DivElmnt.scrollTop = PreviousScrollTop;
		PreviousScrollTop++;
		ReachedMaxScroll = DivElmnt.scrollTop >= (DivElmnt.scrollHeight - DivElmnt.offsetHeight);
	}
	else {
		ReachedMaxScroll = (DivElmnt.scrollTop == 0)?false:true;
		DivElmnt.scrollTop = PreviousScrollTop;
		PreviousScrollTop--;
	}
//iiiiiiiiiiiiiiiiiiiiiii Left Container iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
  if (!ReachedMaxScroll2) {
    DivElmnt2.scrollTop = PreviousScrollTop2;
    PreviousScrollTop2++;
    ReachedMaxScroll2 = DivElmnt2.scrollTop >= (DivElmnt2.scrollHeight - DivElmnt2.offsetHeight);
  }
  else {
    ReachedMaxScroll2 = (DivElmnt2.scrollTop == 0)?false:true;
    DivElmnt2.scrollTop = PreviousScrollTop2;
    PreviousScrollTop2--;
  }
}

function pauseDiv() {
	clearInterval(ScrollInterval);
  clearInterval(ScrollInterval2);
}

function resumeDiv() {
	PreviousScrollTop = DivElmnt.scrollTop;
	ScrollInterval    = setInterval('scrollDiv()', ScrollRate);
  PreviousScrollTop2 = DivElmnt2.scrollTop;
	ScrollInterval2    = setInterval('scrollDiv()', ScrollRate);
}


/*Javascript isn't smart enough to have two window.onload functions being used
So I created a function the runs the other three functions so all I have to do
is call windows.onload once*/
function start() {
  initDate();
  showTheTime();
  eventHandler();
  scrollDiv_init();
}

/*Starts the date and time functions at the same time*/
window.onload = start;
