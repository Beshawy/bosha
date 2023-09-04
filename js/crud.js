
let title= document.getElementById('formGroupExampleInput');
let price= document.getElementById('formGroupExampleInput2');
let ads= document.getElementById('submit');


let dataPro;
if(localStorage.product !=null){
    dataPro = JSON.parse(localStorage.product)
}else{
    dataPro=[];
}

submit.onclick= function(){
    let newpro={
        formGroupExampleInput: formGroupExampleInput.value,
        formGroupExampleInput2: formGroupExampleInput2.value 
    }

    dataPro.push(newpro);
    localStorage.setItem('product' , JSON.stringify(dataPro))
    console.log(dataPro)
    showData();
    clearData();
}

function clearData(){
    formGroupExampleInput.value= '';
    formGroupExampleInput2.value= '';
}

function showData(){
    let table = '';
  for (let i=0; i < dataPro.length;i++){
      table += `
      <tr>
          <td>${i}</td>
          <td>${dataPro[i].formGroupExampleInput}</td>
          <td>${dataPro[i].formGroupExampleInput2}</td>
          <td><button  class="btn btn-warning" onclick="deleteData(  ${i} )" id="delete">delete</button></td>
        </tr>
      `
      
  }
  document.getElementById('tbody').innerHTML= table;
  let btnDelete = document.getElementById('deleteAll');
  
   if(dataPro.length > 0){
      btnDelete.innerHTML = `
     <button onclick= "deleteAll()">delete All</button>
      `
   }else{
      btnDelete.innerHTML= '';
   }
  }
  showData();
  
  // delete
  
  function deleteData(i){
    dataPro.splice(i,1);
    localStorage.product = JSON.stringify(dataPro);
    showData(); 
  }
  
  function deleteAll(){
      localStorage.clear()
      dataPro.splice(0)
      showData();
  }