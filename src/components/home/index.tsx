import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p className="text-gray-500">{auth.currentUser?.email}</p>
      <button
        onClick={() => signOut(auth)}
        className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        로그아웃
      </button>
    </div>
  );
};

export default HomePage;
