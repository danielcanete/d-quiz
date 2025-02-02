import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="relative w-full min-h-screen bg-question">
      <div className="absolute inset-0 bg-white/90"></div>
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  )
}
