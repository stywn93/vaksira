import { PDFDownloadLink } from "@react-pdf/renderer"
import { useParams } from "react-router-dom"
import { useSchedule } from "../libs/hooks/useSchedule.js"
import ImmunizationSchedulePdf from "./ImmunizationSchedulePdf.jsx"
import MainLayout, { MainHeader, MainFooter } from "./MainLayout.jsx"
import {
  createBabyInfoItems,
  formatRentang,
} from "../libs/immunization/formatters.js"
import { Col, ConfigProvider, Row, Space, Typography, Table, Button, Divider, Tag } from "antd"

const { Title, Text } = Typography

export default function ImmunizationSchedule() {
  const { id } = useParams()
  const { schedules, loading } = useSchedule(id)
  const data = schedules[0] ?? {}
  const infoItems = createBabyInfoItems(data)

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#0bb6c2", borderRadius: 8, fontFamily: "Inter, sans-serif" } }}>
      <MainLayout header={<MainHeader />} footer={<MainFooter />}>
        <div style={{ width: "100%", background: "#fff", borderRadius: 8, border: "1px solid #f0f0f0", boxShadow: "0 6px 16px rgba(0,0,0,0.06)", overflow: "hidden" }}>
          <div style={{ borderBottom: "1px solid #f0f0f0", padding: "24px 48px" }}>
            <Title level={2} style={{ marginBottom: 0, color: "rgba(0,0,0,0.88)" }}>Jadwal Imunisasi Bayi</Title>
          </div>

          <div style={{ padding: "24px 48px" }}>
            <Row gutter={[32, 16]}>
              {infoItems.map(([label, value]) => (
                <Col xs={24} sm={12} key={label}>
                  <Space size={8}>
                    <Text type="secondary" style={{ minWidth: 150 }}>{label}</Text>
                    <Text strong style={{ color: "rgba(0,0,0,0.88)" }}>{value ?? "-"}</Text>
                  </Space>
                </Col>
              ))}
            </Row>
          </div>

          <div style={{ borderTop: "1px solid #f0f0f0", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#1f1f1f", color: "#fff" }}>
                  <th style={{ padding: "12px 16px", fontWeight: 500, textAlign: "left" }}>Nama Vaksin</th>
                  <th style={{ padding: "12px 16px", fontWeight: 500, textAlign: "left" }}>Periode Ideal</th>
                  <th style={{ padding: "12px 16px", fontWeight: 500, textAlign: "left" }}>Periode Susulan</th>
                  <th style={{ padding: "12px 16px", fontWeight: 500, textAlign: "left" }}>Periode Kejar</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td style={{ padding: "24px 16px", textAlign: "center", color: "rgba(0,0,0,0.45)" }} colSpan="4">
                      Memuat jadwal imunisasi...
                    </td>
                  </tr>
                ) : schedules.length ? schedules.map((schedule, index) => (
                  <tr key={`${schedule.id_registration}-${schedule.antigen_name}`} style={{ background: index % 2 === 1 ? "#fafafa" : "#fff" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 600, color: "rgba(0,0,0,0.88)", verticalAlign: "top" }}>
                      {schedule.antigen_name}
                    </td>
                    <td style={{ padding: "12px 16px", color: "rgba(0,0,0,0.65)", verticalAlign: "top" }}>
                      {formatRentang(schedule.ideal_start_date, schedule.ideal_end_date)}
                    </td>
                    <td style={{ background: "#fff7ed", padding: "12px 16px", color: "rgba(0,0,0,0.65)", verticalAlign: "top" }}>
                      {formatRentang(schedule.catchup_start_date, schedule.catchup_end_date)}
                    </td>
                    <td style={{ background: "#fff1f0", padding: "12px 16px", color: "rgba(0,0,0,0.65)", verticalAlign: "top" }}>
                      {formatRentang(schedule.last_catchup_start_date, schedule.last_catchup_end_date)}
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td style={{ padding: "24px 16px", textAlign: "center", color: "rgba(0,0,0,0.45)" }} colSpan="4">
                      Jadwal imunisasi belum tersedia.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div style={{ borderTop: "1px solid #f0f0f0", padding: "24px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <PDFDownloadLink
              document={<ImmunizationSchedulePdf schedules={schedules} />}
              fileName="immunization-schedule.pdf"
              style={{ display: "inline-block", background: "#0bb6c2", color: "#fff", padding: "8px 16px", borderRadius: 8, fontSize: 14, fontWeight: 600 }}
            >
              {({ loading: generating }) => generating ? "Menyiapkan PDF..." : "Export PDF"}
            </PDFDownloadLink>
          </div>
        </div>
      </MainLayout>
    </ConfigProvider>
  )
}
