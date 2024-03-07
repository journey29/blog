import Link from "next/link";
import Container from "./Container";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="shrink-0 bg-primary px-5 py-12">
      <Container>
        <div className="flex flex-col items-center gap-3 text-white">
          <p>
            Made by <span className="underline">Andrii Smaluniuk</span>
          </p>
          <div className="flex items-center gap-8">
            <Link
              className="flex items-center gap-2"
              href="https://github.com/journey29"
              target="_blank"
            >
              <Github width={20} height={20} />
              <span>Github</span>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
