import Link from "next/link";
import { volumes } from "../../lib/data";

export default function TheFellowshipOfTheRing() {

    const fellows = volumes.find(({slug}) => slug === "the-fellowship-of-the-ring");

    return (
    <div>
        <h1>{fellows.title}</h1>
        <ul>
          <li>
            <Link href="/volumes">Volumes</Link>
         </li>
         <p>{fellows.description}</p>
         <ul>
          <li>{fellows.books[0].ordinal}</li>
          <li>{fellows.books[0].title}</li>
          <li>{fellows.books[1].ordinal}</li>
          <li>{fellows.books[1].title}</li>
         </ul>
         </ul>
            ) }
