"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  // ฟังก์ชันสำหรับนำทางไปยังหน้า Home
  const goHome = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl text-gray-700 mt-4">
          Oops! The page you're looking for does not exist.
        </p>
        <button
          onClick={goHome}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
