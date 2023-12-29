// Sidebar.js
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className=" text-white h-screen flex flex-col p-4">
      <Link className="my-4" href="/AdminPanel">
        <span className="mb-4 p-2 hover:bg-gray-700 rounded my-4">
          Admin Panel
        </span>
      </Link>
      <Link className="my-4" href="/RecruiterPanel">
        <span className="mb-4 p-2 hover:bg-gray-700 rounded my-4">
          Recruiter Panel
        </span>
      </Link>
      <Link className="my-4" href="/CompanyPanel">
        <span className="mb-4 p-2 hover:bg-gray-700 rounded my-4">
          Company Panel
        </span>
      </Link>
      <Link className="my-4" href="/DeveloperPanel">
        <span className="mb-4 p-2 hover:bg-gray-700 rounded my-4">
          Developer Panel
        </span>
      </Link>
      <Link className="my-4" href="/">
        <span className="mb-4 p-2 hover:bg-gray-700 rounded my-4">Home</span>
      </Link>
    </div>
  );
};

export default Sidebar;
