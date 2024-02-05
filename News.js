let key = "3acbf06560e549cfa7a7c4d89ca80fb9";
let data = document.querySelector(".data");
let go = document.getElementById("go");
let inputData = document.getElementById("inputData");

const getData = async (input) => {
  let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
  let jsonData = await res.json();
  console.log(jsonData.articles);

  data.innerHTML="";
  jsonData.articles.forEach(function(article){
    console.log(article)


  let divs = document.createElement("div");
  divs.classList.add("card");
  data.appendChild(divs)

  divs.innerHTML=`
  <img src="${article.urlToImage}" alt="">
  <h3>"${article.title}"</h3>
  <p>"${article.description}"</p>

  `
  })

}

window.addEventListener("load",function(){
  getData("india")
})
go.addEventListener("click", function(){
  let inputText = inputData.value;
  getData(inputText); 
})

