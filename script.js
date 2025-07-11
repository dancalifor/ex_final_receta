const form = document.getElementById('recipe-form');
const message = document.getElementById('message');
const recipeList = document.getElementById('recipe-list');

let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

function saveToLocalStorage() {
  localStorage.setItem('recipes', JSON.stringify(recipes));
}

function showMessage(text, isError = false) {
  message.textContent = text;
  message.style.color = isError ? 'red' : 'green';
  setTimeout(() => message.textContent = '', 3000);
}

function renderRecipes() {
  recipeList.innerHTML = '';
  recipes.forEach((recipe, index) => {
    const li = document.createElement('li');
    li.className = 'recipe-item';
    li.innerHTML = `
      <strong>${recipe.title}</strong><br>
      <em>${recipe.ingredients}</em><br>
      <p>${recipe.instructions}</p>
      <button onclick="editRecipe(${index})">Editar</button>
      <button class="delete" onclick="deleteRecipe(${index})">Eliminar</button>
    `;
    recipeList.appendChild(li);
  });
}

function isDuplicate(title) {
  return recipes.some(recipe => recipe.title.toLowerCase() === title.toLowerCase());
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const ingredients = document.getElementById('ingredients').value.trim();
  const instructions = document.getElementById('instructions').value.trim();

  if (!title || !ingredients || !instructions) {
    showMessage('Todos los campos son obligatorios.', true);
    return;
  }

  if (isDuplicate(title)) {
    showMessage('La receta ya existe.', true);
    return;
  }

  recipes.push({ title, ingredients, instructions });
  saveToLocalStorage();
  renderRecipes();
  form.reset();
  showMessage('Receta agregada con éxito.');
});

function editRecipe(index) {
  const recipe = recipes[index];
  document.getElementById('title').value = recipe.title;
  document.getElementById('ingredients').value = recipe.ingredients;
  document.getElementById('instructions').value = recipe.instructions;

  recipes.splice(index, 1);
  saveToLocalStorage();
  renderRecipes();
  showMessage('Edita la receta y vuelve a guardarla.');
}

function deleteRecipe(index) {
  if (confirm('¿Seguro que deseas eliminar esta receta?')) {
    recipes.splice(index, 1);
    saveToLocalStorage();
    renderRecipes();
    showMessage('Receta eliminada.');
  }
}

window.addEventListener('load', renderRecipes);