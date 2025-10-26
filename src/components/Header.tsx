import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const productMenu = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const featuresMenu = [
  { label: "AI Course Creation", href: "#features" },
  { label: "Image Generation", href: "#features" },
  { label: "Course Hosting", href: "#features" },
];

const whoWeHelpMenu = [
  { label: "Educators", href: "#educators" },
  { label: "Authors", href: "#authors" },
  { label: "Coaches", href: "#coaches" },
  { label: "Content Creators", href: "#creators" },
];

export default function Header() {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    }
  };

  const handlePricingClick = () => {
    navigate("/pricing");
    setMobileMenuOpen(false);
  };

  const handleStartTrial = () => {
    const element = document.getElementById("interactive-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-gray-900 font-bold text-lg leading-tight">
                  Mini Lessons
                </div>
                <div className="text-gray-600 text-xs uppercase tracking-wider">
                  ACADEMY
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Product Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("product")}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Product
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    activeDropdown === "product" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeDropdown === "product" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                  >
                    {productMenu.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => scrollToSection(item.href)}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Features Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("features")}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Features
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    activeDropdown === "features" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeDropdown === "features" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                  >
                    {featuresMenu.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => scrollToSection(item.href)}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Who We Help Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("who-we-help")}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Who We Help
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    activeDropdown === "who-we-help" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeDropdown === "who-we-help" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                  >
                    {whoWeHelpMenu.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => scrollToSection(item.href)}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pricing */}
            <button
              onClick={handlePricingClick}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Pricing
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 py-4 space-y-4"
            >
              {/* Product Section */}
              <div>
                <div className="text-gray-900 font-semibold px-4 mb-2">
                  Product
                </div>
                {productMenu.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-6 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Features Section */}
              <div>
                <div className="text-gray-900 font-semibold px-4 mb-2">
                  Features
                </div>
                {featuresMenu.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-6 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Who We Help Section */}
              <div>
                <div className="text-gray-900 font-semibold px-4 mb-2">
                  Who We Help
                </div>
                {whoWeHelpMenu.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-6 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Pricing */}
              <button
                onClick={handlePricingClick}
                className="block w-full text-left px-4 py-2 text-gray-900 font-semibold hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Pricing
              </button>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
