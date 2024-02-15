var visible = false;
function showOrHideEmail(){
  if (visible){
    document.getElementById('email').innerHTML=" Show my Email";
    visible=false;
  }
  else{
    var myEmail="<a href='mailto:pashamsp" +"@"+
                "mail.uc.edu'>pashamsp"+"@"+"mail.uc.edu</a>";
    document.getElementById('email').innerHTML=myEmail;
    visible= true;
  }
}
