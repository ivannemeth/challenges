import { introduction } from "../../lib/data";
import Link from "next/link";

export default function Volumes() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>

      <h2>All Volumes:</h2>

      <ul>
        <li>
          <Link href="/the-fellowship-of-the-ring">
            The Fellowhip of the Ring
          </Link>
        </li>
        <li>
          <Link href="/the-two-towers"></Link>
        </li>
        <li>
          <Link href="/the-return-of-the-king">
            Volumes The Return Of The King
          </Link>
        </li>
      </ul>
    </>
  );
}
