import { useParams } from "react-router-dom";
import { useSchedule } from "../libs/hooks/useSchedule.js";

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

export default function ImmunizationSchedule() {
  const { id } = useParams();
  const { schedules, loading } = useSchedule(id);
  const data = schedules[0] ?? {};

  const infoItems = [
    ["Nama Ibu", data.mother_name],
    ["Tanggal Lahir", formatTanggal(data.dob_baby)],
    ["Jenis Kelamin", GENDER_LABEL[data.gender_baby] ?? data.gender_baby],
    ["Provinsi", data.province_name],
    ["Kabupaten", data.district_name],
    ["Kecamatan", data.subdistrict_name],
    ["Desa", data.village_name],
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
              {loading ? (
                <tr>
                  <td className="px-4 py-6 text-center text-slate-500" colSpan="4">
                    Memuat jadwal imunisasi...
                  </td>
                </tr>
              ) : schedules.length ? schedules.map((schedule, index) => (
                <tr
                  key={`${schedule.id_registration}-${schedule.antigen_name}`}
                  className={index % 2 === 1 ? "bg-slate-50" : "bg-white"}
                >
                  <td className="px-4 py-3 font-medium text-slate-900 align-top">
                    {schedule.antigen_name}
                  </td>
                  <td className="px-4 py-3 text-slate-700 align-top">
                    {formatRentang(schedule.ideal_start_date, schedule.ideal_end_date)}
                  </td>
                  <td className="px-4 py-3 text-slate-700 align-top">
                    {formatRentang(schedule.catchup_start_date, schedule.catchup_end_date)}
                  </td>
                  <td className="px-4 py-3 text-slate-700 align-top">
                    {formatRentang(schedule.last_catchup_start_date, schedule.last_catchup_end_date)}
                  </td>
                </tr>
              )) : (
                <tr>
                  <td className="px-4 py-6 text-center text-slate-500" colSpan="4">
                    Jadwal imunisasi belum tersedia.
                  </td>
                </tr>
              )}
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