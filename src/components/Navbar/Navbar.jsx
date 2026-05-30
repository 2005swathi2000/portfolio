function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-cyan-400 text-2xl font-bold">
          Swathi
        </h1>

        <ul className="hidden md:flex gap-8 text-white">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;