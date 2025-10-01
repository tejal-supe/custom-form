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

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuthStore();

  return (
    <div className="shadow-sm w-full sticky top-0 bg-primary dark:bg-dark-background z-[9999]">
      <div className=" hidden md:flex w-full mx-auto max-w-7xl p-3  items-center justify-between">
        <NavbarLogo />
        {isAuthenticated ? (
          <>
          
            <ModeToggle/>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="bg-transparent text-white dark:text-dark-text"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
            <Button
              variant="outline"
              className="bg-transparent text-white dark:text-dark-text"
              onClick={() => navigate("/register")}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
      {/* Mobile Navigation */}
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
          <div className="flex w-full flex-col gap-4 bg-card-bg dark:bg-dark-card-bg p-4">
            {isAuthenticated ? (
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/dashboard");
                }}
                variant="primary"
                className="w-full bg-primary text-white dark:bg-dark-primary dark:text-dark-text"
              >
                Hello, {user?.name}
              </NavbarButton>
            ) : (
              <>
                <NavbarButton
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate("/login");
                  }}
                  variant="primary"
                  className="w-full bg-primary text-white dark:bg-dark-primary dark:text-dark-text"
                >
                  Login
                </NavbarButton>
                <NavbarButton
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate("/register");
                  }}
                  variant="primary"
                  className="w-full bg-primary text-white dark:bg-dark-primary dark:text-dark-text"
                >
                  Get Started
                </NavbarButton>
              </>
            )}
          </div>
        </MobileNavMenu>
      </MobileNav>
    </div>
  );
};

export default Navbar;
