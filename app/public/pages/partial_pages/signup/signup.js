$(document).ready(function(){
  $("#pswd-confirm").on("keyup", function(){
    console.log("I've detected a change!")
    let pswd = $("#pswd-set").val()
    //console.log(pswd)
    let confirm = $("#pswd-confirm").val()
    //console.log(confirm)
    confirmPassword(pswd, confirm)
  })
});

const confirmPassword = (pswd, confirm) => {
  let pswdArr = pswd.split('');
  console.log(pswdArr)
  let confirmArr = confirm.split('');
  console.log(confirmArr)

  
}