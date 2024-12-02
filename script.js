// Array to store staff information
let staffData = [];

// Form and DOM elements
const staffForm = document.getElementById("staffForm");
const staffList = document.getElementById("staffList");
const nameInput = document.getElementById("name");
const positionInput = document.getElementById("position");
const performanceInput = document.getElementById("performance");
const staffIdInput = document.getElementById("staffId");

// Render staff list
function renderStaffList() {
  staffList.innerHTML = "";

  staffData.forEach((staff, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${staff.name}</td>
      <td>${staff.position}</td>
      <td>${staff.performance}</td>
      <td>
        <button class="edit" onclick="editStaff(${index})">Edit</button>
        <button class="delete" onclick="deleteStaff(${index})">Delete</button>
      </td>
    `;
    staffList.appendChild(row);
  });
}

// Add/Edit staff
staffForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const position = positionInput.value;
  const performance = performanceInput.value;
  const staffId = staffIdInput.value;

  if (staffId) {
    // Edit existing staff
    staffData[staffId] = { name, position, performance };
  } else {
    // Add new staff
    staffData.push({ name, position, performance });
  }

  // Reset form
  staffForm.reset();
  staffIdInput.value = "";

  renderStaffList();
});

// Edit staff
function editStaff(index) {
  const staff = staffData[index];
  nameInput.value = staff.name;
  positionInput.value = staff.position;
  performanceInput.value = staff.performance;
  staffIdInput.value = index;
}

// Delete staff
function deleteStaff(index) {
  staffData.splice(index, 1);
  renderStaffList();
}

// Initial render
renderStaffList();
