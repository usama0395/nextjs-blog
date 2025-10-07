import Link from "next/link";
import { ModeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="flex py-5 justify-around">
      <Link href="/" className="text-4xl font-bold">
        <span>Marshal</span>
        <span className="text-primary">Blog</span>
      </Link>
      <ModeToggle />
    </div>
  );
}
