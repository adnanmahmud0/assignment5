document.getElementById('show-donation-list')
    .addEventListener('click', function () {
        console.log('show add money button clicked');
        showSectionById('donation-list');
    });


document.getElementById('show-donation-history')
    .addEventListener('click', function () {
        showSectionById('donation-history');
    });

    document.getElementById('donate-noakhali').addEventListener('click', function () {
        processDonation('noakhali-donation', 'noakhali-total-donation');
    });
    
    document.getElementById('donate-feni').addEventListener('click', function () {
        processDonation('feni-donation', 'feni-total-donation');
    });
    
    document.getElementById('donate-injuries').addEventListener('click', function () {
        processDonation('injuries-donation', 'injuries-total-donation');
    });
    
    document.getElementById('close-popup').addEventListener('click', function () {
        hidePopup('success-popup');
    });