function startQuiz() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("questions-section").classList.remove("hidden");
    updateQuestionDisplay();
}

function openModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    window.diagnosa(); // Panggil fungsi diagnosa saat modal dibuka
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}

// Tambahkan event listener untuk menutup modal saat klik di luar
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Modifikasi output di engine.js untuk menggunakan progress circle
function updateOutput(result) {
    const [conclusionPart, cfPart] = result.split(" (CF: ");
    const conclusion = conclusionPart.replace("Lonjakan Biaya Konsumsi Listrik: ", "");
    const cf = parseFloat(cfPart.replace(")", "")) * 100; // Ubah ke persen
    if (isNaN(cf)) {
        document.getElementById("gauge-value").innerText = "NaN";
        document.getElementById("gauge-label").innerText = "Error";
    } else {
        document.getElementById("gauge-value").innerText = cf.toFixed(0);
        document.getElementById("gauge-label").innerText = conclusion;
        const progress = (cf / 100) * 50; // Maksimum 50 karena setengah lingkaran
        document.getElementById("gauge-progress").setAttribute("stroke-dasharray", `${progress} 100`);
    }
}


let currentQuestion = 1;
const totalQuestions = 8;
window.selectedValues = {}; // Membuat selectedValues global

function selectOption(element) {
    const question = element.closest(".question");
    const options = question.querySelectorAll(".option-box");
    options.forEach((opt) => opt.classList.remove("selected"));
    element.classList.add("selected");
    const value = element.getAttribute("data-value");
    const questionId = question.getAttribute("data-index");
    window.selectedValues[questionId] = value;
    const error = question.querySelector(".error-message");
    if (error) error.style.display = "none";
}

function updateQuestionDisplay() {
    document.querySelectorAll(".question").forEach((q) => q.classList.add("hidden"));
    const currentQuestionElement = document.querySelector(`.question[data-index="${currentQuestion}"]`);
    if (!currentQuestionElement) {
        console.error(`Pertanyaan dengan data-index="${currentQuestion}" tidak ditemukan!`);
        return;
    }
    currentQuestionElement.classList.remove("hidden");
    document.getElementById("progress-text").innerText = `Question ${currentQuestion}/${totalQuestions}`;
    document.getElementById("progress-bar").style.width = `${(currentQuestion / totalQuestions) * 100}%`;
    document.getElementById("prev-button").classList.toggle("hidden", currentQuestion === 1);
    document.getElementById("next-button").classList.toggle("hidden", currentQuestion === totalQuestions);
    document.getElementById("diagnosa-button").classList.toggle("hidden", currentQuestion !== totalQuestions);
    const error = currentQuestionElement.querySelector(".error-message");
    if (error) error.style.display = "none";
}

// Event listener untuk tombol Previous
document.getElementById("prev-button").addEventListener("click", () => {
    if (currentQuestion > 1) {
        currentQuestion--;
        updateQuestionDisplay();
    }
});

// Event listener untuk tombol Next
document.getElementById("next-button").addEventListener("click", () => {
    const currentQuestionElement = document.querySelector(`.question[data-index="${currentQuestion}"]`);
    const selectedOption = currentQuestionElement.querySelector(".option-box.selected");
    const error = currentQuestionElement.querySelector(".error-message");
    if (!selectedOption && error) {
        error.style.display = "block";
        return;
    }
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        updateQuestionDisplay();
    }
});