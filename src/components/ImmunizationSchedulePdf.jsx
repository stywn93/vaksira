import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer"
import {
  createBabyInfoItems,
  formatRentang,
} from "../libs/immunization/formatters.js"

const BRAND_COLOR = "#0bb6c2"
const NEUTRAL_TEXT = "rgba(0,0,0,0.88)"
const SECONDARY_TEXT = "rgba(0,0,0,0.65)"
const BORDER_COLOR = "#f0f0f0"

const styles = StyleSheet.create({
  page: { padding: 24, fontSize: 8, color: NEUTRAL_TEXT, backgroundColor: "#ffffff" },
  title: { fontSize: 16, fontWeight: 700, color: NEUTRAL_TEXT, marginBottom: 2 },
  subtitle: { fontSize: 12, fontWeight: 700, color: SECONDARY_TEXT, marginBottom: 10 },
  info: { flexDirection: "row", flexWrap: "wrap", marginBottom: 10 },
  infoItem: { width: "50%", flexDirection: "row", marginBottom: 2 },
  infoLabel: { width: 82, color: SECONDARY_TEXT },
  infoValue: { flex: 1, fontWeight: 700, color: NEUTRAL_TEXT },
  table: { borderWidth: 1, borderColor: BORDER_COLOR, width: "100%" },
  row: { flexDirection: "row", borderBottomWidth: 1, borderColor: BORDER_COLOR },
  header: { backgroundColor: "#ffffff", color: "#ffffff", fontWeight: 700 },
  cell: { width: "23%", padding: 3, color: NEUTRAL_TEXT },
  numberCell: { width: "7%", padding: 3, color: NEUTRAL_TEXT, textAlign: "center" },
  checkboxBox: {
    width: 8,
    height: 8,
    borderWidth: 1,
    borderColor: NEUTRAL_TEXT,
    marginLeft: 4,
    marginRight: 4,
    alignSelf: "center",
    backgroundColor: "#ffffff",
  },
  checkboxCell: { width: "5%", padding: 3, color: NEUTRAL_TEXT, textAlign: "center" },
  catchupCell: { backgroundColor: "#fff7ed" },
  lastCatchupCell: { backgroundColor: "#fff1f0" },
  lastRow: { borderBottomWidth: 0 },
  brandLine: { color: BRAND_COLOR, fontWeight: 700 },
})

export default function ImmunizationSchedulePdf({ schedules = [] }) {
  const infoItems = createBabyInfoItems(schedules[0] ?? {})

  return (
    <Document title="Jadwal Imunisasi Bayi">
      <Page size="A4" orientation="landscape" style={styles.page}>
        <Text style={styles.title}>Vaksira - Vaksin Reminder Assistant</Text>
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
            <Text style={styles.numberCell}>#</Text>
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
              <View style={styles.numberCell}><View style={styles.checkboxBox} /></View>
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
