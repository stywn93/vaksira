import React from "react";

/**
 * Format tanggal ke "DD Bulan YYYY" (locale Indonesia), tanpa dependency
 * eksternal seperti dayjs/moment — cukup pakai nama bulan manual supaya
 * konsisten dengan format di Buku KIA ("12 Juni 2026"), bukan format
 * bawaan browser yang bisa beda-beda antar locale sistem.
 */
const BULAN_ID = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

function formatTanggal(dateInput) {
  if (!dateInput) return null;
  const d = dateInput instanceof Date ? dateInput : new Date(dateInput);
  if (Number.isNaN(d.getTime())) return null;
  const dd = String(d.getDate()).padStart(2, "0");
  return `${dd} ${BULAN_ID[d.getMonth()]} ${d.getFullYear()}`;
}

function formatRentang(mulai, selesai) {
  const a = formatTanggal(mulai);
  const b = formatTanggal(selesai);
  if (!a && !b) return "-";
  if (a && !b) return `Mulai ${a}`;
  if (!a && b) return `Sampai ${b}`;
  return `${a} - ${b}`;
}

const GENDER_LABEL = { L: "Laki-laki", P: "Perempuan" };

/**
 * Kartu hasil pendaftaran imunisasi bayi.
 *
 * Props:
 * - registration: { baby_name, mother_name, dob_baby, gender_baby, whatsapp, email }
 * - vaccines: [{
 *     name,
 *     ideal: { start, end },
 *     susulan: { start, end },
 *     kejar: { start, end },
 *   }]
 */
export default function ImmunizationSchedule({ registration, vaccines }) {
  const data = registration ?? DEMO_REGISTRATION;
  const rows = vaccines?.length ? vaccines : DEMO_VACCINES;

  const infoItems = [
    ["Nama", data.baby_name],
    ["Ibu", data.mother_name],
    ["Tanggal Lahir", formatTanggal(data.dob_baby)],
    ["Jenis Kelamin", GENDER_LABEL[data.gender_baby] ?? data.gender_baby],
    ["Nomor WhatsApp", data.whatsapp],
    ["Email", data.email],
  ];

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">
      <div className="mx-auto max-w-4xl bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="border-b border-slate-200 px-6 py-5">
          <p className="text-xs font-semibold tracking-wide text-teal-700 uppercase">
            Aplikasi Reminder Imunisasi
          </p>
          <h1 className="mt-1 text-xl font-semibold text-slate-900">
            Jadwal Imunisasi Bayi
          </h1>
        </div>

        {/* Info bayi */}
        <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
          {infoItems.map(([label, value]) => (
            <div key={label} className="flex text-sm">
              <span className="w-36 shrink-0 text-slate-500">{label}</span>
              <span className="text-slate-900 font-medium">{value ?? "-"}</span>
            </div>
          ))}
        </div>

        {/* Tabel jadwal */}
        <div className="border-t border-slate-200 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-800 text-white text-left">
                <th className="px-4 py-3 font-medium">Nama Vaksin</th>
                <th className="px-4 py-3 font-medium">Periode Ideal</th>
                <th className="px-4 py-3 font-medium">Periode Susulan</th>
                <th className="px-4 py-3 font-medium">Periode Kejar</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((v, i) => (
                <tr
                  key={v.name}
                  className={i % 2 === 1 ? "bg-slate-50" : "bg-white"}
                >
                  <td className="px-4 py-3 font-medium text-slate-900 align-top">
                    {v.name}
                  </td>
                  <td className="px-4 py-3 text-slate-700 align-top">
                    {formatRentang(v.ideal?.start, v.ideal?.end)}
                  </td>
                  <td className="px-4 py-3 text-slate-700 align-top">
                    {formatRentang(v.susulan?.start, v.susulan?.end)}
                  </td>
                  <td className="px-4 py-3 text-slate-700 align-top">
                    {formatRentang(v.kejar?.start, v.kejar?.end)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer note */}
        <div className="border-t border-slate-200 px-6 py-4">
          <p className="text-xs text-slate-500 leading-relaxed">
            Simpan halaman ini dan hubungkan file .ics ke kalender HP Anda
            agar mendapat pengingat otomatis. Reminder juga akan dikirim
            melalui WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
}

// Data contoh — hanya dipakai kalau komponen dirender tanpa props,
// supaya bisa langsung dilihat hasilnya saat development.
const DEMO_REGISTRATION = {
  baby_name: "Bayi Siti",
  mother_name: "Sri",
  dob_baby: "2026-09-08",
  gender_baby: "P",
  whatsapp: "08123456789",
  email: "stywn93@gmail.com",
};

const DEMO_VACCINES = [
  {
    name: "Hepatitis B (<24 Jam)",
    ideal: { start: "2026-09-08", end: "2026-09-09" },
    susulan: { start: "2026-09-10", end: "2026-09-15" },
    kejar: { start: "2026-09-16", end: "2031-08-08" },
  },
  {
    name: "BCG + Polio Tetes 1",
    ideal: { start: "2026-10-08", end: "2026-11-08" },
    susulan: { start: "2026-11-09", end: "2026-12-08" },
    kejar: { start: "2026-12-09", end: "2031-08-08" },
  },
  {
    name: "DPT-HB-Hib 1 + Polio 2 + PCV 1 + RV 1",
    ideal: { start: "2026-11-08", end: "2026-12-08" },
    susulan: { start: "2026-12-09", end: "2027-01-08" },
    kejar: { start: "2027-01-09", end: "2031-08-08" },
  },
];