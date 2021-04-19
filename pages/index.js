import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Papaniklan from '../components/Papaniklan'
import Paggination from '../components/Paggination'
import Archives from '../components/Archives'
import Sidebar from '../components/Sidebar'
import Menu from '../data-dummy/menu.json'
import Layout from '../components/Layout'
import Post from '../data-dummy/post.json'
import Artikel from '../components/Artikel'



export default function Home({ menu, post }) {
  return (
      <Layout LayoutProps = {menu}>
      <Papaniklan />
      <div className="row">
      <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
      From the Firehose
      </h3>
      {
        post.map(p =>(<Artikel key = {p.id} post = {p} />))
      }
      
      <Paggination />
      </div>
      <Sidebar />
      </div>
      </Layout>
      
    
  )
}

export async function getStaticProps()
{
  const req = await fetch('http://localhost:3000/api/hello')
  const res = await req.json()
  return{
    props : {
      menu : res,
      post : Post
    }
  }
}
