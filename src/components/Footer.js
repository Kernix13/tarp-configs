function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer pt-6 pb-6 bg-gradient-to-br from-teal-900 to-teal-500 text-primary-content footer-center">
      <div className="container">
        <p className="text-center">
          Copyright &copy; {footerYear} | Open source project by{" "}
          <a href="https://kernixwebdesign.com/resume-portfolio.html" className="font-bold">
            Jim Kernicky
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
