const Sidebar: React.FC = () => {
    return (
      <div className="w-64 bg-gray-800 text-white h-screen p-4"> {/* ใช้ h-screen เพื่อให้ Sidebar เต็มหน้าจอ */}
        <h2 className="text-xl font-bold mb-6">Sidebar</h2>
        <ul className="space-y-4">
          <li>
            <a href="/" className="block hover:bg-gray-700 px-4 py-2 rounded">Home</a>
          </li>
          <li>
            <a href="/about" className="block hover:bg-gray-700 px-4 py-2 rounded">About</a>
          </li>
          <li>
            <a href="/contact" className="block hover:bg-gray-700 px-4 py-2 rounded">Contact</a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  