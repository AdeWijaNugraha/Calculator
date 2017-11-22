var inputLabel= document.getElementById('inputLabel');
function pushBtn(obj){
  var pushed = obj.innerHTML;
  if (pushed == '=') {
    inputLabel.innerHTML= eval(inputLabel.innerHTML);
  } else if (pushed == 'AC') {
    inputLabel.innerHTML='0';
  }else if (pushed == 'mod') {
    inputLabel.innerHTML+='%';
  }else if (pushed == '%') {
    inputLabel.innerHTML+='/100';
    inputLabel.innerHTML= eval(inputLabel.innerHTML);
  }else {
    if (inputLabel.innerHTML == '0') {
      inputLabel.innerHTML = pushed;
    }
    else {
      inputLabel.innerHTML+=pushed;
    }
  }
}
