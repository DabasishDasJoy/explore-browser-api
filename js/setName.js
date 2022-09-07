const getElementValueById = (id) => {
    const field = document.getElementById(id);
    const value = field.value;
    field.value  = '';
    return value;
}

const setName = () =>{
    const firstName = getElementValueById('first-name');
    const lastName = getElementValueById('last-name');
    
    setNameToLocalStorage(firstName, lastName);
    displayName();
}

const getNameFromLocalStorage = () =>{
    let savedName = localStorage.getItem('name');
    let name = {};
    if(savedName){
        name = JSON.parse(savedName);
    }

    return name;
}

const setNameToLocalStorage = (firstName, lastName) =>{
    const name = getNameFromLocalStorage();
    name['firstName'] = firstName;
    name['lastName'] = lastName;


    localStorage.setItem('name', JSON.stringify(name));
}


