function task(cost,ind){
  var user=document.getElementsByClassName("Input_number")[ind].value;
  document.getElementsByClassName("Input_number")[ind].value="";
  if(user==cost){
    document.getElementsByClassName("submit_page")[ind].style.display="inline";
  }
  else{
    document.getElementsByClassName("prompt_msg")[ind].innerHTML="Please enter correct cost";
  }
}