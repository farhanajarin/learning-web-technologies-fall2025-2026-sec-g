function showError(id, message) {
    var el = document.getElementById(id);
    if (el) {
        el.innerHTML = message;
    }
}

function clearError(id) {
    var el = document.getElementById(id);
    if (el) {
        el.innerHTML = "";
    }
}

function validateFoundItem() {
    var itemName      = document.getElementById("found_item_name").value.trim();
    var description   = document.getElementById("found_description").value.trim();
    var locationFound = document.getElementById("found_location").value.trim();
    var dateFound     = document.getElementById("found_date").value.trim();
    var contactPhone  = document.getElementById("found_phone").value.trim();

    clearError("foundItemError");

    if (itemName === "" || description === "" || locationFound === "" || dateFound === "" || contactPhone === "") {
        showError("foundItemError", "All fields are required");
        return false;
    } else if (itemName.length < 3) {
        showError("foundItemError", "Item name must be at least 3 characters");
        return false;
    } else if (description.length < 5) {
        showError("foundItemError", "Description must be at least 5 characters");
        return false;
    } else if (!/^\d{6,}$/.test(contactPhone)) {
        showError("foundItemError", "Contact phone must be at least 6 digits");
        return false;
    }

   else{
    alert("validation passed.");
    return true;
}
}
