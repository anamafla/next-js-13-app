import Link from "next/link";
import styles from "./Navigation.module.css";
const links = [
  {
    label: "Home",
    route: "/"
  },
  {
    label: "About",
    route: "/about"
  },
  {
    label: "Posts",
    route: "/posts"
  }
];

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
