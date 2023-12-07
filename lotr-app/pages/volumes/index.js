import { introduction } from "../../lib/data";
import Link from "next/link";
import { volumes } from "../../lib/data";

export default function Volumes() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>

      <h2>All Volumes:</h2>

      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowhip of the Ring
          </Link>
        </li>
        <li>
          <Link href="volumes/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="volumes/the-return-of-the-king">
            The Return Of The King
          </Link>
        </li>
      </ul>
    </>
  );
}
