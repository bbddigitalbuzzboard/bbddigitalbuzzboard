/*
Author: Mitchell Ungar
Date: November 27th 2015
This code deals with the login area of index.html
NOTE
People can still get at the info through the debugger, but it will keep most People
out.
There are four users. Admin, Jessica, Kurt, and Julie. So far all do the same job,
but maybe in the future they might have different jobs and maybe use a database
to hold values so the can work seperately.
*/
function tricky_win_close() {
    window.close();
    window.opener = top;
}
function login() {
  var user = document.getElementById('username');
  var pass = document.getElementById('password');

  var coruser = "Admin";
  var corpass = "Mitchell";

  var coruser2 = "Jessica";
  var corpass2 = "BJessica";

  var coruser3 = "Julie";
  var corpass3 = "EJulie";

  var coruser4 = "Kurt";
  var corpass4 = "KKurt";

  if(user.value == coruser) {
    if(pass.value == corpass){
      tricky_win_close();
      window.open("editbuzzboardindex.html");
    }
  }
  if(user.value == coruser2) {
    if(pass.value == corpass2){
      tricky_win_close();
      window.open("editbuzzboardindex.html");

    }
  }
  if(user.value == coruser3) {
    if(pass.value == corpass3){
      tricky_win_close();
      window.open("editbuzzboardindex.html");
    }
  }
  if(user.value == coruser4) {
    if(pass.value == corpass4){
      tricky_win_close();
      window.open("editbuzzboardindex.html");
    }
  }


}
