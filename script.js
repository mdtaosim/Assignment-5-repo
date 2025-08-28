const hearts = document.querySelectorAll('.heart');

for (const heart of hearts) {
    heart.addEventListener('click', function () {
        const clicks = parseInt(document.getElementById('totalClick').innerText);

        const totalHeartClick = clicks + 1;
        document.getElementById('totalClick').innerText = totalHeartClick;

    });
}



const calls = document.querySelectorAll('.call-btn');

let coins = parseInt(document.getElementById('coin').innerText);

const callHistory = document.getElementById('call-history');

for (const call of calls) {
    call.addEventListener('click', function () {

        const card = call.closest('.card');
        const serviceName = card.querySelector('.service-name').innerText;
        const serviceNumber = card.querySelector('.service-number').innerText;

        if (coins < 20) {
            alert("❌আপনার পর্যাপ্ত কয়েন নেই ! কল করতে কমপক্ষে ২০টি কয়েন লাগবে।");
            return;
        }

        coins = coins - 20;
        document.getElementById('coin').innerText = coins;

        alert(`📞Calling ${serviceName} ${serviceNumber}...`);

        const date = new Date();
        const time = date.toLocaleTimeString(); // যেমন: 11:36:58 AM

        const historyItem = document.createElement('div');
        historyItem.innerHTML = `
    
                <div class="flex justify-between items-center bg-gray-100 rounded-lg p-4 mb-2">
                    <div>
                        <h2>${serviceName}</h2>
                        <p class="text-gray-500">${serviceNumber}</p>
                    </div>
                    <p>${time}</p>
                </div>
        `;

        callHistory.prepend(historyItem);
    })
}