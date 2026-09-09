import { PDFDownloadLink } from "@react-pdf/renderer"
import { useParams } from "react-router-dom"
import { useSchedule } from "../libs/hooks/useSchedule.js"
import ImmunizationSchedulePdf from "./ImmunizationSchedulePdf.jsx"
import {
  createBabyInfoItems,
  formatRentang,
} from "../libs/immunization/formatters.js"

export default function ImmunizationSchedule() {
  const { id } = useParams()
  const { schedules, loading } = useSchedule(id)
  const data = schedules[0] ?? {}
  const infoItems = createBabyInfoItems(data)

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">
      <div className="mx-auto max-w-4xl bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="border-b border-slate-200 px-6 py-5">
          <h1 className="mt-1 text-xl font-semibold text-slate-900">Vaksira</h1>
          <h2 className="mt-1 text-xl font-semibold text-slate-900">
            Jadwal Imunisasi Bayi
          </h2>
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
                  <td className="bg-orange-50 px-4 py-3 text-slate-700 align-top">
                    {formatRentang(schedule.catchup_start_date, schedule.catchup_end_date)}
                  </td>
                  <td className="bg-red-50 px-4 py-3 text-slate-700 align-top">
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
        <div className="border-t border-slate-200 px-6 py-4 flex items-center justify-between gap-4">
          <PDFDownloadLink
            document={<ImmunizationSchedulePdf schedules={schedules} />}
            fileName="immunization-schedule.pdf"
            className="shrink-0 rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            {({ loading: generating }) => generating ? "Menyiapkan PDF..." : "Export PDF"}
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  )
}
