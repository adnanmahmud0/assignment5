function history(donationAmount, location){
    const now = new Date();
    // console.log(now);
    if(location === 1){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="border-solid border-gray10 border rounded-2xl m-8 items-center">
            <div class="space-y-4 p-8">
                <h1 class="text-chinese-black font-bold text-lg">${donationAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
                <p class="text-chinese-black-sev text-justify">Date : ${now}</p>
            </div>
        </div>

        `

        document.getElementById('individuals-donation-histotry').appendChild(div);
    }
    else if(location === 2){

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="border-solid border-gray10 border rounded-2xl m-8 items-center">
            <div class="space-y-4 p-8">
                <h1 class="text-chinese-black font-bold text-lg">${donationAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
                <p class="text-chinese-black-sev text-justify">Date : ${now}</p>
            </div>
        </div>
        `

        document.getElementById('individuals-donation-histotry').appendChild(div);
    }
    else if(location ===3){

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="border-solid border-gray10 border rounded-2xl m-8 items-center">
            <div class="space-y-4 p-8">
                <h1 class="text-chinese-black font-bold text-lg">${donationAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
                <p class="text-chinese-black-sev text-justify">Date : ${now}</p>
            </div>
        </div>
        `

        document.getElementById('individuals-donation-histotry').appendChild(div);
    }
}