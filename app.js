let createTask = () => {
    // User created task
    let userInput = document.getElementById("userTask").value;
    // console.log(userInput)

    // The div where user task is available
    let userTasks = document.querySelector(".createTask");

    if (userInput.trim() === "") {
        alert("Write something");
    } else {
        userTasks.innerHTML += `
            <p class="paragraph">
                ${userInput}
                <a href="#">
                    <i id="del" class="bx bxs-trash-alt bx-flashing" style="color: #ffffff"></i>
                </a>
            </p>
        `;

        // Hide the default content
        let hide = document.getElementById("hideDefault");
        hide.style.display = "none";
    }

    document.getElementById("userTask").value = "";

    // Single delete the task
    let del = document.getElementById("del");

    del.addEventListener('click', () => {
        let p = document.querySelector(".paragraph");
        p.remove();
    });

    // Remove all tasks at once
    let removeAll = document.getElementById("removeAll");

    removeAll.addEventListener('click', () => {
        userTasks.remove();
    });
}

