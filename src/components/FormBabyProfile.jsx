import { Toaster } from "react-hot-toast"
import { useWilayah } from "../libs/hooks/useWilayah.js"
import { useRef } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { Button, Col, ConfigProvider, Input, Radio, Row, Select, Space, Typography } from "antd"
import MainLayout, { MainHeader, MainFooter } from "./MainLayout.jsx"

const { Title, Text } = Typography
const { Option } = Select

const BRAND_COLOR = "#0bb6c2"

export default function FormBabyProfile({ onSubmit, onRecaptchaChange, recaptchaKey }) {
  const recaptchaRef = useRef(null)

  const {
    provinces, districts, subdistricts, villages,
    province, district, subdistrict, village,
    handleProvinceChange, handleDistrictChange, handleSubdistrictChange, setVillage,
  } = useWilayah()

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: BRAND_COLOR,
          borderRadius: 8,
          fontFamily: "Inter, sans-serif",
        },
      }}
    >
      <section>
        <Toaster position="top-center" />
        <MainLayout header={<MainHeader />} footer={<MainFooter />}>
          <Space direction="vertical" size={24} style={{ width: "100%", maxWidth: 960 }}>
            <div
              style={{
                width: "100%",
                background: "#fff",
                borderRadius: 8,
                border: "1px solid #f0f0f0",
                boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "48px" }}>
                <Title level={2} style={{ marginBottom: 24, color: "rgba(0,0,0,0.88)" }}>
                  Buat Profil Bayi
                </Title>

                <form onSubmit={onSubmit}>
                  <input type="hidden" name="provinsi" value={province} />
                  <input type="hidden" name="kabupaten" value={district} />
                  <input type="hidden" name="kecamatan" value={subdistrict} />
                  <input type="hidden" name="desa" value={village} />

                  <Row gutter={[32, 24]}>
                    <Col xs={24} md={12}>
                      <Space direction="vertical" size={8} style={{ width: "100%" }}>
                        <Text strong style={{ color: "rgba(0,0,0,0.88)" }}>Nama Ibu</Text>
                        <Input
                          name="namaIbu"
                          id="namaIbu"
                          placeholder="Masukkan nama ibu"
                          required
                          style={{ width: "100%" }}
                        />
                      </Space>
                    </Col>

                    <Col xs={24} md={12}>
                      <Space direction="vertical" size={8} style={{ width: "100%" }}>
                        <Text strong style={{ color: "rgba(0,0,0,0.88)" }}>Tanggal lahir bayi</Text>
                        <Input
                          type="date"
                          name="tanggalLahirBayi"
                          id="tanggalLahirBayi"
                          style={{ width: "100%" }}
                        />
                      </Space>
                    </Col>

                    <Col span={24}>
                      <Space direction="vertical" size={8}>
                        <Text strong style={{ color: "rgba(0,0,0,0.88)" }}>Jenis kelamin bayi</Text>
                        <Radio.Group name="jenisKelaminBayi" defaultValue="L">
                          <Space size={24}>
                            <Radio value="L" id="jenisKelaminBayi">Laki-laki</Radio>
                            <Radio value="P" id="jenisKelaminBayi2">Perempuan</Radio>
                          </Space>
                        </Radio.Group>
                      </Space>
                    </Col>

                    <Col xs={24} md={12}>
                      <Space direction="vertical" size={8} style={{ width: "100%" }}>
                        <Text strong style={{ color: "rgba(0,0,0,0.88)" }}>Provinsi</Text>
                        <Select
                          value={province || undefined}
                          onChange={handleProvinceChange}
                          placeholder="Pilih provinsi"
                          style={{ width: "100%" }}
                          allowClear
                        >
                          {provinces.map((region) => (
                            <Option key={region.code} value={region.code}>{region.name}</Option>
                          ))}
                        </Select>
                      </Space>
                    </Col>

                    <Col xs={24} md={12}>
                      <Space direction="vertical" size={8} style={{ width: "100%" }}>
                        <Text strong style={{ color: "rgba(0,0,0,0.88)" }}>Kabupaten</Text>
                        <Select
                          value={district || undefined}
                          onChange={handleDistrictChange}
                          placeholder="Pilih kabupaten"
                          disabled={!province}
                          style={{ width: "100%" }}
                          allowClear
                        >
                          {districts.map((region) => (
                            <Option key={region.code} value={region.code}>{region.name}</Option>
                          ))}
                        </Select>
                      </Space>
                    </Col>

                    <Col xs={24} md={12}>
                      <Space direction="vertical" size={8} style={{ width: "100%" }}>
                        <Text strong style={{ color: "rgba(0,0,0,0.88)" }}>Kecamatan</Text>
                        <Select
                          value={subdistrict || undefined}
                          onChange={handleSubdistrictChange}
                          placeholder="Pilih kecamatan"
                          disabled={!district}
                          style={{ width: "100%" }}
                          allowClear
                        >
                          {subdistricts.map((region) => (
                            <Option key={region.code} value={region.code}>{region.name}</Option>
                          ))}
                        </Select>
                      </Space>
                    </Col>

                    <Col xs={24} md={12}>
                      <Space direction="vertical" size={8} style={{ width: "100%" }}>
                        <Text strong style={{ color: "rgba(0,0,0,0.88)" }}>Desa</Text>
                        <Select
                          value={village || undefined}
                          onChange={(value) => setVillage(value)}
                          placeholder="Pilih desa"
                          disabled={!subdistrict}
                          style={{ width: "100%" }}
                          allowClear
                        >
                          {villages.map((region) => (
                            <Option key={region.code} value={region.code}>{region.name}</Option>
                          ))}
                        </Select>
                      </Space>
                    </Col>

                    <Col xs={24} md={12}>
                      <Space direction="vertical" size={8} style={{ width: "100%" }}>
                        <Text strong style={{ color: "rgba(0,0,0,0.88)" }}>Nomor Whatsapp</Text>
                        <Input
                          type="text"
                          name="nomorWhatsapp"
                          id="nomorWhatsapp"
                          placeholder="Masukkan nomor whatsapp"
                          style={{ width: "100%" }}
                        />
                      </Space>
                    </Col>

                    <Col xs={24} md={12}>
                      <Space direction="vertical" size={8} style={{ width: "100%" }}>
                        <Text strong style={{ color: "rgba(0,0,0,0.88)" }}>Email</Text>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Masukkan email"
                          style={{ width: "100%" }}
                        />
                      </Space>
                    </Col>

                    <Col span={24}>
                      <ReCAPTCHA
                        key={recaptchaKey}
                        ref={recaptchaRef}
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                        onChange={onRecaptchaChange}
                      />
                    </Col>
                  </Row>

                  <Button type="primary" htmlType="submit" style={{ width: "100%", marginTop: 24, height: 40 }}>
                    Simpan &amp; Generate
                  </Button>
                </form>
              </div>
            </div>
          </Space>
        </MainLayout>
      </section>
    </ConfigProvider>
  )
}
