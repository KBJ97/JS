  const todolist = document.getElementById("todolist");
  const inputTodo = document.getElementById("inputTodo");
  const btnAdd = document.getElementById("btnAdd");

  btnAdd.addEventListener("click", function () {
    let todoValue = inputTodo.value.trim();
    if (todoValue == '') {
      alert("할일을 입력하세요.");
      return;
    }

    const listItem = document.createElement("li");
    listItem.className = "d-flex list-group-item";
    listItem.innerText = todoValue;

    const listBtn = document.createElement("button");
    listBtn.className = "btn-close ms-auto";
    listBtn.onclick = function () {
      let pNode = listItem.parentNode;
      pNode.removeChild(listItem);
    };
    
    listItem.appendChild(listBtn);
    todolist.appendChild(listItem);

    inputTodo.value = '';
  });