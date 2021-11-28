import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>こちらはaboutページです。</p>
    <p>
      <Link href="/">
        <a>ホームに戻る</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
