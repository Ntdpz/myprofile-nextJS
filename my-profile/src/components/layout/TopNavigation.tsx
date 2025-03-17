import Link from "next/link";

const TopNavigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/test" className="hover:text-gray-300">
            test
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopNavigation;
