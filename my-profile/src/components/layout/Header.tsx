import TopNavigation from "./TopNavigation";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">My App</h1>
        <TopNavigation />
      </div>
    </header>
  );
};

export default Header;
