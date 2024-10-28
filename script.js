let selectedGender = "";
let selectedBodyType = "";
let selectedGoal = "";

// Start the journey
function startJourney() {
  document.getElementById("launch-page").style.display = "none";
  document.getElementById("gender-page").style.display = "block";
}

// Gender selection
function selectGender(gender) {
  selectedGender = gender.toLowerCase();  // Convert gender to lowercase
  console.log("Gender selected:", selectedGender);  // Log gender
  document.getElementById("gender-page").style.display = "none";
  showBodyTypeOptions();
}

// Show body type options based on gender
function showBodyTypeOptions() {
  const bodytypeOptions = document.getElementById("bodytype-options");
  bodytypeOptions.innerHTML = "";  // Clear previous options

  const bodyTypes = selectedGender === "male" 
    ? ["chubbymaletype.jpg", "skinnymaletype.jpg", "muscularmaletype.jpg"]
    : ["chubbyfemaletype.jpg", "skinnyfemaletype.jpg", "muscularfemaletype.jpg"];
    
  const labels = ["Chubby", "Skinny", "Muscular/Medium"];

  bodyTypes.forEach((type, index) => {
    let div = document.createElement("div");
    div.classList.add("bodytype-option");

    let img = document.createElement("img");
    img.src = `images/${type}`;
    img.classList.add("clickable-image");
    img.onclick = () => selectBodyType(labels[index].toLowerCase());  // Convert body type to lowercase

    let label = document.createElement("p");
    label.innerText = labels[index];

    div.appendChild(img);
    div.appendChild(label);
    bodytypeOptions.appendChild(div);
  });

  document.getElementById("bodytype-page").style.display = "block";
}

// Body type selection
function selectBodyType(type) {
  selectedBodyType = type.toLowerCase();  // Convert body type to lowercase
  console.log("Body type selected:", selectedBodyType);  // Log body type
  document.getElementById("bodytype-page").style.display = "none";
  showGoalOptions();
}

// Show goal options based on body type
function showGoalOptions() {
  const goalOptions = document.getElementById("goal-options");
  goalOptions.innerHTML = "";  // Clear previous options

  const goals = selectedGender === "male" 
    ? ["malegainmuslces.jpg", "malelosingweight.jpg", "maledoingyoga.jpg"]
    : ["femalebuildingmuslces.jpg", "femalelosingweight.jpg", "femaledoingyoga.jpg"];

  const labels = ["Gain Muscles", "Lose Weight", "Stay Fit"];

  goals.forEach((goal, index) => {
    let div = document.createElement("div");
    div.classList.add("goal-option");

    let img = document.createElement("img");
    img.src = `images/${goal}`;
    img.classList.add("clickable-image");
    img.onclick = () => selectGoal(labels[index].toLowerCase());  // Convert goal to lowercase

    let label = document.createElement("p");
    label.innerText = labels[index];

    div.appendChild(img);
    div.appendChild(label);
    goalOptions.appendChild(div);
  });

  document.getElementById("goals-page").style.display = "block";
}

// Goal selection
function selectGoal(goal) {
  selectedGoal = goal.toLowerCase();  // Convert goal to lowercase
  console.log("Goal selected:", selectedGoal);  // Log goal
  document.getElementById("goals-page").style.display = "none";
  document.getElementById("details-page").style.display = "block";
}

// Calculate intake based on height and weight, prevent form submission
function calculateIntake(event) {
  event.preventDefault();  // Prevent form reload

  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  console.log(`Height: ${height}, Weight: ${weight}`);
  console.log(`Selected Gender: ${selectedGender}, Body Type: ${selectedBodyType}, Goal: ${selectedGoal}`);

  if (!height || !weight) {
    alert("Please fill out height and weight");
    return;
  }

  const calories = (10 * weight) + (6.25 * height) - 5 * 25;
  const protein = weight * 1.6;

  let dietPlan = getDietPlan(selectedGender, selectedBodyType, selectedGoal);

  document.getElementById("details-page").style.display = "none";  // Hide details page
  document.getElementById("diet-plan-page").style.display = "block";  // Show diet plan

  document.getElementById("diet-plan").innerHTML = `
    <p>Recommended Calories: ${calories.toFixed(2)} kcal/day</p>
    <p>Recommended Protein Intake: ${protein.toFixed(2)} grams/day</p>
    <h3>Your Diet Plan:</h3>
    ${dietPlan}
  `;
}

// Get diet plan based on gender, body type, and goal
function getDietPlan(gender, bodyType, goal) {
  console.log(`Gender: ${gender}, Body Type: ${bodyType}, Goal: ${goal}`);  // Debugging

  const dietPlans = {
    "male": {
      "chubby": {
        "lose weight": `
          <table>
            <tr><th>Meal</th><th>Option 1</th><th>Option 2</th><th>Option 3</th></tr>
            <tr><td>Breakfast</td><td>2 egg vegetable omelet, bread, nuts.</td><td>Greek Yogurt with Berries.</td><td>Oats, Milk, Honey, Berries.</td></tr>
            <tr><td>Lunch</td><td>Beef Stir Fry.</td><td>Chickpeas Salad Wraps.</td><td>Chicken Salad.</td></tr>
            <tr><td>Snack</td><td>Apples and Nuts.</td><td>Hard boiled eggs.</td><td>Yogurt with Berries.</td></tr>
            <tr><td>Dinner</td><td>Lentils, Rice, Roasted Vegetables.</td><td>Steaks, Mashed Potatoes, Gravy.</td><td>Chicken Sheek Kabab with Salad.</td></tr>
          </table>
          <em>Extra Point:</em> Count Your Calories to be less than your calorie maintenance goal (Calorie deficit).<br>
          Do cardio very often to maintain calorie deficit.<br>
        `,
        "stay fit": `
          <table>
            <tr><th>Meal</th><th>Option 1</th><th>Option 2</th><th>Option 3</th></tr>
            <tr><td>Breakfast</td><td>3 egg vegetable omelet, bread, nuts.</td><td>Greek Yogurt with Berries.</td><td>Oats, Milk, Honey, Berries.</td></tr>
            <tr><td>Lunch</td><td>Beef Stir Fry.</td><td>Chickpeas Salad Wraps.</td><td>Chicken Salad.</td></tr>
            <tr><td>Snack</td><td>Apples and Nuts.</td><td>Hard boiled eggs.</td><td>Carrots and Hummus.</td></tr>
            <tr><td>Dinner</td><td>Lentils, Rice, Roasted Vegetables.</td><td>Steaks, Mashed Potatoes, Gravy.</td><td>White Sauce Pasta with Broccoli and Tomatoes.</td></tr>
          </table>
          <em>Extra Point:</em> Balance strength training and cardio but focus on cardio more.<br>
        `,
        "gain muscles": `
          <table>
            <tr><th>Meal</th><th>Option 1</th><th>Option 2</th><th>Option 3</th></tr>
            <tr><td>Breakfast</td><td>4 eggs, bread, peanut butter, nuts.</td><td>Smoothie (Almond milk, Banana, Berries, Oats, Yoghurt).</td><td>Whole Grain Cereal, Greek Yoghurt, Berries.</td></tr>
            <tr><td>Lunch</td><td>Rice, Chicken, Broccoli.</td><td>3 Chicken/Beef Cheese Wraps, Chickpeas.</td><td>Chicken Salad.</td></tr>
            <tr><td>Snack</td><td>Protein Shake (Bananas, Milk, Peanut Butter, Protein Powder).</td><td>Protein Bars.</td><td>Edamame and Hummus.</td></tr>
            <tr><td>Dinner</td><td>Ground Beef, Rice, Roasted Vegetables.</td><td>Steak, Mashed Potatoes, Gravy.</td><td>Creamy Chicken Pasta, Broccoli, Tomatoes.</td></tr>
          </table>
          <em>Extra Point:</em> Eat more than your calorie maintenance (Calorie surplus). Focus on strength training over cardio.<br>
        `
      },
      "skinny": {
        "lose weight": `
          <table>
            <tr><th>Meal</th><th>Option 1</th><th>Option 2</th><th>Option 3</th></tr>
            <tr><td>Breakfast</td><td>3 eggs, bread, nuts.</td><td>Smoothie (Almond milk, Banana, Berries, Oats, Yoghurt).</td><td>Whole Grain cereal, Milk, Berries.</td></tr>
            <tr><td>Lunch</td><td>Rice, pan-seared chicken.</td><td>Chicken/Beef Wraps, Chickpeas.</td><td>Chicken Salad (Lettuce, Broccoli, Olives, Cucumber, Brussel Sprouts).</td></tr>
            <tr><td>Snack</td><td>Protein Shake (Bananas, Milk, Peanut Butter, Protein Powder).</td><td>Almonds and Yoghurt.</td><td>Carrots and Hummus.</td></tr>
            <tr><td>Dinner</td><td>Lentils and Rice with Roasted Vegetables.</td><td>Steak, Mashed Potatoes, Gravy.</td><td>White Sauce Pasta with Broccoli and Tomatoes.</td></tr>
          </table>
          <em>Extra Point:</em> Eat the amount of calories you lose daily. Balance strength training and cardio.<br>
        `,
        "stay fit": `
          <table>
            <tr><th>Meal</th><th>Option 1</th><th>Option 2</th><th>Option 3</th></tr>
            <tr><td>Breakfast</td><td>3 eggs, bread, nuts.</td><td>Smoothie (Almond milk, Banana, Berries, Oats, Yoghurt).</td><td>Whole Grain cereal, Milk, Berries.</td></tr>
            <tr><td>Lunch</td><td>Rice, pan-seared chicken.</td><td>Chicken/Beef Wraps, Chickpeas.</td><td>Chicken Salad (Lettuce, Broccoli, Olives, Cucumber, Brussel Sprouts).</td></tr>
            <tr><td>Snack</td><td>Protein Shake (Bananas, Milk, Peanut Butter, Protein Powder).</td><td>Almonds and Yoghurt.</td><td>Carrots and Hummus.</td></tr>
            <tr><td>Dinner</td><td>Lentils and Rice with Roasted Vegetables.</td><td>Steak, Mashed Potatoes, Gravy.</td><td>White Sauce Pasta with Broccoli and Tomatoes.</td></tr>
          </table>
          <em>Extra Point:</em> Eat the amount of calories you lose daily. Balance strength training and cardio.<br>
        `,
        "gain muscles": `
          <table>
            <tr><th>Meal</th><th>Option 1</th><th>Option 2</th><th>Option 3</th></tr>
            <tr><td>Breakfast</td><td>4 eggs, bread, peanut butter, nuts.</td><td>Smoothie (Milk, Banana, Berries, Oats, Yoghurt).</td><td>Whole Grain Cereal, Greek Yoghurt, Berries.</td></tr>
            <tr><td>Lunch</td><td>Rice, Chicken, Broccoli.</td><td>Chicken/Beef Cheese Wraps, Chickpeas.</td><td>Chicken Salad.</td></tr>
            <tr><td>Snack</td><td>Protein Shake (Bananas, Milk, Peanut Butter, Protein Powder).</td><td>Protein Bars.</td><td>Edamame and Hummus.</td></tr>
            <tr><td>Dinner</td><td>Ground Beef, Rice, Roasted Vegetables.</td><td>Steak, Mashed Potatoes, Gravy.</td><td>Creamy Chicken Pasta, Broccoli, Tomatoes.</td></tr>
          </table>
          <em>Extra Point:</em> Eat more than your calorie maintenance (Calorie surplus). Focus on strength training over cardio.<br>
        `
      },
      "muscular/medium": {
        "lose weight": `
          <table>
            <tr><th>Meal</th><th>Option 1</th><th>Option 2</th><th>Option 3</th></tr>
            <tr><td>Breakfast</td><td>3 eggs, bread, nuts.</td><td>Greek Yogurt with Berries.</td><td>Oats, milk, honey, berries.</td></tr>
            <tr><td>Lunch</td><td>Beef Stir Fry.</td><td>Chickpeas Salad Wraps with Hummus.</td><td>Chicken Salad.</td></tr>
            <tr><td>Snack</td><td>Apples and Nuts.</td><td>Hard boiled eggs.</td><td>Greek Yogurt with Berries.</td></tr>
            <tr><td>Dinner</td><td>Lentils, Rice, Roasted Vegetables.</td><td>Steaks, Mashed Potatoes, Gravy.</td><td>Chicken Sheek Kabab with Salad.</td></tr>
          </table>
          <em>Extra Point:</em> Slight calorie deficit, balance strength and cardio.<br>
        `,
        "stay fit": `
          <table>
            <tr><th>Meal</th><th>Option 1</th><th>Option 2</th><th>Option 3</th></tr>
            <tr><td>Breakfast</td><td>3 eggs, bread, nuts.</td><td>Smoothie (Milk, Banana, Berries, Oats, Yoghurt).</td><td>Whole Grain Cereal, Milk, Berries.</td></tr>
            <tr><td>Lunch</td><td>Rice, Chicken.</td><td>Chicken/Beef Wraps, Chickpeas.</td><td>Chicken Salad.</td></tr>
            <tr><td>Snack</td><td>Protein Shake (Bananas, Milk, Peanut Butter, Protein Powder).</td><td>Almonds and Yogurt.</td><td>Carrots and Hummus.</td></tr>
            <tr><td>Dinner</td><td>Lentils, Rice, Roasted Vegetables.</td><td>Steak, Mashed Potatoes, Gravy.</td><td>White Sauce Pasta with Broccoli and Tomatoes.</td></tr>
          </table>
          <em>Extra Point:</em> Balance strength training and cardio. Drink 16 cups of water daily.<br>
        `,
        "gain muscles": `
          <table>
            <tr><th>Meal</th><th>Option 1</th><th>Option 2</th><th>Option 3</th></tr>
            <tr><td>Breakfast</td><td>4 eggs, bread, peanut butter, nuts.</td><td>Smoothie (Milk, Banana, Berries, Oats, Yoghurt).</td><td>Whole Grain Cereal, Greek Yoghurt, Berries.</td></tr>
            <tr><td>Lunch</td><td>Rice, Chicken, Broccoli.</td><td>Chicken/Beef Cheese Wraps, Chickpeas.</td><td>Chicken Salad.</td></tr>
            <tr><td>Snack</td><td>Protein Shake (Bananas, Milk, Peanut Butter, Protein Powder).</td><td>Protein Bars.</td><td>Edamame and Hummus.</td></tr>
            <tr><td>Dinner</td><td>Ground Beef, Rice, Roasted Vegetables.</td><td>Steak, Mashed Potatoes, Gravy.</td><td>Creamy Chicken Pasta, Broccoli, Tomatoes.</td></tr>
          </table>
          <em>Extra Point:</em> Calorie surplus, focus on weight training.<br>
        `
      }
    },
    "female": {
      "chubby": {
        "lose weight": `
          <table>
            <tr><th>Meal</th><th>Option 1</th><th>Option 2</th><th>Option 3</th></tr>
            <tr><td>Breakfast</td><td>2 egg vegetable omelet, bread, nuts.</td><td>Greek Yogurt with Berries.</td><td>Oats, Milk, Honey, Berries.</td></tr>
            <tr><td>Lunch</td><td>Beef Stir Fry.</td><td>Chickpeas Salad Wraps.</td><td>Chicken Salad.</td></tr>
            <tr><td>Snack</td><td>Apples and Nuts.</td><td>Hard boiled eggs.</td><td>Yogurt with Berries.</td></tr>
            <tr><td>Dinner</td><td>Lentils, Rice, Roasted Vegetables.</td><td>Steaks, Mashed Potatoes, Gravy.</td><td>Chicken Sheek Kabab with Salad.</td></tr>
          </table>
          <em>Extra Point:</em> Count Your Calories to be less than your calorie maintenance goal (Calorie deficit).<br>
          Do cardio very often to maintain calorie deficit.<br>
        `,
        "stay fit": `
          <table>
            <tr><th>Meal</th><th>Option 1</th><th>Option 2</th><th>Option 3</th></tr>
            <tr><td>Breakfast</td><td>3 egg vegetable omelet, bread, nuts.</td><td>Smoothie (Milk, Banana, Berries, Oats, Yoghurt).</td><td>Whole Grain Cereal, Milk, Berries.</td></tr>
            <tr><td>Lunch</td><td>Beef Stir Fry.</td><td>Chicken Wraps, Chickpeas.</td><td>Chicken Salad.</td></tr>
            <tr><td>Snack</td><td>Apples and Nuts.</td><td>Hard boiled eggs.</td><td>Carrots and Hummus.</td></tr>
            <tr><td>Dinner</td><td>Lentils, Rice, Roasted Vegetables.</td><td>Steak, Mashed Potatoes, Gravy.</td><td>White Sauce Pasta with Broccoli and Tomatoes.</td></tr>
          </table>
          <em>Extra Point:</em> Balance strength training and cardio.<br>
        `,
        "gain muscles": `
          <table>
            <tr><th>Meal</th><th>Option 1</th><th>Option 2</th><th>Option 3</th></tr>
            <tr><td>Breakfast</td><td>3 egg vegetable omelet, peanut butter, nuts.</td><td>Smoothie (Milk, Banana, Berries, Oats, Yoghurt).</td><td>Whole Grain Cereal, Milk, Berries.</td></tr>
            <tr><td>Lunch</td><td>Beef Stir Fry.</td><td>Chickpeas Salad Wraps.</td><td>Chicken Salad.</td></tr>
            <tr><td>Snack</td><td>Protein Shake.</td><td>Hard boiled eggs.</td><td>Yogurt with Berries.</td></tr>
            <tr><td>Dinner</td><td>Lentils, Rice, Roasted Vegetables.</td><td>Steaks, Mashed Potatoes, Gravy.</td><td>Chicken Sheek Kabab with Salad.</td></tr>
          </table>
          <em>Extra Point:</em> Eat slightly more than your calorie maintenance goal. Focus on strength training.<br>
        `
      },
      "skinny": {
        "lose weight": `
          <table>
            <tr><th>Meal</th><th>Option 1</th><th>Option 2</th><th>Option 3</th></tr>
            <tr><td>Breakfast</td><td>3 eggs, bread, nuts.</td><td>Smoothie (Almond milk, Banana, Berries, Oats, Yoghurt).</td><td>Whole Grain cereal, Milk, Berries.</td></tr>
            <tr><td>Lunch</td><td>Rice, pan-seared chicken.</td><td>Chicken/Beef Wraps, Chickpeas.</td><td>Chicken Salad (Lettuce, Broccoli, Olives, Cucumber, Brussel Sprouts).</td></tr>
            <tr><td>Snack</td><td>Protein Shake (Bananas, Milk, Peanut Butter, Protein Powder).</td><td>Almonds and Yoghurt.</td><td>Carrots and Hummus.</td></tr>
            <tr><td>Dinner</td><td>Lentils and Rice with Roasted Vegetables.</td><td>Steak, Mashed Potatoes, Gravy.</td><td>White Sauce Pasta with Broccoli and Tomatoes.</td></tr>
          </table>
          <em>Extra Point:</em> Eat the amount of calories you lose daily. Balance strength training and cardio.<br>
        `,
        "stay fit": `
          <table>
            <tr><th>Meal</th><th>Option 1</th><th>Option 2</th><th>Option 3</th></tr>
            <tr><td>Breakfast</td><td>3 eggs, bread, nuts.</td><td>Smoothie (Almond milk, Banana, Berries, Oats, Yoghurt).</td><td>Whole Grain cereal, Milk, Berries.</td></tr>
            <tr><td>Lunch</td><td>Rice, pan-seared chicken.</td><td>Chicken/Beef Wraps, Chickpeas.</td><td>Chicken Salad (Lettuce, Broccoli, Olives, Cucumber, Brussel Sprouts).</td></tr>
            <tr><td>Snack</td><td>Protein Shake (Bananas, Milk, Peanut Butter, Protein Powder).</td><td>Almonds and Yoghurt.</td><td>Carrots and Hummus.</td></tr>
            <tr><td>Dinner</td><td>Lentils and Rice with Roasted Vegetables.</td><td>Steak, Mashed Potatoes, Gravy.</td><td>White Sauce Pasta with Broccoli and Tomatoes.</td></tr>
          </table>
          <em>Extra Point:</em> Eat the amount of calories you lose daily. Balance strength training and cardio.<br>
        `,
        "gain muscles": `
          <table>
            <tr><th>Meal</th><th>Option 1</th><th>Option 2</th><th>Option 3</th></tr>
            <tr><td>Breakfast</td><td>4 eggs, bread, peanut butter, nuts.</td><td>Smoothie (Milk, Banana, Berries, Oats, Yoghurt).</td><td>Whole Grain Cereal, Greek Yoghurt, Berries.</td></tr>
            <tr><td>Lunch</td><td>Rice, Chicken, Broccoli.</td><td>Chicken/Beef Cheese Wraps, Chickpeas.</td><td>Chicken Salad.</td></tr>
            <tr><td>Snack</td><td>Protein Shake (Bananas, Milk, Peanut Butter, Protein Powder).</td><td>Protein Bars.</td><td>Edamame and Hummus.</td></tr>
            <tr><td>Dinner</td><td>Ground Beef, Rice, Roasted Vegetables.</td><td>Steak, Mashed Potatoes, Gravy.</td><td>Creamy Chicken Pasta, Broccoli, Tomatoes.</td></tr>
          </table>
          <em>Extra Point:</em> Eat more than your calorie maintenance (Calorie surplus). Focus on strength training over cardio.<br>
        `
      },
      "muscular/medium": {
        "lose weight": `
          <table>
            <tr><th>Meal</th><th>Option 1</th><th>Option 2</th><th>Option 3</th></tr>
            <tr><td>Breakfast</td><td>3 eggs, bread, nuts.</td><td>Greek Yogurt with Berries.</td><td>Oats, milk, honey, berries.</td></tr>
            <tr><td>Lunch</td><td>Beef Stir Fry.</td><td>Chickpeas Salad Wraps with Hummus.</td><td>Chicken Salad.</td></tr>
            <tr><td>Snack</td><td>Apples and Nuts.</td><td>Hard boiled eggs.</td><td>Greek Yogurt with Berries.</td></tr>
            <tr><td>Dinner</td><td>Lentils, Rice, Roasted Vegetables.</td><td>Steaks, Mashed Potatoes, Gravy.</td><td>Chicken Sheek Kabab with Salad.</td></tr>
          </table>
          <em>Extra Point:</em> Slight calorie deficit, balance strength and cardio.<br>
        `,
        "stay fit": `
          <table>
            <tr><th>Meal</th><th>Option 1</th><th>Option 2</th><th>Option 3</th></tr>
            <tr><td>Breakfast</td><td>3 eggs, bread, nuts.</td><td>Smoothie (Milk, Banana, Berries, Oats, Yoghurt).</td><td>Whole Grain Cereal, Milk, Berries.</td></tr>
            <tr><td>Lunch</td><td>Rice, Chicken.</td><td>Chicken/Beef Wraps, Chickpeas.</td><td>Chicken Salad.</td></tr>
            <tr><td>Snack</td><td>Protein Shake (Bananas, Milk, Peanut Butter, Protein Powder).</td><td>Almonds and Yogurt.</td><td>Carrots and Hummus.</td></tr>
            <tr><td>Dinner</td><td>Lentils, Rice, Roasted Vegetables.</td><td>Steak, Mashed Potatoes, Gravy.</td><td>White Sauce Pasta with Broccoli and Tomatoes.</td></tr>
          </table>
          <em>Extra Point:</em> Balance strength training and cardio. Drink 16 cups of water daily.<br>
        `,
        "gain muscles": `
          <table>
            <tr><th>Meal</th><th>Option 1</th><th>Option 2</th><th>Option 3</th></tr>
            <tr><td>Breakfast</td><td>4 eggs, bread, peanut butter, nuts.</td><td>Smoothie (Milk, Banana, Berries, Oats, Yoghurt).</td><td>Whole Grain Cereal, Greek Yoghurt, Berries.</td></tr>
            <tr><td>Lunch</td><td>Rice, Chicken, Broccoli.</td><td>Chicken/Beef Cheese Wraps, Chickpeas.</td><td>Chicken Salad.</td></tr>
            <tr><td>Snack</td><td>Protein Shake (Bananas, Milk, Peanut Butter, Protein Powder).</td><td>Protein Bars.</td><td>Edamame and Hummus.</td></tr>
            <tr><td>Dinner</td><td>Ground Beef, Rice, Roasted Vegetables.</td><td>Steak, Mashed Potatoes, Gravy.</td><td>Creamy Chicken Pasta, Broccoli, Tomatoes.</td></tr>
          </table>
          <em>Extra Point:</em> Calorie surplus, focus on weight training.<br>
        `
      }
    }
  };

  return dietPlans[gender][bodyType][goal];
}
