// 初期駅名
let currentStation = "初期駅名";

// 駅名を表示する関数
function updateStationDisplay() {
    document.getElementById("stationDisplay").innerText = "現在の駅: " + currentStation;
}

// ボタンクリックイベントの設定
document.getElementById("changeStationButton").addEventListener("click", function() {
    var newStation = document.getElementById("stationInput").value;
    if (newStation) {
        currentStation = newStation; // 駅名を更新
        console.log("指定駅が変更されました: " + currentStation);
        updateStationDisplay(); // 表示を更新
    } else {
        alert("駅名を入力してください。");
    }
});

// 初期表示の更新
updateStationDisplay();
