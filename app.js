const nameInput = document.getElementById('name');
const professionInput = document.getElementById('profession');
const ageInput = document.getElementById('age');
const addEmployeeBtn = document.getElementById('btn');
const messageDiv = document.getElementById('message');
const employeeList = document.getElementById('employeeList');

let employees = [];
let nextId = 1;

addEmployeeBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const profession = professionInput.value.trim();
  const age = parseInt(ageInput.value);

  if (name && profession && age) {
    const employee = {
      id: nextId++,
      name,
      profession,
      age
    };

    employees.push(employee);
    renderEmployees();
    showMessage('Success : Employee Added!', 'success');
  } else {
    showMessage('Error : Please Make sure All the fields are filled before adding in an employee !', 'error');
  }

  nameInput.value = '';
  professionInput.value = '';
  ageInput.value = '';
});

function renderEmployees() {
  employeeList.innerHTML = '';
  employees.forEach(employee => {
    const li = document.createElement('li');
    li.className = 'user-beauty';
    li.textContent = `${employee.id}. Name : ${employee.name} Profession:${employee.profession} Age:${employee.age}`;
    
    const deleteButton = document.createElement('button');
    deleteButton.className = 'user-button-beauty';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteEmployee(employee.id);
    });

    li.append(deleteButton);
    employeeList.append(li);
  });
}

function deleteEmployee(id) {
  employees = employees.filter(employee => employee.id !== id);
  renderEmployees();
}

function showMessage(text, type) {
  messageDiv.textContent = text;
  messageDiv.className = type + '-message';
}