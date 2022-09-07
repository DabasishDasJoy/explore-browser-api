const sendButtons = document.getElementsByClassName('btn-send');


for (const button of sendButtons) {
    button.addEventListener('click', function (event) {
        console.log(event.target.parentNode.parentNode);
        const parentNode = event.target.parentNode.parentNode;
        const input = parentNode.querySelector('input, textarea');
        console.log(input.getAttribute('name'));
        const inputKey = input.getAttribute('name');

        const value = input.value;
        console.log(value);

        setValueToLocalStorage(inputKey, value);
    })
}
const setValueToLocalStorage = (inputKey, value) => {
    localStorage.setItem(inputKey, value);
}

const deleteButtons = document.getElementsByClassName('btn-delete');
for (const deleteButton of deleteButtons) {
    deleteButton.addEventListener('click', function (event) {
        const parentNode = event.target.parentNode.parentNode;
        const input = parentNode.querySelector('input, textarea');
        console.log(input.getAttribute('name'));
        const inputKey = input.getAttribute('name');

        removeFromLocalStorage(inputKey);
    })
}

const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}


document.getElementById('btn-reset').addEventListener('click', function(){
    localStorage.clear();
})

const getSavedNameFromStorage = () =>{
    let savedName = localStorage.getItem('name');
    let name = {};
    if(savedName){
        name = JSON.parse(savedName);
    }
    return name;
}

const getElementValueById = (id) =>{
    return document.getElementById(id).value;
}

const sendAllToLocalStorage = () =>{
    let nameObj = getSavedNameFromStorage();

    const name = getElementValueById('name-field');
    const email = getElementValueById('email-field');
    const msg  = getElementValueById('message-field');

    nameObj['name'] = name;
    nameObj['email'] = email;
    nameObj['message'] = msg;
    setValueToLocalStorage('name', JSON.stringify(nameObj));
}

// console.log(sendButtons);