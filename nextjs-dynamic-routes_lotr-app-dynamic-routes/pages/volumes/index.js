import Link from "next/link";
import { introduction } from "../../lib/data";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data.js";

export default function Volumes() {
  const router = useRouter();

  return (
    <>
      <h1>{volumes.title}</h1>
      <p>{introduction}</p>
      <ul>
        <li>
          <Link href={`/volumes/${volumes.slug}`}>{volumes.title}</Link>
        </li>
      </ul>

      <button
        onClick={() => {
          function getRandomElement(array) {
            return array[Math.floor(Math.random() * array.length)];
          }
          router.push(`/volumes/${getRandomElement(volumes).slug}`);
        }}
      >
        Random volume
      </button>
    </>
  );
}
