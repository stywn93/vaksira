import { Link } from 'react-router-dom';
import { Button, Row, Col, Typography, Space, Statistic, Divider, ConfigProvider } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import vaccinationImg from './images/vaccination.png';
import MainLayout, { MainHeader, MainFooter } from './components/MainLayout.jsx';

const { Title, Paragraph, Text } = Typography;

const BRAND_COLOR = '#0bb6c2';

const LandingPage = () => {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: BRAND_COLOR, fontFamily: "'Inter', sans-serif" } }}>
      <MainLayout header={<MainHeader />} footer={<MainFooter />}>
        <Row gutter={[64, 48]} align="middle">
          <Col xs={24} md={12}>
            <Space direction="vertical" size={24} style={{ width: '100%' }}>
              <Title level={1} style={{ marginBottom: 0, lineHeight: 1.15 }}>
                Vaksin Tepat,<br />
                <span style={{ color: BRAND_COLOR }}>Bayi Sehat</span>
              </Title>

              <Paragraph style={{ fontSize: 16, color: 'rgba(0,0,0,0.65)', maxWidth: 440 }}>
                Asisten pengingat jadwal imunisasi cerdas untuk memastikan tumbuh kembang
                buah hati Anda selalu terlindungi tepat waktu.
              </Paragraph>

              <Space size={12}>
                <Link to="/generate-reminder">
                  <Button type="primary" size="large" icon={<ArrowRightOutlined />} iconPosition="end">
                    Buat Jadwal Imunisasi
                  </Button>
                </Link>
                <Button type="link" size="large">
                  Pelajari Lebih Lanjut
                </Button>
              </Space>

              <Divider style={{ margin: '8px 0' }} />

              <Row gutter={48}>
                <Col>
                  <Statistic value="100%" title="Aman & Privat" valueStyle={{ color: '#1e3a8a', fontSize: 22 }} />
                </Col>
                <Col>
                  <Statistic value="IDAI" title="Standar Nasional" valueStyle={{ color: '#1e3a8a', fontSize: 22 }} />
                </Col>
              </Row>
            </Space>
          </Col>

          <Col xs={24} md={12}>
            <img
              src={vaccinationImg}
              alt="Vaksira Visual"
              style={{
                width: '100%',
                maxWidth: 480,
                display: 'block',
                margin: '0 auto',
                borderRadius: 8,
                boxShadow: '0 6px 16px rgba(0,0,0,0.06)',
              }}
            />
          </Col>
        </Row>
      </MainLayout>
    </ConfigProvider>
  );
};

export default LandingPage;