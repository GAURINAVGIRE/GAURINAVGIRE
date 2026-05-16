import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [darkNav, setDarkNav] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const ids = [
        "home",
        "about",
        "skills",
        "projects",
        "resume",
        "contact",
      ];

      let current = "home";

      ids.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop - 120;

          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);

      // blue background sections
      if (current === "home" || current === "projects") {
        setDarkNav(true);
      } else {
        setDarkNav(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = (id, label) => (
    <a
      href={`#${id}`}
      className={`px-6 py-3 rounded-full transition-all duration-300 ${
        active === id
          ? "bg-white text-blue shadow-md font-semibold"
          : darkNav
          ? "text-white hover:bg-white hover:text-blue"
          : "text-blue hover:bg-blue hover:text-white"
      }`}
    >
      {label}
    </a>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="w-full px-10 py-8 flex justify-between items-center">

        <h1
          className={`text-3xl font-black transition ${
            darkNav ? "text-black" : "text-blue"
          }`}
        >
          GN
        </h1>

        <div className="flex gap-5 text-sm">
          {link("home", "Home")}
          {link("about", "About")}
          {link("skills", "Skills")}
          {link("projects", "Projects")}
          {link("resume", "Resume")}
          {link("contact", "Contact")}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;