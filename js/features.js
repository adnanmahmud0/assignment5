document.getElementById('show-donation-list')
    .addEventListener('click', function () {
        console.log('show add money button clicked');
        showSectionById('donation-list');
    });


document.getElementById('show-donation-history')
    .addEventListener('click', function () {
        showSectionById('donation-history');
    });