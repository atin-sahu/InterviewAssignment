import styles from '../styles/About.module.css'
// import styles from '../styles/Home.module.css'

export default function about() {
  return (
    <div>
        <h1 className={styles.title}>About</h1>
        <p className='text-center'>click here to go <a className='text-blue-500' href='./data'>GitHub Users</a> Page</p>
    </div>
  )
}
