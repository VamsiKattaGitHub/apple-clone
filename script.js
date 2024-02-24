function onhover(){
  document.getElementById('inner-store').style.display='block';
  document.getElementById('disappear').style.display='none';
  document.getElementById('buy').style.display='none';
  document.getElementById('first-img').style.filter='blur(10px)';
  document.getElementById("outer-down-bar").style.display='none';
}
function mousedown(){
  document.getElementById('inner-store').style.display='none';
  document.getElementById('disappear').style.display='block';
  document.getElementById('buy').style.display='block';
  document.getElementById('first-img').style.filter='blur(0)';
  document.getElementById("outer-down-bar").style.display='block';
}
function iMac()
{
  document.getElementById('inner-store-two').style.display='block';
  document.getElementById('disappear').style.display='none';
  document.getElementById('buy').style.display='none';
  document.getElementById('first-img').style.filter='blur(10px)';
  document.getElementById("outer-down-bar").style.display='none';
}
function iMacMousedown(){
  document.getElementById('inner-store-two').style.display='none';
  document.getElementById('disappear').style.display='block';
  document.getElementById('buy').style.display='block';
  document.getElementById('first-img').style.filter='blur(0)';
  document.getElementById("outer-down-bar").style.display='block';
}