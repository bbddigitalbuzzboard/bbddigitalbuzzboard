# Benefits By Design Digital Buzzboard
MitchellUngar.github.io
-----------------------
Getting Started
---------------
* After you have created a account, create a github io page. The page has to be the same
  name as your username, and is not https. So it is not protected, DO NOT PUT SENSITIVE INFORMATION!!!

* Once these steps are finished you are free to create a simple website. Copy the repo you just
  created on your desktop and add a index.html file. Create a simple website that says 'hello world'
  just to make sure your github io is working.

* After the simple html page is created push it back up to your repo and then you will see your github
  has been updated. If all steps have been followed correctly then you will be able to type in
  http://username.github.io into your URL and go into your new published website.(Page should say
  'hello world'

# Using the Site

Editing
-------
0. Go to http://mitchellungar.github.io
0. Sign in using your privledges.
0. Do the edits that you want to do.
0. Add a couple notifications, or events, maybe even a youtube embed.

Name the page with the top textbox. Then on the left hand side decide whether or
not you want twitter in your site. After that you have to choose what kind of
instagram you want to have on the site. Tile, slideshow, or none are our options.
If you choose none then the video will loop automatically.
After that add the youtube code into the bar. Then go to the right div and name
all you events. Put a date on all the events. Then after that you have to hit
submit. Submit and move to the next page. When you are on the display page there
will be a button on the right side of the screen that will allow you to load in
all the birthdays and anniversaries.

Publishing the site
-------------------
0. git status
0. git add .
0. git commit -m'Whatever changes you made'
0. git push -u origin master
0. Username
0. Password

Specification Sheet
-------------------
0. For logging in, if you have forgot your password come to me and I can change it to whatever you need.
0. There is a text limit to the URL since that is what switches information between pages. But with typing a lot of information I still haven't reached it's max.
0. You may have to zoom in or out to fit the page depending on the screen.
0. When choosing a date it will always delete everytime you visit the edit page. This is so that there is no problems when double clicking the event box.
0. When Naming an event it is preferably below 35 characters, but it can go over.
0. The excel file that loads in the data, I changed it's layout so it is easier to add people to it.
0. You can load in data from a csv, or text file for the notifications. It just reads each line as a new notification.
0. The largest dimension of background picture is 2048x1254. It just fits the size of the div.
0. Mininum size for background picture is 1800x675 because that is the size of the full div.
0. Make sure the day clock is correct. Most of the program uses that information.

Detailed Specs:
---------------
Main Page
---------
* Login: Under 25 characters
* Call: Under 25 characters
* Notifications: Under 50 characters
* Events: Under 35 characters
* Title Picture: size 125 x 600
* Background Picture: More then 1800 x 675
* Youtube Video: 640xAnyHeight
* Webcam Video: 640x360
