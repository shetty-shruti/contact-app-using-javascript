import {
    showAllContacts,
    url
} from "./showAllContacts";
import {
    viewContactPanel,
    updateContactPanel
} from "./main";


let deleteUrl = 'https://phoneafriend.herokuapp.com/users';

var updateContact = document.getElementById('updateContact');
let id;


let contactFirstName;
let contactLastName;
let contactEmail;
let contactPhoneNumber;

export function deleteRecord(e) {
    let id = e.target.parentNode.parentNode.parentNode.id;
    fetch(deleteUrl + '/' + id, {
        method: 'DELETE'
    }).then(alert('User Deleted Successfully')).then(showAllContacts());
   

}
export function editRecord(e) {
    id = e.target.parentNode.parentNode.parentNode.id;
    viewContactPanel.setAttribute('style', 'display:none');
    updateContactPanel.setAttribute('style', 'display:block');
    console.log(updateContact);


    fetch(url + '/' + id)
        .then(response => response.json())
        .then(data => editContactDisplay(data));
}

function editContactDisplay(data) {
    document.getElementById('updateFirstName').value = data.firstName;
    document.getElementById('updateLastName').value = data.lastName;
    document.getElementById('updatePhoneNumber').value = data.phoneNumber;
    document.getElementById('updateEmail').value = data.email;
    updateContact.onclick = updateContactDetails;
}



export function updateContactDetails() {
    contactFirstName = document.getElementById('updateFirstName').value;
    contactLastName = document.getElementById('updateLastName').value;
    contactEmail = document.getElementById('updateEmail').value;
    contactPhoneNumber = document.getElementById('updatePhoneNumber').value;

    let contact = {
        "firstName": contactFirstName,
        "lastName": contactLastName,
        "email": contactEmail,
        "phoneNumber": contactPhoneNumber
    };


    fetch(url + '/' + id, {
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        method: 'PUT',
        body: JSON.stringify(contact)
    }).then(alert("User Updated Successfully !!!"));

}