import {
    searchPanel,
    contactPanel,
    showAllPanel,
    viewContactPanel,updateContactPanel
} from './main';
import { deleteRecord, editRecord } from './deleteAndEditRecord';

export let url = 'https://phoneafriend.herokuapp.com/users';

let  listDiv = document.getElementById('recordList');
let listItemTemplate = document.getElementsByClassName('recordItem')[0];

let  contactDiv = document.getElementById('viewList');
let contactItemTemplate = document.getElementsByClassName('viewItem')[0];



export function showAllContacts() {
    return function () {
        searchPanel.setAttribute('style', 'display:none');
        contactPanel.setAttribute('style', 'display:none');
        viewContactPanel.setAttribute('style', 'display:none');
        updateContactPanel.setAttribute('style','display:none');
        showAllPanel.setAttribute('style', 'display:block');
        renderAllContacts();
    };

}

export function renderAllContacts() {
    fetch(url)
        .then(response => response.json())
        .then(data => renderContacts(data));
}

function renderContacts(records) {
    if (listDiv.hasChildNodes()) {

        while (listDiv.firstChild) {
            listDiv.removeChild(listDiv.firstChild);
        }
    }
    for (let rec in records) {
        let record = listItemTemplate.cloneNode(true);
        
        record.querySelector('.firstName').innerHTML = records[rec].firstName;
        record.querySelector('.lastName').innerHTML = records[rec].lastName;
        // record.querySelector('.email').innerHTML = records[rec].email;
        // record.querySelector('.phone').innerHTML = records[rec].phoneNumber;
        record.setAttribute('id', records[rec]._id);
        record.querySelector('.viewButton').onclick = viewContact;
        // record.querySelector('.deleteBtn').onclick = deleteRecord;
        listDiv.appendChild(record);
    }
}

function viewContact(e){
    let id = e.target.parentNode.parentNode.parentNode.parentNode.id;
    fetch(url + '/' +id)
    .then(response => response.json())
        .then(data => viewContactDetails(data));    
}

function viewContactDetails(data){
    showAllPanel.setAttribute('style', 'display:none');
    viewContactPanel.setAttribute('style', 'display:block');

   
    if(contactDiv.hasChildNodes){
        while (contactDiv.firstChild) {
            contactDiv.removeChild(contactDiv.firstChild);
        }
    }
    let view = contactItemTemplate.cloneNode(true);

    view.querySelector('.firstName').innerHTML = data.firstName;
    view.querySelector('.lastName').innerHTML = data.lastName;
    view.querySelector('.email').innerHTML = data.email;
    view.querySelector('.phoneNumber').innerHTML = data.phoneNumber;
    view.setAttribute('id', data._id);
    view.querySelector('.deleteBtn').onclick = deleteRecord;
    view.querySelector('.editBtn').onclick = editRecord;
    contactDiv.appendChild(view);
}

