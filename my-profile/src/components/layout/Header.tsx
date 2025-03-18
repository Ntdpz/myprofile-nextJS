const Header: React.FC = () => {
  return (
    <header className="bg-green-700 text-white shadow-md min-h-[80px]">
      <div className="container mx-auto flex justify-between items-center p-4 h-full">
        <h1 className="text-[20px] font-bold  ml-auto ">My Profile</h1>
        {/* <TopNavigation /> */}
      </div>
    </header>
  );
};

export default Header;
