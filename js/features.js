document.getElementById('show-donation-list')
    .addEventListener('click', function () {
        showSectionById('donation-list');
        buttonChange('show-donation-list', 'show-donation-history');
    });


document.getElementById('show-donation-history')
    .addEventListener('click', function () {
        showSectionById('donation-history');
        buttonChange('show-donation-history', 'show-donation-list');
    });

    document.getElementById('donate-noakhali').addEventListener('click', function () {
        processDonation('noakhali-donation', 'noakhali-total-donation', 1);
    });
    
    document.getElementById('donate-feni').addEventListener('click', function () {
        processDonation('feni-donation', 'feni-total-donation', 2);
    });
    
    document.getElementById('donate-injuries').addEventListener('click', function () {
        processDonation('injuries-donation', 'injuries-total-donation', 3);
    });
    
    document.getElementById('close-popup').addEventListener('click', function () {
        hidePopup('success-popup');
    });