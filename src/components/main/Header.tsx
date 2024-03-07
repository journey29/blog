import Container from "./Container";
import Navigation from "./Navigation";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-primary py-10 text-white">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold">
            storytrail.
          </Link>
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
