const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-green-400 text-blac h-screen-auto">
      {" "}
      {/* ใช้ h-screen เพื่อให้ Sidebar เต็มหน้าจอ */}
      <h1 className="text-xl font-bold text-center h-[40px] bg-green-900 text-white flex items-center justify-center">
        About me
      </h1>
      {/* <h2 className="text-xl font-bold mb-6 mt-4 ml-9 mr-3">About me</h2> */}
      <ul className="space-y-4">
        <li>
          <a href="/" className="block hover:bg-gray-700 px-4 py-2 rounded">
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="block hover:bg-gray-700 px-4 py-2 rounded"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="block hover:bg-gray-700 px-4 py-2 rounded"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
