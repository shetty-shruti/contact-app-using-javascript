import {
    showAllPanel,
    searchPanel,
    contactPanel,
    viewContactPanel,updateContactPanel
} from './main';

let contactFirstName;
let contactLastName;
let contactEmail;
let contactPhoneNumber;

let createContactUri = 'https://phoneafriend.herokuapp.com/users';

export function addContacts() {
    return function () {
        showAllPanel.setAttribute('style', 'display:none');
        searchPanel.setAttribute('style', 'display:none');
        viewContactPanel.setAttribute('style', 'display:none');
        updateContactPanel.setAttribute('style', 'display:none'); 
        contactPanel.setAttribute('style', 'display:block'); 
             
    };
}

export function createContact() {
    contactFirstName = document.getElementById('inputFirstName').value;
    contactLastName = document.getElementById('inputLastName').value;
    contactEmail = document.getElementById('inputEmail').value;
    contactPhoneNumber = document.getElementById('inputPhoneNumber').value;

    let contact = {
        "firstName": contactFirstName,
        "lastName": contactLastName,
        "email": contactEmail,
        "phoneNumber": contactPhoneNumber
    };

    fetch(createContactUri, {
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        method: 'POST',
        body: JSON.stringify(contact)
    }).then(function (response) {
        return response.json();
    }).then(function(){
        alert('Contact Added Successfully !!!');
    })

}