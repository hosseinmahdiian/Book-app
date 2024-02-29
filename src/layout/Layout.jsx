import styles from "./Layout.module.css"
const Layout = ({children}) => {
    return (
        <>
            <div className={styles.header}>
                <header className={styles.header}>
                    <h1>Book App</h1>
                    {/* <div className={styles.serch}>
                        <input type="text" />
                        <button>s</button>
                    </div> */}
                    <p>M.Z</p>
                </header>
            </div>
            {children}
            <footer className={styles.footer}><p>Create App By Hossein Mahdian.Z</p></footer>
        </>
    );
}

export default Layout;
