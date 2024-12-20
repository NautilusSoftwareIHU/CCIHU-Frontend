import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.name}>Car Connect IHU</h1>
      <div className={styles.pages}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/reviews">Reviews</Link>
      </div>
    </nav>
  );
};

export default Navbar;
