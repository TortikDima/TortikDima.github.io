

const elements = document.querySelectorAll('.item__element')
for( let i = 0; i < elements.length ; i++){
  document.getElementById(`button${i+1}`).onclick = function(){
  document.getElementById(`button${i+1}`).classList.toggle('change')
 
  }
}


  document.querySelector('.close_button').onclick = function () {
    for( let i = 0; i < elements.length ; i++){
		document.getElementById(`button${i + 1}`).classList.remove('change')

	}
}
  
  
