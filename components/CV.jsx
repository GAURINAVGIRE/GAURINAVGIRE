function CV() {
  return (
    <section
      id="resume" 
      className="bg-black py-28 px-10 text-center"
    >
      <h2 className="text-5xl text-white font-black mb-8">
        Resume
      </h2>

      <p className="text-lg text-gray-600 mb-10">
        Download my professional resume.
      </p>

      <a
        href="/resume.pdf"
        download
        className="inline-block bg-black text-white px-10 py-4 rounded-full"
      >
        Download Resume
      </a>
    </section>
  );
}

export default CV;