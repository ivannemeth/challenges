import Image from "./components/Image";
import logo from "../img/logo.jpg";
import Link from "./components/Link";

export function Logo() {
  return (
    <Link href="#">
      <Image src={logo} alt={logo}></Image>
    </Link>
  );
}
