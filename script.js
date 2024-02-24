function onhover(){
  document.getElementById('inner-store').style.display='block';
  document.getElementById('inner-store').style.transition='all 2s';
  document.getElementById('down-bar').style.display='none';
  document.getElementById('down-bar').style.paddingTop='12px';
  document.getElementById('disappear').style.display='none';
  document.getElementById('buy').style.display='none';
  document.getElementById('first-img').style.filter='blur(10px)';
}
function mousedown(){
  document.getElementById('inner-store').style.display='none';
  document.getElementById('down-bar').style.display='block';
  document.getElementById('disappear').style.display='block';
  document.getElementById('buy').style.display='block';
  document.getElementById('first-img').style.filter='blur(0)';
}