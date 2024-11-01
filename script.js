const answers = ["apple", "banana", "grape"]; // Tambahkan jawaban yang benar di sini
let currentImageIndex = 0;

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase();
    const resultDisplay = document.getElementById("result");

    if (userAnswer === answers[currentImageIndex]) {
        resultDisplay.textContent = "Benar!";

        currentImageIndex++;
        if (currentImageIndex < answers.length) {
            document.getElementById("game-image").src = `image${currentImageIndex + 1}.jpg`; // Ganti dengan gambar berikutnya
            document.getElementById("answer").value = '';
        } else {
            resultDisplay.textContent = "Game Selesai!";
        }
    } else {
        resultDisplay.textContent = "Salah, coba lagi!";
    }
}
