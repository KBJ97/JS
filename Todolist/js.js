      const todolist = document.getElementById("todolist");
      const inputTodo = document.getElementById("inputTodo");
      const btnAdd = document.getElementById("btnAdd");

      // 페이지 로드 시 데이터 복원
      const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      savedTodos.forEach(function (todoValue) {
        addTodoToList(todoValue);
      });

      btnAdd.addEventListener("click", function () {
        let todoValue = inputTodo.value.trim();
        if (todoValue == '') {
          alert("할일을 입력하세요.");
          return;
        }

        addTodoToList(todoValue);
        inputTodo.value = '';
      });

      function addTodoToList(todoValue) {
        const listItem = document.createElement("li");
        listItem.className = "d-flex list-group-item";
        listItem.innerText = todoValue;

        const listBtn = document.createElement("button");
        listBtn.className = "btn-close ms-auto";
        listBtn.onclick = function () {
          let pNode = listItem.parentNode;
          pNode.removeChild(listItem);

          // 로컬 스토리지에서 해당 할일 제거
          const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
          const updatedTodos = savedTodos.filter((todo) => todo !== todoValue);
          localStorage.setItem("todos", JSON.stringify(updatedTodos));
        };

        listItem.appendChild(listBtn);
        todolist.appendChild(listItem);

        // 새로운 할일 추가
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        
        // 중복 방지
        if (!savedTodos.includes(todoValue)) {
          savedTodos.push(todoValue);
          localStorage.setItem("todos", JSON.stringify(savedTodos));
        }
      }