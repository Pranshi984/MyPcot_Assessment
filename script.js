document.addEventListener('DOMContentLoaded', function () {
    // Sample data for records (replace with actual data and logic)
    let records = [
        {
            id: 1,
            name: 'Record 1',
            description: 'Description 1',
            category: 'Category 1',
            active: true
        },
        {
            id: 2,
            name: 'Record 2',
            description: 'Description 2',
            category: 'Category 2',
            active: false
        }
    ];

    const registrationForm = document.getElementById('registrationForm');
    const createRecordForm = document.getElementById('createRecordForm');
    const recordList = document.getElementById('recordList');
    const searchInput = document.getElementById('search');
    const filterSelect = document.getElementById('filter');

    // Function to display records in the table
    function displayRecords() {
        recordList.innerHTML = ''; // Clear existing records

        for (const record of records) {
            // Create a new row in the table
            const row = document.createElement('tr');

            // Create table cells for record properties
            const nameCell = document.createElement('td');
            nameCell.textContent = record.name;

            const descriptionCell = document.createElement('td');
            descriptionCell.textContent = record.description;

            const categoryCell = document.createElement('td');
            categoryCell.textContent = record.category;

            const activeCell = document.createElement('td');
            activeCell.textContent = record.active ? 'Active' : 'Inactive';

            const actionsCell = document.createElement('td');
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editRecord(record.id));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteRecord(record.id));

            actionsCell.appendChild(editButton);
            actionsCell.appendChild(deleteButton);

            // Append cells to the row
            row.appendChild(nameCell);
            row.appendChild(descriptionCell);
            row.appendChild(categoryCell);
            row.appendChild(activeCell);
            row.appendChild(actionsCell);

            // Append the row to the table
            recordList.appendChild(row);
        }
    }

    // Function to add a new record
    function addRecord(name, description, category, active) {
        const id = records.length + 1; // Generate a unique ID (replace with backend logic)

        const newRecord = {
            id,
            name,
            description,
            category,
            active
        };

        records.push(newRecord);
        displayRecords();
    }

    // Function to edit a record
    function editRecord(id) {
        // Implement edit logic here
        // You can open a modal or a form for editing the record
        console.log('Editing record with ID:', id);
    }

    // Function to delete a record
    function deleteRecord(id) {
        // Implement delete logic here
        // You can confirm the deletion and then remove the record from the array
        console.log('Deleting record with ID:', id);
    }

    // Event listener for the registration form
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const gender = document.getElementById('gender').value;

        // Implement registration logic here (e.g., send data to the backend)
        console.log('Registration data:', name, email, password, gender);

        // Clear the registration form after submission
        registrationForm.reset();
    });

    // Event listener for creating a new record
    createRecordForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const recordName = document.getElementById('recordName').value;
        const description = document.getElementById('description').value;
        const category = document.getElementById('category').value;
        const active = document.getElementById('active').checked;

        // Add the new record to the list
        addRecord(recordName, description, category, active);

        // Clear the create record form after submission
        createRecordForm.reset();
    });

    // Event listener for filtering records
    filterSelect.addEventListener('change', function () {
        const filterValue = filterSelect.value;
        let filteredRecords = [];

        if (filterValue === 'all') {
            filteredRecords = records;
        } else if (filterValue === 'active') {
            filteredRecords = records.filter(record => record.active);
        } else if (filterValue === 'inactive') {
            filteredRecords = records.filter(record => !record.active);
        }

        // Update the displayed records
        records = filteredRecords;
        displayRecords();
    });

    // Event listener for searching records
    searchInput.addEventListener('input', function () {
        const searchValue = searchInput.value.toLowerCase();
        const filteredRecords = records.filter(record => record.name.toLowerCase().includes(searchValue));
        records = filteredRecords;
        displayRecords();
    });

    // Initial display of records
    displayRecords();
});
