function processDonation(donationId, totalDonationId, location) {
    const balance = getTextFieldValueById('balance');
    const donationAmount = getInputFieldValueById(donationId);
    const totalDonationAmount = getTextFieldValueById(totalDonationId);

    // Check if the donation amount is valid (not null) and greater than 0
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    if (balance >= donationAmount) {
        const updatedTotalDonation = totalDonationAmount + donationAmount;
        const updatedBalance = balance - donationAmount;

        document.getElementById(totalDonationId).innerText = updatedTotalDonation;
        document.getElementById('balance').innerText = updatedBalance;

        showPopup('success-popup');

        history(donationAmount, location);

    } else {
        alert("Out of balance.");
    }
}



