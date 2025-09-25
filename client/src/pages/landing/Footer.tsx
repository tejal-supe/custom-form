import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background text-foreground">
      <p className="text-xs text-secondary">
        &copy; 2025 FormMy. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a
          href="#"
          className="text-xs hover:underline underline-offset-4 text-secondary"
        //   prefetch={false}
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="text-xs hover:underline underline-offset-4 text-secondary"
        //   prefetch={false}
        >
          Privacy
        </a>
      </nav>
    </footer>
  );
}

export default Footer