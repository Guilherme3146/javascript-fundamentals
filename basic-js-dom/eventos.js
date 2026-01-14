const submitButton = document.querySelector('#submit-button');
const tarefaInput = document.querySelector('#tarefa');
const descInput = document.querySelector('#desc');

const items = document.querySelector('.items')

console.log(items)
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const tarefaValue = tarefaInput.value;
  const descValue = descInput.value;

  if (tarefaValue === '' || descValue === '') {
    erroInfo.innerHTML = "<p>Por favor preencha os campos obrigatórios</p>";
  }
  else {
    items.children[0].textContent = tarefaValue + descValue; 
  }

  console.log(items);
});
