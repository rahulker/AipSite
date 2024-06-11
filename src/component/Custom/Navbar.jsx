const NavigationBar = () => {
  return (
    <>
      <nav className="flex items-center justify-between">
        <h2>FutureTech Mart</h2>
        <ul className="flex items-center gap-10">
          <li>
            <a href="#">Home</a>
          </li>
          <li className="hover:opacity-50">
            <a href="#">Product</a>
          </li>
          <li className="hover:opacity-50">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationBar;
