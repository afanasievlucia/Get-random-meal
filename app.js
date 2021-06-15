const url = "https://www.themealdb.com/api/json/v1/1/random.php";
const mealName = document.getElementById('mealName');
const foto = document.getElementById('image');
const country = document.getElementById('country')
const ingredients = document.getElementById('ingredients') 
const button = document.getElementById('button').addEventListener('click', getmeal);


async function getmeal() {
    try {
        const response = await fetch(`${url}`);
        if(response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            mealName.innerHTML = jsonResponse.meals[0].strMeal;
            foto.src = jsonResponse.meals[0].strMealThumb;
            country.innerHTML = jsonResponse.meals[0].strArea; 
            ingredients.innerHTML = jsonResponse.meals[0].strInstructions;
        }        
    }
    catch(error) {
        console.log(error);
    }
}