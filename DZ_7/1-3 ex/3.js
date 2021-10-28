  let divP = document.querySelector("#divP");
  let inputEl = document.querySelector("input");
  let hide = document.querySelector("#hide");

  function addEl() {
      let newP = document.createElement("p");
      let pText = inputEl.value;
      newP.className = "pEl";       
      newP.innerText = pText ;
      divP.prepend(newP);      
      inputEl.value = "";
    };
 
  inputEl.addEventListener("input", () => {
    hide.style.visibility = "visible";
    let inputvalue = inputEl.value;
    if(inputvalue == ""){
      hide.style.visibility = "hidden";
    }
  });

  hide.addEventListener("click", (ev) => {
    ev.preventDefault();
    hide.style.visibility = "hidden";   
    let pElList = divP.getElementsByClassName("pEl");
    let el=[...pElList];
    if (pElList.length<5) {
      addEl();
    }
    else {      
      divP.innerHTML = "";
      el.pop();
      for(let i=0;i<el.length; i++){
        divP.innerHTML += `<p class = "pEl">${el[i].innerHTML}</p>`;
      }
      addEl();
    }
  });

    

    


    
  


