import { showAllPanel, contactPanel, searchPanel,viewContactPanel } from './main';

var searchButton = document.getElementById('searchButton');

export const searchContacts = function () {
    showAllPanel.setAttribute('style', 'display:none');
    contactPanel.setAttribute('style', 'display:none');
    searchPanel.setAttribute('style', 'display:block');
    viewContactPanel.setAttribute('style', 'display:none');
    searchButton.onclick = searchContactDetails;
};

function searchContactDetails(){
    var searchValue = document.getElementById('searchValue');
    alert(searchValue.value);
}