let currentTodoIndex = 0;


function startTodo() {

}

function addTodo() {
    const container = document.getElementById("todoContainer");

    container.innerHTML += `
    <tr>
        <td>
            <label for="todo${currentTodoIndex}" >My first todo${currentTodoIndex}</label>
            <input type="text"  name="todo${currentTodoIndex}" 
                                id="todo${currentTodoIndex}" 
                                value="My first todo${currentTodoIndex}">
        </td>
    </tr>`;
    currentTodoIndex++;
}
