const Footer = () => {
  return (
    <div>
      <footer className='footer footer-center p-4 bg-base-300 text-base-content'>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Book
            Vibe
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
