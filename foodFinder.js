const searchBtn = document.getElementById("order-search");
const mealList = document.getElementById("main-propositions");

//random number for price 
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

//event listeners
searchBtn.addEventListener('click', getMealList);

//get meals matching with ingredients in input



// to do: fix the problem of displaying only one result
function getMealList(){
    let searchInputTxt = document.getElementById("order-input").value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal =>{
                let rndInt = randomIntFromInterval(35, 99);
                html += `
                    <div class="proposition" data-id = "${meal.idMeal}">
                    <div class="food-img">
                        <img src="${meal.strMealThumb}" alt="pasta img">
                    </div>
                    <div class="food-content">
                        <div class="food-name">
                            <h3>${meal.strMeal}</h3>
                        </div>
                        <div class="food-read">
                            <p class="food-read--p">Read more</p>
                            <h3 class="slide-food slide-food--name">${meal.strMeal}</h3>
                            <div class="slide-food slide-food--description">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, aspernatur odit tempora enim minima quod a nemo culpa. Iste accusamus ratione excepturi, officiis ipsa magni architecto qui veniam ex voluptates!</p>
                            </div>
                            <p class="slide-food slide-food--price">${rndInt},-</p>
                        </div>
                    </div>
                `;
            });
        }
        mealList.innerHTML = html;
       
    });
}