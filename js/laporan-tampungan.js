// =====================================================
// LAPORAN POS TAMPUNGAN
// FPB DUTY SYSTEM
// SOURCE: rk02_pos_tampungan
// =====================================================

console.log("==============================================");
console.log("📋 LAPORAN POS TAMPUNGAN JS READY");
console.log("==============================================");

// =====================================================
// GLOBAL
// =====================================================

let dataTampungan = [];
let laporanTampungan = [];

let bulanSemasa = null;
let tahunSemasa = null;


// =====================================================
// SENARAI BULAN
// =====================================================

const SENARAI_BULAN = [
    "",
    "JANUARI",
    "FEBRUARI",
    "MAC",
    "APRIL",
    "MEI",
    "JUN",
    "JULAI",
    "OGOS",
    "SEPTEMBER",
    "OKTOBER",
    "NOVEMBER",
    "DISEMBER"
];


// =====================================================
// INIT
// =====================================================

document.addEventListener("DOMContentLoaded", async () => {

    console.log("📋 LAPORAN TAMPUNGAN: INIT");

    await tungguSupabase();

    isiBulan();
    isiTahun();

    // Default bulan / tahun semasa
    const sekarang = new Date();

    bulanSemasa = sekarang.getMonth() + 1;
    tahunSemasa = sekarang.getFullYear();

    const bulanSelect = document.getElementById("filterBulan");
    const tahunSelect = document.getElementById("filterTahun");

    if (bulanSelect) {
        bulanSelect.value = String(bulanSemasa);
    }

    if (tahunSelect) {
        tahunSelect.value = String(tahunSemasa);
    }

});


// =====================================================
// TUNGGU SUPABASE
// =====================================================

async function tungguSupabase() {

    let percubaan = 0;

    while (!window.supabaseClient && percubaan < 50) {

        await new Promise(resolve => setTimeout(resolve, 100));

        percubaan++;

    }

    if (!window.supabaseClient) {

        console.error("❌ SUPABASE CLIENT TIDAK DIJUMPA");

        alert("Supabase belum siap.");

        return false;

    }

    console.log("✅ SUPABASE CLIENT READY");

    return true;

}


// =====================================================
// ISI BULAN
// =====================================================

function isiBulan() {

    const select = document.getElementById("filterBulan");

    if (!select) return;

    select.innerHTML = `
        <option value="">
            -- Pilih Bulan --
        </option>
    `;

    for (let i = 1; i <= 12; i++) {

        const option = document.createElement("option");

        option.value = i;

        option.textContent = SENARAI_BULAN[i];

        select.appendChild(option);

    }

}


// =====================================================
// ISI TAHUN
// =====================================================

function isiTahun() {

    const select = document.getElementById("filterTahun");

    if (!select) return;

    select.innerHTML = `
        <option value="">
            -- Pilih Tahun --
        </option>
    `;

    const tahunSekarang = new Date().getFullYear();

    for (
        let tahun = tahunSekarang - 3;
        tahun <= tahunSekarang + 2;
        tahun++
    ) {

        const option = document.createElement("option");

        option.value = tahun;

        option.textContent = tahun;

        select.appendChild(option);

    }

}


// =====================================================
// PAPAR LAPORAN
// =====================================================

async function paparLaporanTampungan() {

    const bulan = Number(
        document.getElementById("filterBulan")?.value
    );

    const tahun = Number(
        document.getElementById("filterTahun")?.value
    );


    if (!bulan || !tahun) {

        alert("Sila pilih Bulan dan Tahun.");

        return;

    }


    console.log("----------------------------------------------");
    console.log("🔍 CARI DATA TAMPUNGAN");
    console.log("Bulan:", bulan);
    console.log("Tahun:", tahun);
    console.log("----------------------------------------------");


    const db = window.supabaseClient;

    if (!db) {

        alert("Supabase belum disambungkan.");

        return;

    }


    const tbody =
        document.getElementById("senaraiTampungan");

    if (tbody) {

        tbody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align:center;">
                    ⏳ Memuatkan data...
                </td>
            </tr>
        `;

    }


    try {

        const { data, error } = await db
            .from("rk02_pos_tampungan")
            .select("*")
            .eq("bulan", bulan)
            .eq("tahun", tahun)
            .order("poskhidmat", {
                ascending: true
            })
            .order("nama", {
                ascending: true
            });


        if (error) {

            console.error(
                "❌ RALAT SUPABASE:",
                error
            );

            throw error;

        }


        dataTampungan = data || [];


        console.log(
            "✅ DATA TAMPUNGAN:",
            dataTampungan.length
        );


        binaLaporanTampungan();


        paparJadual();


    } catch (error) {

        console.error(
            "❌ GAGAL MUAT DATA TAMPUNGAN:",
            error
        );


        if (tbody) {

            tbody.innerHTML = `
                <tr>
                    <td colspan="8"
                        style="text-align:center;color:#b94b4b;">
                        ❌ Gagal memuatkan data.
                    </td>
                </tr>
            `;

        }

        alert(
            "Gagal memuatkan laporan tampungan.\n\n" +
            error.message
        );

    }

}


// =====================================================
// BINA LAPORAN
// =====================================================

function binaLaporanTampungan() {

    laporanTampungan = [];


    dataTampungan.forEach(row => {

        // ---------------------------------------------
        // POS 1
        // ---------------------------------------------

        tambahPosJikaAda(
            row,
            1
        );


        // ---------------------------------------------
        // POS 2
        // ---------------------------------------------

        tambahPosJikaAda(
            row,
            2
        );


        // ---------------------------------------------
        // POS 3
        // ---------------------------------------------

        tambahPosJikaAda(
            row,
            3
        );


        // ---------------------------------------------
        // POS 4
        // ---------------------------------------------

        tambahPosJikaAda(
            row,
            4
        );


        // ---------------------------------------------
        // POS 5
        // ---------------------------------------------

        tambahPosJikaAda(
            row,
            5
        );


        // ---------------------------------------------
        // POS 6
        // ---------------------------------------------

        tambahPosJikaAda(
            row,
            6
        );

    });


    console.log(
        "📊 BARIS LAPORAN:",
        laporanTampungan.length
    );

}


// =====================================================
// TAMBAH POS
// =====================================================

function tambahPosJikaAda(row, nomborPos) {

    const namaColumn =
        `pos${nomborPos}`;

    const jamColumn =
        `jam_pos${nomborPos}`;

    const rmColumn =
        `rm_pos${nomborPos}`;


    const namaPos =
        row[namaColumn];


    const jam =
        Number(row[jamColumn]) || 0;


    const rm =
        Number(row[rmColumn]) || 0;


    // Jangan masukkan kalau tiada jam
    if (jam <= 0) {

        return;

    }


    // Nama pos wajib ada
    if (!namaPos || !String(namaPos).trim()) {

        return;

    }


    laporanTampungan.push({

        id: row.id,

        bulan: row.bulan,

        tahun: row.tahun,

        posTampungan:
            String(namaPos).trim(),

        no_skb:
            row.no_skb || "",

        nama:
            row.nama || "",

        poskhidmat:
            row.poskhidmat || "",

        jam:
            jam,

        rm:
            rm,

        nomborPos:
            nomborPos

    });

}


// =====================================================
// PAPAR JADUAL
// =====================================================

function paparJadual() {

    const tbody =
        document.getElementById(
            "senaraiTampungan"
        );


    if (!tbody) {

        console.error(
            "❌ #senaraiTampungan tidak dijumpai"
        );

        return;

    }


    tbody.innerHTML = "";


    if (!laporanTampungan.length) {

        tbody.innerHTML = `
            <tr>
                <td colspan="8"
                    style="text-align:center;padding:25px;">
                    Tiada rekod tampungan bagi bulan dan tahun dipilih.
                </td>
            </tr>
        `;


        kemasKiniJumlah();

        return;

    }


    laporanTampungan.forEach(
        (row, index) => {

            const tr =
                document.createElement("tr");


            tr.innerHTML = `

                <td>
                    ${index + 1}
                </td>

                <td>
                    <strong>
                        ${escapeHtml(
                            row.posTampungan
                        )}
                    </strong>
                </td>

                <td>
                    ${escapeHtml(
                        row.no_skb
                    )}
                </td>

                <td>
                    ${escapeHtml(
                        row.nama
                    )}
                </td>

                <td>
                    ${escapeHtml(
                        row.poskhidmat
                    )}
                </td>

                <td>
                    ${formatRM(
                        dapatkanBasicGaji(
                            row.no_skb
                        )
                    )}
                </td>

                <td>
                    ${formatJam(
                        row.jam
                    )}
                </td>

                <td>
                    <strong>
                        ${formatRM(
                            row.rm
                        )}
                    </strong>
                </td>

            `;


            tbody.appendChild(tr);

        }
    );


    kemasKiniJumlah();

}


// =====================================================
// BASIC GAJI
// =====================================================
//
// rk02_pos_tampungan TIDAK ADA column gaji_pokok.
// Buat sementara kita cuba baca daripada cache
// jika page lain pernah simpan Data_Anggota.
//
// Kalau tiada, papar RM 0.00.
// =====================================================

function dapatkanBasicGaji(noSKB) {

    // Cuba cache global
    if (
        window.dataAnggota &&
        Array.isArray(window.dataAnggota)
    ) {

        const anggota =
            window.dataAnggota.find(
                x =>
                    String(x.no_skb) ===
                    String(noSKB)
            );


        if (anggota) {

            return Number(
                anggota.gaji_pokok
            ) || 0;

        }

    }


    return 0;

}


// =====================================================
// JUMLAH
// =====================================================

function kemasKiniJumlah() {

    let jumlahJam = 0;

    let jumlahRM = 0;


    laporanTampungan.forEach(row => {

        jumlahJam +=
            Number(row.jam) || 0;

        jumlahRM +=
            Number(row.rm) || 0;

    });


    const elJam =
        document.getElementById(
            "jumlahJam"
        );


    const elRM =
        document.getElementById(
            "jumlahRm"
        );


    if (elJam) {

        elJam.textContent =
            formatJam(jumlahJam);

    }


    if (elRM) {

        elRM.textContent =
            formatRM(jumlahRM);

    }


    console.log(
        "TOTAL JAM:",
        jumlahJam
    );


    console.log(
        "TOTAL RM:",
        jumlahRM
    );

}


// =====================================================
// FORMAT JAM
// =====================================================

function formatJam(value) {

    const number =
        Number(value) || 0;


    return number
        .toLocaleString(
            "ms-MY",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        );

}


// =====================================================
// FORMAT RM
// =====================================================

function formatRM(value) {

    const number =
        Number(value) || 0;


    return "RM " +
        number.toLocaleString(
            "ms-MY",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        );

}


// =====================================================
// ESCAPE HTML
// =====================================================

function escapeHtml(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// =====================================================
// CETAK / PDF
// =====================================================

function cetakLaporanPDF() {

    if (!laporanTampungan.length) {

        alert(
            "Sila papar laporan terlebih dahulu."
        );

        return;

    }


    const jsPDF =
        window.jspdf?.jsPDF;


    if (!jsPDF) {

        alert(
            "Library PDF belum dimuatkan."
        );

        return;

    }


    const doc =
        new jsPDF({
            orientation: "landscape",
            unit: "mm",
            format: "a3"
        });


    const bulan =
        document.getElementById(
            "filterBulan"
        )?.value;


    const tahun =
        document.getElementById(
            "filterTahun"
        )?.value;


    const namaBulan =
        SENARAI_BULAN[
            Number(bulan)
        ] || "";


    // ---------------------------------------------
    // HEADER
    // ---------------------------------------------

    doc.setFontSize(18);

    doc.text(
        "LAPORAN POS TAMPUNGAN",
        20,
        18
    );


    doc.setFontSize(11);

    doc.text(
        `WILAYAH TERENGGANU | ${namaBulan} ${tahun}`,
        20,
        26
    );


    // ---------------------------------------------
    // TABLE
    // ---------------------------------------------

    const body =
        laporanTampungan.map(
            (row, index) => [

                index + 1,

                row.posTampungan,

                row.no_skb,

                row.nama,

                row.poskhidmat,

                formatRM(
                    dapatkanBasicGaji(
                        row.no_skb
                    )
                ),

                formatJam(
                    row.jam
                ),

                formatRM(
                    row.rm
                )

            ]
        );


    const jumlahJam =
        laporanTampungan.reduce(
            (sum, row) =>
                sum + (
                    Number(row.jam) || 0
                ),
            0
        );


    const jumlahRM =
        laporanTampungan.reduce(
            (sum, row) =>
                sum + (
                    Number(row.rm) || 0
                ),
            0
        );


    body.push([

        "",

        "",

        "",

        "",

        "JUMLAH",

        "",

        formatJam(jumlahJam),

        formatRM(jumlahRM)

    ]);


    doc.autoTable({

        startY: 33,

        head: [[

            "Bil",

            "Pos Tampungan",

            "No SKB",

            "Nama Anggota",

            "Pos Asal",

            "Basic Gaji",

            "Jumlah Jam Tampung",

            "Jumlah KLM (RM)"

        ]],

        body: body,

        theme: "grid",

        styles: {

            fontSize: 8,

            cellPadding: 3

        },

        headStyles: {

            fontStyle: "bold",

            halign: "center"

        },

        columnStyles: {

            0: {
                halign: "center",
                cellWidth: 12
            },

            1: {
                cellWidth: 60
            },

            2: {
                cellWidth: 25
            },

            3: {
                cellWidth: 55
            },

            4: {
                cellWidth: 60
            },

            5: {
                halign: "right",
                cellWidth: 28
            },

            6: {
                halign: "right",
                cellWidth: 28
            },

            7: {
                halign: "right",
                cellWidth: 32
            }

        }

    });


    doc.save(
        `Laporan_Tampungan_${bulan}_${tahun}.pdf`
    );

}


// =====================================================
// CSV
// =====================================================

function muatTurunCSV() {

    if (!laporanTampungan.length) {

        alert(
            "Sila papar laporan terlebih dahulu."
        );

        return;

    }


    const bulan =
        document.getElementById(
            "filterBulan"
        )?.value || "";


    const tahun =
        document.getElementById(
            "filterTahun"
        )?.value || "";


    const rows = [];


    rows.push([

        "Bil",

        "Pos Tampungan",

        "No SKB",

        "Nama Anggota",

        "Pos Asal",

        "Basic Gaji",

        "Jumlah Jam Tampung",

        "Jumlah KLM (RM)"

    ]);


    laporanTampungan.forEach(
        (row, index) => {

            rows.push([

                index + 1,

                row.posTampungan,

                row.no_skb,

                row.nama,

                row.poskhidmat,

                dapatkanBasicGaji(
                    row.no_skb
                ).toFixed(2),

                Number(
                    row.jam
                ).toFixed(2),

                Number(
                    row.rm
                ).toFixed(2)

            ]);

        }
    );


    const jumlahJam =
        laporanTampungan.reduce(
            (sum, row) =>
                sum +
                (
                    Number(row.jam) || 0
                ),
            0
        );


    const jumlahRM =
        laporanTampungan.reduce(
            (sum, row) =>
                sum +
                (
                    Number(row.rm) || 0
                ),
            0
        );


    rows.push([

        "",

        "",

        "",

        "",

        "JUMLAH",

        "",

        jumlahJam.toFixed(2),

        jumlahRM.toFixed(2)

    ]);


    const csv =
        rows.map(row =>

            row.map(cell => {

                const value =
                    cell === null ||
                    cell === undefined
                        ? ""
                        : String(cell);


                return `"${value
                    .replace(/"/g, '""')}"`;

            }).join(",")

        ).join("\r\n");


    // BOM supaya Excel Malaysia/Windows
    // baca UTF-8 dengan betul

    const blob =
        new Blob(
            [
                "\uFEFF" + csv
            ],
            {
                type:
                    "text/csv;charset=utf-8;"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const a =
        document.createElement("a");


    a.href = url;


    a.download =
        `Laporan_Tampungan_${bulan}_${tahun}.csv`;


    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);


    URL.revokeObjectURL(url);

}


// =====================================================
// EXPORT GLOBAL
// =====================================================

window.paparLaporanTampungan =
    paparLaporanTampungan;

window.cetakLaporanPDF =
    cetakLaporanPDF;

window.muatTurunCSV =
    muatTurunCSV;


// =====================================================
// END
// =====================================================

console.log(
    "✅ LAPORAN POS TAMPUNGAN READY"
);
