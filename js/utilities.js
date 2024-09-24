function showSectionById(id){
    // hide all the sections
    document.getElementById('donation-list').classList.add('hidden');
    document.getElementById('donation-history').classList.add('hidden');
    
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}