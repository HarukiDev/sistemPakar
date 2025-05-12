const rules = [
    // Rule Set 1: Lonjakan Biaya Konsumsi Listrik
    {
        id: 1,
        if: [
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Rendah-Terkelola", operator: "OR" },
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Rendah-Tidak Terkelola", operator: "OR" },
            { atribut: "Kapasitas Listrik Rumah", nilai: "Kapasitas Memadai", operator: "AND" },
            { atribut: "Tagihan Listrik", nilai: "Normal", operator: "AND" }
        ],
        then: { atribut: "Lonjakan Biaya Konsumsi Listrik", nilai: "Rendah" },
        cf_rule: 0.85
    },
    {
        id: 2,
        if: [
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Rendah-Terkelola", operator: "AND" },
            { atribut: "Kapasitas Listrik Rumah", nilai: "Mendekati Batas Kapasitas", operator: "AND" },
            { atribut: "Tagihan Listrik", nilai: "Normal", operator: "AND" }
        ],
        then: { atribut: "Lonjakan Biaya Konsumsi Listrik", nilai: "Rendah" },
        cf_rule: 0.8
    },
    {
        id: 3,
        if: [
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Rendah-Terkelola", operator: "OR" },
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Rendah-Tidak Terkelola", operator: "OR" },
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Tinggi-Terkelola", operator: "OR" },
            { atribut: "Kapasitas Listrik Rumah", nilai: "Kapasitas Memadai", operator: "AND" }
        ],
        then: { atribut: "Lonjakan Biaya Konsumsi Listrik", nilai: "Sedang" },
        cf_rule: 0.75
    },
    {
        id: 4,
        if: [
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Rendah-Terkelola", operator: "AND" },
            { atribut: "Kapasitas Listrik Rumah", nilai: "Melebihi Kapasitas", operator: "AND" },
            { atribut: "Tagihan Listrik", nilai: "Normal", operator: "AND" }
        ],
        then: { atribut: "Lonjakan Biaya Konsumsi Listrik", nilai: "Sedang" },
        cf_rule: 0.7
    },
    {
        id: 5,
        if: [
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Rendah-Terkelola", operator: "AND" },
            { atribut: "Kapasitas Listrik Rumah", nilai: "Mendekati Batas Kapasitas", operator: "AND" },
            { atribut: "Tagihan Listrik", nilai: "Meningkat", operator: "AND" }
        ],
        then: { atribut: "Lonjakan Biaya Konsumsi Listrik", nilai: "Sedang" },
        cf_rule: 0.78
    },
    {
        id: 6,
        if: [
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Rendah-Tidak Terkelola", operator: "OR" },
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Tinggi-Terkelola", operator: "OR" },
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Tinggi-Tidak Terkelola", operator: "OR" },
            { atribut: "Kapasitas Listrik Rumah", nilai: "Mendekati Batas Kapasitas", operator: "AND" },
            { atribut: "Tagihan Listrik", nilai: "Normal", operator: "AND" }
        ],
        then: { atribut: "Lonjakan Biaya Konsumsi Listrik", nilai: "Sedang" },
        cf_rule: 0.73
    },
    {
        id: 7,
        if: [
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Tinggi-Tidak Terkelola", operator: "AND" },
            { atribut: "Kapasitas Listrik Rumah", nilai: "Kapasitas Memadai", operator: "AND" },
            { atribut: "Tagihan Listrik", nilai: "Normal", operator: "AND" }
        ],
        then: { atribut: "Lonjakan Biaya Konsumsi Listrik", nilai: "Sedang" },
        cf_rule: 0.72
    },
    {
        id: 8,
        if: [
            { atribut: "Kapasitas Listrik Rumah", nilai: "Melebihi Kapasitas", operator: "AND" },
            { atribut: "Tagihan Listrik", nilai: "Meningkat", operator: "AND" }
        ],
        then: { atribut: "Lonjakan Biaya Konsumsi Listrik", nilai: "Tinggi" },
        cf_rule: 0.9
    },
    {
        id: 9,
        if: [
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Rendah-Tidak Terkelola", operator: "OR" },
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Tinggi-Terkelola", operator: "OR" },
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Tinggi-Tidak Terkelola", operator: "OR" },
            { atribut: "Kapasitas Listrik Rumah", nilai: "Mendekati Batas Kapasitas", operator: "AND" },
            { atribut: "Tagihan Listrik", nilai: "Meningkat", operator: "AND" }
        ],
        then: { atribut: "Lonjakan Biaya Konsumsi Listrik", nilai: "Tinggi" },
        cf_rule: 0.88
    },
    {
        id: 10,
        if: [
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Rendah-Tidak Terkelola", operator: "OR" },
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Tinggi-Terkelola", operator: "OR" },
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Tinggi-Tidak Terkelola", operator: "OR" },
            { atribut: "Kapasitas Listrik Rumah", nilai: "Melebihi Kapasitas", operator: "AND" },
            { atribut: "Tagihan Listrik", nilai: "Normal", operator: "AND" }
        ],
        then: { atribut: "Lonjakan Biaya Konsumsi Listrik", nilai: "Tinggi" },
        cf_rule: 0.87
    },
    {
        id: 11,
        if: [
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Tinggi-Tidak Terkelola", operator: "AND" },
            { atribut: "Kapasitas Listrik Rumah", nilai: "Kapasitas Memadai", operator: "AND" },
            { atribut: "Tagihan Listrik", nilai: "Meningkat", operator: "AND" }
        ],
        then: { atribut: "Lonjakan Biaya Konsumsi Listrik", nilai: "Tinggi" },
        cf_rule: 0.89
    },
    {
        id: 12,
        if: [
            { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Tinggi-Terkelola", operator: "AND" },
            { atribut: "Kapasitas Listrik Rumah", nilai: "Kapasitas Memadai", operator: "AND" },
            { atribut: "Tagihan Listrik", nilai: "Normal", operator: "AND" }
        ],
        then: { atribut: "Lonjakan Biaya Konsumsi Listrik", nilai: "Stabil" },
        cf_rule: 0.8
    },
    // Rule Set 2: Pengelolaan Penggunaan Listrik
    {
        id: 13,
        if: [
            { atribut: "Konsumsi Listrik per Bulan", nilai: "Rendah", operator: "AND" },
            { atribut: "Jumlah Perangkat Aktif Bersamaan", nilai: "Sedikit", operator: "AND" },
            { atribut: "Pola Penggunaan Listrik", nilai: "Hemat", operator: "OR" },
            { atribut: "Pola Penggunaan Listrik", nilai: "Normal", operator: "OR" }
        ],
        then: { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Rendah-Terkelola" },
        cf_rule: 0.95
    },
    {
        id: 14,
        if: [
            { atribut: "Konsumsi Listrik per Bulan", nilai: "Rendah", operator: "AND" },
            { atribut: "Jumlah Perangkat Aktif Bersamaan", nilai: "Sedang", operator: "AND" },
            { atribut: "Pola Penggunaan Listrik", nilai: "Hemat", operator: "AND" }
        ],
        then: { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Rendah-Terkelola" },
        cf_rule: 0.85
    },
    {
        id: 15,
        if: [
            { atribut: "Konsumsi Listrik per Bulan", nilai: "Sedang", operator: "AND" },
            { atribut: "Jumlah Perangkat Aktif Bersamaan", nilai: "Sedikit", operator: "AND" },
            { atribut: "Pola Penggunaan Listrik", nilai: "Hemat", operator: "OR" },
            { atribut: "Pola Penggunaan Listrik", nilai: "Normal", operator: "OR" }
        ],
        then: { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Rendah-Terkelola" },
        cf_rule: 0.8
    },
    {
        id: 16,
        if: [
            { atribut: "Konsumsi Listrik per Bulan", nilai: "Rendah", operator: "AND" },
            { atribut: "Pola Penggunaan Listrik", nilai: "Boros", operator: "AND" }
        ],
        then: { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Tinggi-Tidak Terkelola" },
        cf_rule: 0.75
    },
    {
        id: 17,
        if: [
            { atribut: "Konsumsi Listrik per Bulan", nilai: "Rendah", operator: "AND" },
            { atribut: "Jumlah Perangkat Aktif Bersamaan", nilai: "Sedang", operator: "AND" },
            { atribut: "Pola Penggunaan Listrik", nilai: "Normal", operator: "AND" }
        ],
        then: { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Tinggi-Tidak Terkelola" },
        cf_rule: 0.8
    },
    {
        id: 18,
        if: [
            { atribut: "Konsumsi Listrik per Bulan", nilai: "Rendah", operator: "AND" },
            { atribut: "Jumlah Perangkat Aktif Bersamaan", nilai: "Banyak", operator: "AND" }
        ],
        then: { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Tinggi-Tidak Terkelola" },
        cf_rule: 0.85
    },
    {
        id: 19,
        if: [
            { atribut: "Konsumsi Listrik per Bulan", nilai: "Sedang", operator: "AND" },
            { atribut: "Jumlah Perangkat Aktif Bersamaan", nilai: "Sedikit", operator: "AND" },
            { atribut: "Pola Penggunaan Listrik", nilai: "Boros", operator: "AND" }
        ],
        then: { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Tinggi-Tidak Terkelola" },
        cf_rule: 0.8
    },
    {
        id: 20,
        if: [
            { atribut: "Konsumsi Listrik per Bulan", nilai: "Sedang", operator: "AND" },
            { atribut: "Jumlah Perangkat Aktif Bersamaan", nilai: "Sedang", operator: "AND" }
        ],
        then: { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Tinggi-Tidak Terkelola" },
        cf_rule: 0.75
    },
    {
        id: 21,
        if: [
            { atribut: "Konsumsi Listrik per Bulan", nilai: "Sedang", operator: "AND" },
            { atribut: "Jumlah Perangkat Aktif Bersamaan", nilai: "Banyak", operator: "AND" }
        ],
        then: { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Tinggi-Tidak Terkelola" },
        cf_rule: 0.85
    },
    {
        id: 22,
        if: [
            { atribut: "Konsumsi Listrik per Bulan", nilai: "Tinggi", operator: "AND" }
        ],
        then: { atribut: "Pengelolaan Penggunaan Listrik", nilai: "Penggunaan Tinggi-Tidak Terkelola" },
        cf_rule: 0.95
    },
    // Rule Set 3: Kapasitas Listrik Rumah
    {
        id: 23,
        if: [
            { atribut: "Kemampuan Daya Listrik terhadap Beban", nilai: "Sesuai", operator: "AND" }
        ],
        then: { atribut: "Kapasitas Listrik Rumah", nilai: "Kapasitas Memadai" },
        cf_rule: 0.95
    },
    {
        id: 24,
        if: [
            { atribut: "Kemampuan Daya Listrik terhadap Beban", nilai: "Hampir penuh", operator: "AND" }
        ],
        then: { atribut: "Kapasitas Listrik Rumah", nilai: "Mendekati Batas Kapasitas" },
        cf_rule: 0.85
    },
    {
        id: 25,
        if: [
            { atribut: "Kemampuan Daya Listrik terhadap Beban", nilai: "Overload", operator: "AND" }
        ],
        then: { atribut: "Kapasitas Listrik Rumah", nilai: "Melebihi Kapasitas" },
        cf_rule: 0.95
    },
    // Rule Set 4: Tagihan Listrik
    {
        id: 26,
        if: [
            { atribut: "Kenaikan Tagihan Dibanding Bulan Lalu", nilai: "Normal", operator: "AND" },
            { atribut: "Besaran Tagihan Listrik", nilai: "Rendah", operator: "AND" }
        ],
        then: { atribut: "Tagihan Listrik", nilai: "Normal" },
        cf_rule: 0.9
    },
    {
        id: 27,
        if: [
            { atribut: "Kenaikan Tagihan Dibanding Bulan Lalu", nilai: "Normal", operator: "AND" },
            { atribut: "Besaran Tagihan Listrik", nilai: "Sedang", operator: "AND" }
        ],
        then: { atribut: "Tagihan Listrik", nilai: "Normal" },
        cf_rule: 0.85
    },
    {
        id: 28,
        if: [
            { atribut: "Kenaikan Tagihan Dibanding Bulan Lalu", nilai: "Normal", operator: "AND" },
            { atribut: "Besaran Tagihan Listrik", nilai: "Tinggi", operator: "AND" }
        ],
        then: { atribut: "Tagihan Listrik", nilai: "Meningkat" },
        cf_rule: 0.75
    },
    {
        id: 29,
        if: [
            { atribut: "Kenaikan Tagihan Dibanding Bulan Lalu", nilai: "Waspada", operator: "OR" },
            { atribut: "Kenaikan Tagihan Dibanding Bulan Lalu", nilai: "Tinggi", operator: "OR" }
        ],
        then: { atribut: "Tagihan Listrik", nilai: "Meningkat" },
        cf_rule: 0.95
    }
];

// Fungsi untuk menghitung CF dari sebuah aturan dengan pendekatan rekursif
function calculateRuleCF(conditions, cf_rule, userInput, memo = new Map()) {
    let cfConditions = [];
    let isOr = false;
    let orGroup = [];

    for (const kondisi of conditions) {
        let cfKondisiSaatIni = 0;

        // Jika atribut adalah input langsung dari pengguna
        if (kondisi.atribut === "Konsumsi Listrik per Bulan" && kondisi.nilai === userInput.konsumsi) {
            cfKondisiSaatIni = userInput.cfKonsumsi;
        } else if (kondisi.atribut === "Jumlah Perangkat Aktif Bersamaan" && kondisi.nilai === userInput.perangkat) {
            cfKondisiSaatIni = userInput.cfPerangkat;
        } else if (kondisi.atribut === "Pola Penggunaan Listrik" && kondisi.nilai === userInput.pola) {
            cfKondisiSaatIni = userInput.cfPola;
        } else if (kondisi.atribut === "Kemampuan Daya Listrik terhadap Beban" && kondisi.nilai === userInput.beban) {
            cfKondisiSaatIni = userInput.cfBeban;
        } else if (kondisi.atribut === "Kenaikan Tagihan Dibanding Bulan Lalu" && kondisi.nilai === userInput.kenaikan) {
            cfKondisiSaatIni = userInput.cfKenaikan;
        } else if (kondisi.atribut === "Besaran Tagihan Listrik" && kondisi.nilai === userInput.besarTagihan) {
            cfKondisiSaatIni = userInput.cfBesarTagihan;
        }
        // Jika atribut adalah variabel turunan, lakukan evaluasi rekursif
        else if (kondisi.atribut === "Pengelolaan Penggunaan Listrik") {
            const key = `Pengelolaan Penggunaan Listrik:${kondisi.nilai}`;
            if (memo.has(key)) {
                cfKondisiSaatIni = memo.get(key);
            } else {
                const matchingRules = rules.filter(rule => rule.then.atribut === "Pengelolaan Penggunaan Listrik" && rule.then.nilai === kondisi.nilai);
                let cfSubConclusion = 0;
                for (const rule of matchingRules) {
                    const cfRule = calculateRuleCF(rule.if, rule.cf_rule, userInput, memo);
                    if (cfRule > 0) {
                        cfSubConclusion = cfRule;
                        break;
                    }
                }
                memo.set(key, cfSubConclusion);
                cfKondisiSaatIni = cfSubConclusion;
            }
        } else if (kondisi.atribut === "Kapasitas Listrik Rumah") {
            const key = `Kapasitas Listrik Rumah:${kondisi.nilai}`;
            if (memo.has(key)) {
                cfKondisiSaatIni = memo.get(key);
            } else {
                const matchingRules = rules.filter(rule => rule.then.atribut === "Kapasitas Listrik Rumah" && rule.then.nilai === kondisi.nilai);
                let cfSubConclusion = 0;
                for (const rule of matchingRules) {
                    const cfRule = calculateRuleCF(rule.if, rule.cf_rule, userInput, memo);
                    if (cfRule > 0) {
                        cfSubConclusion = cfRule;
                        break;
                    }
                }
                memo.set(key, cfSubConclusion);
                cfKondisiSaatIni = cfSubConclusion;
            }
        } else if (kondisi.atribut === "Tagihan Listrik") {
            const key = `Tagihan Listrik:${kondisi.nilai}`;
            if (memo.has(key)) {
                cfKondisiSaatIni = memo.get(key);
            } else {
                const matchingRules = rules.filter(rule => rule.then.atribut === "Tagihan Listrik" && rule.then.nilai === kondisi.nilai);
                let cfSubConclusion = 0;
                for (const rule of matchingRules) {
                    const cfRule = calculateRuleCF(rule.if, rule.cf_rule, userInput, memo);
                    if (cfRule > 0) {
                        cfSubConclusion = cfRule;
                        break;
                    }
                }
                memo.set(key, cfSubConclusion);
                cfKondisiSaatIni = cfSubConclusion;
            }
        }

        if (kondisi.operator === "OR") {
            isOr = true;
            orGroup.push(cfKondisiSaatIni);
        } else {
            if (isOr && orGroup.length > 0) {
                cfConditions.push(Math.max(...orGroup));
                orGroup = [];
                isOr = false;
            }
            cfConditions.push(cfKondisiSaatIni);
        }
    }

    if (orGroup.length > 0) {
        cfConditions.push(Math.max(...orGroup));
    }

    // Hanya hitung CF jika semua kondisi terpenuhi, gunakan MINIMUM untuk AND
    if (cfConditions.every(cf => cf > 0)) {
        const minCf = Math.min(...cfConditions); // Minimum untuk AND
        return minCf * cf_rule;
    }
    return 0;
}

function diagnosa() {
    const userInput = {
        konsumsi: window.selectedValues['1'] || '',
        perangkat: window.selectedValues['2'] || '',
        pola: window.selectedValues['3'] || '',
        beban: window.selectedValues['5'] || '',
        kenaikan: window.selectedValues['6'] || '',
        besarTagihan: window.selectedValues['7'] || '',
        faktor: window.selectedValues['8'] || '',
        cfKonsumsi: parseFloat(document.getElementById("cf-value-konsumsi")?.innerText) || 0.1,
        cfPerangkat: parseFloat(document.getElementById("cf-value-perangkat")?.innerText) || 0.1,
        cfPola: parseFloat(document.getElementById("cf-value-pola")?.innerText) || 0.1,
        cfBeban: parseFloat(document.getElementById("cf-value-beban")?.innerText) || 0.1,
        cfKenaikan: parseFloat(document.getElementById("cf-value-kenaikan")?.innerText) || 0.1,
        cfBesarTagihan: parseFloat(document.getElementById("cf-value-besarTagihan")?.innerText) || 0.1,
        cfFaktor: parseFloat(document.getElementById("cf-value-faktor")?.innerText) || 0.1
    };

    // Validasi input
    const requiredInputs = [
        userInput.konsumsi, userInput.perangkat, userInput.pola,
        userInput.beban, userInput.kenaikan, userInput.besarTagihan
    ];
    if (requiredInputs.some(input => !input)) {
        console.error("Missing required input values.");
        document.getElementById("gauge-value").innerText = "Error";
        document.getElementById("gauge-label").innerText = "Missing Inputs";
        return;
    }

    const cfs = [
        userInput.cfKonsumsi, userInput.cfPerangkat, userInput.cfPola,
        userInput.cfBeban, userInput.cfKenaikan, userInput.cfBesarTagihan, userInput.cfFaktor
    ];
    for (const cf of cfs) {
        if (isNaN(cf) || cf < 0.1 || cf > 1.0) {
            console.error("Invalid CF detected:", cf);
            document.getElementById("gauge-value").innerText = "Error";
            document.getElementById("gauge-label").innerText = "Check Inputs";
            return;
        }
    }

    const conclusions = ["Rendah", "Sedang", "Tinggi", "Stabil"];
    let finalResult = "Tidak ditemukan hasil yang sesuai.";
    let maxCf = 0;
    const memo = new Map();

    for (const conclusion of conclusions) {
        const matchingRules = rules.filter(rule => rule.then.atribut === "Lonjakan Biaya Konsumsi Listrik" && rule.then.nilai === conclusion);
        let cfConclusion = 0;

        // Ambil CF pertama yang valid untuk kesimpulan ini (tanpa kombinasi)
        for (const rule of matchingRules) {
            const cfRule = calculateRuleCF(rule.if, rule.cf_rule, userInput, memo);
            if (cfRule > 0) {
                cfConclusion = cfRule;
                break; // Hentikan setelah menemukan satu CF valid
            }
        }

        if (cfConclusion > maxCf) {
            maxCf = cfConclusion;
            finalResult = `Lonjakan Biaya Konsumsi Listrik: ${conclusion} (CF: ${cfConclusion.toFixed(2)})`;
        }
    }

    window.updateOutput(finalResult);
}