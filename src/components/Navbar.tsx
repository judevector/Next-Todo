import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-pink-800 px-8 py-3 rounded-md">
      <Link href={"/"} className="text-white font-bold text-2xl">
        Next-Todo.
      </Link>
      <Link href={"/add"} className=" bg-white p-2 rounded-md font-medium">
        Add Todo
      </Link>
    </nav>
  );
};

export default Navbar;
