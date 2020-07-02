import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export const getServerSideProps = async (): Promise<any> => {
  // const { PrismaClient } = require('@prisma/client');
  // const prisma = new PrismaClient();
  //const posts = await prisma.post.findMany();

  return {
    props: { }
  }
}

export default IndexPage
