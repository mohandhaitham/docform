
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});




// ------------------------------------------------------------------------------first drop down

    // Function to update the dropdown button text based on the selected option
    function updateDropdownText(buttonId, selectedText) {
        document.getElementById(buttonId).textContent = selectedText;
    }



// ------------------------------------------------------------------------------Define the functions for each action
document.getElementById('saveButton').addEventListener('click', function() {
    saveData();  // Call a function to save data
});

document.getElementById('submitButton').addEventListener('click', function() {
    submitData();  // Call a function to submit data
});

document.getElementById('deleteButton').addEventListener('click', function() {
    deleteData();  // Call a function to delete data
});

document.getElementById('editButton').addEventListener('click', function() {
    editData();  // Call a function to edit data
});

function saveData() {
    alert('Data has been saved!');
    // Add your save logic here
}

function submitData() {
    alert('Data has been submitted!');
    // Add your submit logic here
}

function deleteData() {
    alert('Data has been deleted!');
    // Add your delete logic here
}

function editData() {
    alert('Data is being edited!');
    // Add your edit logic here
}
