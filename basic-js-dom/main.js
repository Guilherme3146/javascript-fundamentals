const tarefaInput = document.querySelector("#tarefa");
const descInput = document.querySelector("#desc");
const submitButton = document.querySelector("#submit-button");

const msg = document.querySelector(".msg");

const tarefa = document.querySelector("#tarefas");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const tarefaValue = tarefaInput.value;
  const descValue = descInput.value;
  if (tarefaValue === "" || descValue === "") {
    msg.innerHTML = "<p>Por Favor preencha os campos</p>";
    msg.classList = "error";

    setTimeout(() => {
      msg.innerHTML = "";
      msg.classList = "";
    }, 3000);

    return;
  }

  const li = document.createElement("li");
  li.classList = "item";
  li.textContent = `Tarefa: ${tarefaValue}, Desc: ${descValue}`;

  tarefa.appendChild(li);
});
