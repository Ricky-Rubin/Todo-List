const container = document.querySelector('#container')
const navPane = document.querySelector('#left');
const contentPane = document.querySelector('#right');

function fillContent() {
    class Task {
        constructor(title, description, reminder) {
            this.title = title,
            this.description = description,
            this.reminder = reminder
        };
    ;}

    const formHouse = document.createElement('div');
    formHouse.className = "form-house";

    const titleLabel = document.createElement('label');
    titleLabel.textContent = "Title: ";
    titleLabel.setAttribute("for", "addTitle")
    titleLabel.className = 'labe1'

    const addTitle = document.createElement('input');
    addTitle.setAttribute("id", "addTitle");
    addTitle.setAttribute("required", "");

    const descLabel = document.createElement('label');
    descLabel.textContent = "Description: ";
    descLabel.setAttribute("for", "addDesc")
    descLabel.className = 'labe2'

    const addDesc = document.createElement('textarea');
    addDesc.setAttribute("id", "addDesc");
    addDesc.setAttribute("required", "");
    addDesc.setAttribute("rows", "4")

    const reminderLabel = document.createElement('label');
    reminderLabel.textContent = "Reminder: ";
    reminderLabel.setAttribute("for", "addReminder");
    reminderLabel.className = 'labe3';

    const addReminder = document.createElement('input');
    addReminder.setAttribute("id", "addReminder");
    addReminder.setAttribute("required", "");

    const dateLabel = document.createElement('label');
    dateLabel.textContent = "Choose a date: "
    dateLabel.setAttribute("for", "date");
    dateLabel.className = 'class-date';

    const dateTab = document.createElement('input');
    dateTab.className = 'date-class';
    dateTab.setAttribute("type", "date");
    dateTab.setAttribute("id", "date");

    const selectLabel = document.createElement('label');
    selectLabel.setAttribute("for", "selectOption");
    selectLabel.textContent = "Select urgency level: ";
    selectLabel.className = 'select-label'

    const selectOptions = document.createElement('select'); //Urgency select options
    selectOptions.className = 'select-options';
    selectOptions.setAttribute("id", "selectOption");
    selectOptions.innerHTML = `
        <option default disabled>Choose</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
    `;

    const sendBtn = document.createElement('div'); //submit button for the task details__slide form.
    sendBtn.className = 'send-btn'
    sendBtn.innerHTML= `<button class='add-btn'>Add</button>`

    const topTextTwo = document.createElement('p'); //This is the text that will show up at the top
    topTextTwo.className = 'top-text-two';          // of the slide to fill in the todo task details
    topTextTwo.textContent = 'Todo Details';

    const topTextOne = document.createElement('div');
    topTextOne.className = 'top-text-one';   //This is the Todo text that will show on the landing
    topTextOne.textContent = 'Todo';        // It will be at the top of the left pane.

    const addProject = document.createElement('button'); //Button to create new project
    addProject.className = 'project'                  
    addProject.textContent = '+ Add Project'

    navPane.append(topTextOne, addProject);

    addProject.addEventListener('click', () => {
        const projectTab = document.createElement('div');
        projectTab.className = 'project-tab';
        projectTab.innerHTML = `
            <input class='p-name' type='text'/>
            <button class='btn mark'>&#10004;</button>
            <button class='btn cancel'>&#10006;</button>  
        `;                                                   //cancel button for the project name

        navPane.appendChild(projectTab);

        const pName = projectTab.querySelector('.p-name');
        pName.focus();
        const markBtn = projectTab.querySelector('.mark');
        const cancelBtn = projectTab.querySelector('.cancel');

        cancelBtn.addEventListener('click', () => {
            navPane.removeChild(projectTab);
        });

        function setProjectName() {
            if (pName.value.trim() !== "") {
                projectTab.innerHTML = ""
                projectTab.style.backgroundColor = 'pink';
                projectTab.style.padding = '0px 8px'
                projectTab.style.fontSize = '14px'
                projectTab.style.fontWeight = '600'

                projectTab.innerHTML += `
                <div class='tab-house'>
                    <p>${pName.value}</p>
                </div>

                <div class='cancel-house'>
                    <button class='project-cancel'>&#10006;</button>
                </div>
                `; 

                const tabCancel = projectTab.querySelector('.project-cancel');
                tabCancel.addEventListener('click', () => {
                    if (slideForm.style.right = '0') {
                        slideForm.style.right = '-330px'
                    }
                })

                const tabHouse = projectTab.querySelector('.tab-house');
                    tabHouse.addEventListener('click', () => {
                    console.log("div clicked");
                    projectTab.style.backgroundColor = "#dff9fb";
                    slideButton.style.display = 'block';
                })

                const projectCancel = projectTab.querySelector('.cancel-house');
                projectCancel.addEventListener('click', () => {
                    projectTab.remove();
                    slideButton.style.display = 'none'
                })
            } else {
                alert ("You need to fill the input section!")
            };
        };

        markBtn.addEventListener('click', setProjectName);
        pName.addEventListener('keydown', (e) => {
            if (e.key === "Enter") {
                setProjectName();
            }
        })
    })

    const topName = document.createElement('div');
    topName.className = 'top-name';
    topName.innerHTML = `
        <p class='top-task'>Tasks: </p>
        <button class='add-task'>Add Task</button>
    `;                   
     
    contentPane.append(topName);

    const slideForm = document.createElement('div');
    slideForm.className = 'slide-form';

    contentPane.appendChild(slideForm);

    const slideButton = topName.querySelector('.add-task');
    slideButton.addEventListener('click', () => {
        console.log('Clicked');
        slideForm.style.right = '0';
    })

    const closeBtn = document.createElement('div');
    closeBtn.className = 'closeBtn';
    closeBtn.innerHTML = `<button class='x-mark'>&#10006;</button>`;

    slideForm.append(closeBtn);

    closeBtn.addEventListener('click', () => {
        slideForm.style.right = '-300px'
    })

    formHouse.append(topTextTwo, titleLabel, addTitle, descLabel, addDesc, reminderLabel, addReminder, dateLabel, dateTab, selectLabel, selectOptions, sendBtn);
    slideForm.appendChild(formHouse)

    sendBtn.addEventListener('click', () => {
        const newTask = new Task(addTitle.value, addDesc.value, addReminder.value);
        console.log(newTask);

        const todoDiv = document.createElement('div');
        todoDiv.className = 'todo-div';
        todoDiv.setAttribute("id", "todo-div");

        const titleArea = document.createElement('p');
        titleArea.textContent = newTask.title;

        const descArea = document.createElement('p');
        descArea.textContent = newTask.description;

        const reminderArea = document.createElement('p');
        reminderArea.textContent = newTask.reminder;

        todoDiv.append(titleArea, descArea, reminderArea);

        const contentArea = document.createElement('div')
        contentArea.className = 'content-area'
        contentPane.appendChild(contentArea);

        contentArea.appendChild(todoTab);
    })
}


export { fillContent }