import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer"
import {
  createBabyInfoItems,
  formatRentang,
} from "../libs/immunization/formatters.js"

const styles = StyleSheet.create({
  page: { padding: 24, fontSize: 8, color: "#1e293b" },
  title: { fontSize: 16, fontWeight: 700, marginBottom: 2 },
  subtitle: { fontSize: 12, fontWeight: 700, marginBottom: 10 },
  info: { flexDirection: "row", flexWrap: "wrap", marginBottom: 10 },
  infoItem: { width: "50%", flexDirection: "row", marginBottom: 2 },
  infoLabel: { width: 82, color: "#64748b" },
  infoValue: { flex: 1, fontWeight: 700 },
  table: { borderWidth: 1, borderColor: "#cbd5e1" },
  row: { flexDirection: "row", borderBottomWidth: 1, borderColor: "#cbd5e1" },
  header: { backgroundColor: "#1e293b", color: "#ffffff", fontWeight: 700 },
  cell: { width: "25%", padding: 3 },
  catchupCell: { backgroundColor: "#fff7ed" },
  lastCatchupCell: { backgroundColor: "#fef2f2" },
  lastRow: { borderBottomWidth: 0 },
})

export default function ImmunizationSchedulePdf({ schedules = [] }) {
  const infoItems = createBabyInfoItems(schedules[0] ?? {})

  return (
    <Document title="Jadwal Imunisasi Bayi">
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Vaksira</Text>
        <Text style={styles.subtitle}>Jadwal Imunisasi Bayi</Text>

        <View style={styles.info}>
          {infoItems.map(([label, value]) => (
            <View key={label} style={styles.infoItem}>
              <Text style={styles.infoLabel}>{label}</Text>
              <Text style={styles.infoValue}>{value ?? "-"}</Text>
            </View>
          ))}
        </View>

        <View style={styles.table} wrap={false}>
          <View style={[styles.row, styles.header]}>
            <Text style={styles.cell}>Nama Vaksin</Text>
            <Text style={styles.cell}>Periode Ideal</Text>
            <Text style={styles.cell}>Periode Susulan</Text>
            <Text style={styles.cell}>Periode Kejar</Text>
          </View>
          {schedules.map((schedule, index) => (
            <View
              key={`${schedule.id_registration}-${schedule.antigen_name}`}
              style={[styles.row, index === schedules.length - 1 && styles.lastRow]}
            >
              <Text style={styles.cell}>{schedule.antigen_name ?? "-"}</Text>
              <Text style={styles.cell}>{formatRentang(schedule.ideal_start_date, schedule.ideal_end_date)}</Text>
              <Text style={[styles.cell, styles.catchupCell]}>{formatRentang(schedule.catchup_start_date, schedule.catchup_end_date)}</Text>
              <Text style={[styles.cell, styles.lastCatchupCell]}>{formatRentang(schedule.last_catchup_start_date, schedule.last_catchup_end_date)}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  )
}
