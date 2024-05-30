


var SiteNameInput = document.getElementById('sitename');

var SiteLinkInput = document.getElementById('sitelink');

var alertmessage = document.getElementById('alertmessage');


var LinksList;

if (localStorage.getItem('LinksList')) {
    LinksList = JSON.parse(localStorage.getItem('LinksList'));
    displayLinks();
}
else {
    LinksList = [];
}

function AddLink() {
    var site = {

        SiteName: SiteNameInput.value,
        SiteLink: SiteLinkInput.value,

    }

    if (SiteNameInput.classList.contains('is-valid')&&
        SiteLinkInput.classList.contains('is-valid')) {

        LinksList.push(site);
        localStorage.setItem('LinksList', JSON.stringify(LinksList));
        console.log(LinksList);
    
        clearform();
        displayLinks();
    }
    else{
        alertmessage.classList.remove('d-none');
    }

}


function hidealertbox() {
    alertmessage.classList.add('d-none');
}


function clearform() {
    SiteNameInput.value = '';
    SiteLinkInput.value = '';
}

function displayLinks() {
    var cartoona = '';

    for (var i = 0; i < LinksList.length; i++) {
        cartoona += `
        <tr>
        <td>${i+1}</td>
        <td>${LinksList[i].SiteName}</td>
        <td> <a href="${LinksList[i].SiteLink}" target="_blank" ><button class='btn btn-success'> <i class='fa-solid fa-eye pe-2'></i> Visit </button></a></td>
        <td><button class='btn btn-danger' onclick='Deletelink(${i})'> <i class='fa-solid fa-trash-can pe-2'></i> Delete </button></td>                                         
    </tr>
    `

    }
 
    document.getElementById('listdata').innerHTML = cartoona;

}


function Deletelink(Deletelink) {
    LinksList.splice(Deletelink, 1);
    localStorage.setItem('LinksList', JSON.stringify(LinksList));
    displayLinks();
}



function Validator(element) {


    var rgx = {

        sitename : /[a-z A-Z]{3,}/,
        sitelink : /^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{3,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i,
    };

    if (rgx[element.id].test(element.value)) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        element.nextElementSibling.classList.add('d-none');
    }
    else
    {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        element.nextElementSibling.classList.remove('d-none');
    }
}




