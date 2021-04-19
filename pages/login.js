import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Menu from '../data-dummy/menu.json'
import Layout from '../components/Layout'
import Post from '../data-dummy/post.json'
import Artikel from '../components/Artikel'
import menu from '../data-dummy/menu.json' 



export default function login({ props }) {
  return (
      <Layout LayoutProps = {props.menu}>
      <div className="row">
      <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
          <center>
              <div>
              Login sekarang
              </div>
          </center>
      </h3>  
      </div>
      </div>
      </Layout>
      
    
  )
}
login.getInitialProps = () =>
{
  return{
    props : {
      menu : Menu
    }
  }
}
