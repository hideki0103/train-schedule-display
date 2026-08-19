const stationData = {
    "京急川崎": {
        "上り": [
            { destination: "品川", time: "09:55", platform: "1番線" },
            { destination: "横浜", time: "10:00", platform: "1番線" },
            { destination: "八丁畷", time: "10:05", platform: "1番線" }
        ],
        "下り": [
            { destination: "京急蒲田", time: "09:52", platform: "2番線" },
            { destination: "雑色", time: "09:55", platform: "2番線" },
            { destination: "川崎", time: "10:05", platform: "2番線" }
        ]
    }
};

function displaySchedule() {
    const scheduleDiv = document.getElementById('schedule');
    scheduleDiv.innerHTML = '';

    const upLine = stationData["京急川崎"]["上り"];
    const downLine = stationData["京急川崎"]["下り"];

    upLine.forEach(train => {
        scheduleDiv.innerHTML += `<div class="schedule-item">上り: ${train.destination} ${train.time} (${train.platform})</div>`;
    });

    downLine.forEach(train => {
        scheduleDiv.innerHTML += `<div class="schedule-item">下り: ${train.destination} ${train.time} (${train.platform})</div>`;
    });
}

displaySchedule();