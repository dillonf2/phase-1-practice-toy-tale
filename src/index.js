let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

document.addEventListener(`DOMContentLoaded`, ()=>{
  fetch(`http://localhost:3000/toys`)
  .then((res)=>{return res.json()})
  .then((data)=>{
    setTimeout(()=>{
      document.createElement(`div`).classList.add("card")
      d=document.querySelector(`.card`)
      d.append(`#toy-collection`)
      d.innerText=data
      console.log(data)}, 2000)
  })
  
})
