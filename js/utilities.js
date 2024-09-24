function showSectionById(id){
    // hide all the sections
    document.getElementById('donation-list').classList.add('hidden');
    document.getElementById('donation-history').classList.add('hidden');
    
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}

function showPopup(id){
    document.getElementById(id).classList.remove('hidden');
}

function hidePopup(id){
    document.getElementById(id).classList.add('hidden');
}


function getInputFieldValueById(id){
    const textValue = document.getElementById(id).value;
    const textNumber = parseFloat(textValue);

    return textNumber;
    
}


function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
