const navo2 = document.querySelector('.navo-2');

navo2.addEventListener('click' ,onclick)
function onclick(e){
  
var dropdown = document.querySelector('.mob-header');
if (dropdown.style.display === 'none'){
    dropdown.style.display = 'flex';
}  else {
    dropdown.style.display = 'none';
}

}
