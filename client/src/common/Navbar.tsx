import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/ui/button";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { useAuthStore } from "@/store/authStore";
import { ModeToggle } from "./ThemeToggle";

const AuthButtons = ({
  isMobile,
  onClick,
}: {
  isMobile?: boolean;
  onClick?: () => void;
}) => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated) {
    return isMobile ? (
      <NavbarButton
        onClick={() => {
          onClick?.();
          navigate("/dashboard");
        }}
        className="w-full bg-violet-600 text-white hover:bg-violet-900 transition"
      >
        Hello, {user?.name}
      </NavbarButton>
    ) : (
      <Button
        variant="ghost"
        className="text-violet-900 hover:text-violet-600 transition-colors"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </Button>
    );
  }

  return (
    <>
      {isMobile ? (
        <>
          <NavbarButton
            onClick={() => {
              onClick?.();
              navigate("/login");
            }}
            className="w-full border border-violet-400 text-violet-700 hover:bg-violet-100 transition"
          >
            Login
          </NavbarButton>
          <NavbarButton
            onClick={() => {
              onClick?.();
              navigate("/register");
            }}
            className="w-full bg-violet-600 text-white hover:bg-violet-900 transition"
          >
            Get Started
          </NavbarButton>
        </>
      ) : (
        <>
          <Button
            variant="outline"
            className="border-violet-400 text-violet-700 hover:bg-violet-100 transition"
            onClick={() => navigate("/login")}
          >
            Sign In
          </Button>
          <Button
            className="bg-violet-600 text-white hover:bg-violet-900 transition"
            onClick={() => navigate("/register")}
          >
            Get Started
          </Button>
        </>
      )}
    </>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-[9999] bg-violet-50 shadow-sm border-b border-violet-200">
      {/* Desktop Navbar */}
      <div className="hidden md:flex w-full mx-auto max-w-7xl px-6 py-3 items-center justify-between">
        <NavbarLogo />
        <div className="flex items-center gap-4">
          <AuthButtons />
          <ModeToggle />
        </div>
      </div>

      {/* Mobile Navbar */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex w-full flex-col gap-4 bg-violet-50 p-4">
            <AuthButtons isMobile onClick={() => setIsMobileMenuOpen(false)} />
          </div>
        </MobileNavMenu>
      </MobileNav>
    </header>
  );
};

export default Navbar;
