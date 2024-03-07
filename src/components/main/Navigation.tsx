"use client";
import Link from "next/link";

import { signOut, useSession } from "next-auth/react";

const navLinks = [
  {
    label: "Blog",
    href: "/blog",
  },
];

const Navigation = () => {
  const { data } = useSession();

  return (
    <nav>
      <ul className="flex items-center gap-8">
        {navLinks.map((navLink) => (
          <li key={navLink.href}>
            <Link
              href={navLink.href}
              className="text-lg font-medium hover:text-secondary"
            >
              {navLink.label}
            </Link>
          </li>
        ))}
        {data && (
          <Link
            className="text-lg font-medium hover:text-secondary"
            href="/profile"
          >
            Profile
          </Link>
        )}
        {data ? (
          <Link
            className="text-lg font-medium hover:text-secondary"
            href="#"
            onClick={() => signOut()}
          >
            Sign out
          </Link>
        ) : (
          <Link
            className="text-lg font-medium hover:text-secondary"
            href="/login"
          >
            Sign in
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
