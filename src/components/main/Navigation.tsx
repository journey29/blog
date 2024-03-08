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
      <ul className="flex flex-wrap items-center gap-4 sm:gap-x-8">
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
          <li>
            <Link
              className="text-lg font-medium hover:text-secondary"
              href="/profile"
            >
              Profile
            </Link>
          </li>
        )}
        {data ? (
          <li>
            <Link
              className="text-lg font-medium hover:text-secondary"
              href="#"
              onClick={() => signOut()}
            >
              Sign out
            </Link>
          </li>
        ) : (
          <li>
            <Link
              className="text-lg font-medium hover:text-secondary"
              href="/login"
            >
              Sign in
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
