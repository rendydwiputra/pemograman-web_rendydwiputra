import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Menu from '../data-dummy/menu.json'
import Layout from '../components/Layout'
import Post from '../data-dummy/post.json'
import Artikel from '../components/Artikel'
import menu from '../data-dummy/menu.json' 



export default function search({ props }) {
  return (
      <Layout LayoutProps = {props.menu}>
      <div className="row">
      <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
          <center>
              <div>
              HALAMAN PENCARIAN
              </div>
          </center>
      </h3>
      <from action="">
          <div className="from-group">
              <label htmlFor="">Isikan kata kunci disini</label>
              <input type="text" className="from-control"/>
          </div>
      </from>
      </div>
      </div>
      </Layout>
      
    
  )
}
search.getInitialProps = () =>
{
  return{
    props : {
      menu : Menu
    }
  }
}
