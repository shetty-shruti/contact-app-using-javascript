import './../scss/main.scss';
import {
    searchContacts
} from './searchContacts';
import {
    addContacts,createContact
} from './addContacts';
import {
    showAllContacts,renderAllContacts
} from './showAllContacts';
import {
    fromEvent
} from "rxjs";




export let addContact = document.getElementById('addContact');
export let updateContact = document.getElementById('clickAdd');

let clickAdd = fromEvent(addContact, "click");




export var searchPanel = document.getElementById('search-panel');
export var contactPanel = document.getElementById('contact-panel');
export var showAllPanel = document.getElementById('show-all');
export var viewContactPanel = document.getElementById('view-contact');
export var updateContactPanel = document.getElementById('update-panel');


var showAllTab = document.getElementById('js-show-all');
var searchTab = document.getElementById('js-search');
var addContactTab = document.getElementById('js-add-new');





window.onload = function hidePanels() {
   
    searchPanel.setAttribute('style', 'display:none');
    contactPanel.setAttribute('style', 'display:none');
    viewContactPanel.setAttribute('style', 'display:none');   
    updateContactPanel.setAttribute('style', 'display:none');   
    renderAllContacts();
}

searchTab.addEventListener('click', searchContacts);

addContactTab.addEventListener('click', addContacts());

showAllTab.addEventListener('click', showAllContacts());

clickAdd.subscribe(
    e => createContact(),
    e => console.log(`error: ${e}`),
    () => console.log("complete")
);

