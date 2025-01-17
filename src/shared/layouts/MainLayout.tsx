import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-4">
      <Outlet />
    </div>
  )
}
