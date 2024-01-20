import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import IssueForum from "./pages/issueForum";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/issue-forum/:number" element={<IssueForum />} />
      <Route path="*" element={<Navigate to="/dashboard/profile" replace />} />
    </Routes>
  );
}

export default App;
