import { Layout, Menu, Typography, Space, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import logoUrl from '../../public/favicon.svg';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const BRAND_COLOR = '#0bb6c2';

const defaultNavItems = [
  { key: 'beranda', label: <a href="#">Beranda</a> },
  { key: 'cara-kerja', label: <a href="#">Cara Kerja</a> },
  { key: 'jadwal', label: <a href="#">Jadwal</a> },
  { key: 'faq', label: <a href="#">FAQ</a> },
  { key: 'support', label: <a href="#">Support</a> },
];

export function MainHeader({ navItems = defaultNavItems }) {
  return (
    <Header
      style={{
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #f0f0f0',
        padding: '0 48px',
        height: 64,
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <Space align="center" size={10}>
          <img src={logoUrl} alt="Vaksira Logo" style={{ width: 24, height: 24 }} />
          <Text strong style={{ fontSize: 18, color: '#1e3a8a' }}>Vaksira</Text>
        </Space>
      </Link>

      <Menu
        mode="horizontal"
        items={navItems}
        style={{ flex: 1, justifyContent: 'center', borderBottom: 'none', minWidth: 0 }}
      />

      <Space size={24} align="center">
        <Space size={6} style={{ color: 'rgba(0,0,0,0.65)' }}>
        </Space>
        <Link to="/generate-reminder">
          <Button type="primary">Mulai Sekarang</Button>
        </Link>
      </Space>
    </Header>
  );
}

export function MainFooter() {
  return (
    <Footer style={{ background: '#fff', borderTop: '1px solid #f0f0f0' }}>
      <Row justify="space-between" align="middle" style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Col>
          <Text type="secondary" style={{ fontSize: 13 }}>
            © 2026 Vaksira — Dinas Kesehatan Kabupaten Situbondo
          </Text>
        </Col>
        <Col>
          <Space size={24}>
            <a href="#" style={{ fontSize: 13, color: 'rgba(0,0,0,0.45)' }}>Kebijakan Privasi</a>
            <a href="#" style={{ fontSize: 13, color: 'rgba(0,0,0,0.45)' }}>Ketentuan Layanan</a>
          </Space>
        </Col>
      </Row>
    </Footer>
  );
}

export default function MainLayout({ children, header = <MainHeader />, footer = <MainFooter /> }) {
  return (
    <Layout style={{ minHeight: '100vh', background: '#fafafa' }}>
      {header}
      <Content>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 48px' }}>
          {children}
        </div>
      </Content>
      {footer}
    </Layout>
  );
}
