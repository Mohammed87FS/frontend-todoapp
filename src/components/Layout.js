import { Outlet, Link, Navigate } from "react-router-dom";
// import { useStateContext } from "../Contexts/ContextProvider";

export default function DefaultLayout() {
  // const { user, token } = useStateContext();

  // if (!token) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <div id="defaultLayout" className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-blue-500 text-white p-4 shadow">
        <ul className="flex space-x-4 flex-start">
          <li>
            <Link to="/Tasks" className="hover:bg-blue-700 p-2 rounded transition-colors">Tasks</Link>
          </li>
          <li>
            <Link to="/makingTasks" className="hover:bg-blue-700 p-2 rounded transition-colors">Add Taks</Link>
          </li>
          <li>
            <Link to="/login" className="hover:bg-blue-700 p-2 rounded transition-colors">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="hover:bg-blue-700 p-2 rounded transition-colors">Signup</Link>
          </li>
          <li>
            <Link to="/signup" className="hover:bg-blue-700 p-2 rounded transition-colors">Logout</Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-1 content bg-white">
      
        <main className="flex-1 p-5 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
