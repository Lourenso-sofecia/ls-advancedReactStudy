import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { PrivateLayout } from "../layouts/PrivateLayout";
import { Profile } from "../pages/private/Profile";
import { Dashboard } from "../pages/private/Dashboard";
import { StudySchedule } from "../pages/private/StudySchedule";
import { StudyWeekDetail } from "../pages/private/StudyWeekDetail";
import { TodoPage } from "../pages/private/Projects/TodoList";
import { CounterPage } from "../pages/private/Projects/Counter";

export const privateRoutes = () => [
  <Route
    element={
      <ProtectedRoute>
        <PrivateLayout />
      </ProtectedRoute>
    }
  >
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/study-schedule" element={<StudySchedule />} />
    <Route path="/study-schedule/:weekId" element={<StudyWeekDetail />} />
    <Route path="/study-schedule/:weekId/todo-list" element={<TodoPage />} />
    <Route path="/study-schedule/:weekId/counter" element={<CounterPage />} />
  </Route>
];