import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Task } from "../../interfaces";
import { useAppSelector } from "../../store/hooks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const Directory: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const directories = useAppSelector((state) => state.tasks.directories);
  const params = useParams();
  const navigate = useNavigate();

  const dir = params.dir ?? ""; // Задаем значение по умолчанию

  useDescriptionTitle(
    `Tasks in "${dir}"`, // Используем dir вместо params.dir
    dir ? dir + " directory" : ""
  );

  const [tasksInCurrentDirectory, setTasksInCurrentDirectory] = useState<Task[]>([]);

  useEffect(() => {
    const dirExists = directories.includes(dir);
    if (!dirExists) {
      navigate("/");
    }
    const tasksFiltered = tasks.filter((task: Task) => task.dir === dir);
    setTasksInCurrentDirectory(tasksFiltered);
  }, [directories, navigate, dir, tasks]);

  return (
    <LayoutRoutes
      title={`${dir}'s tasks`} // Используем dir вместо params.dir
      tasks={tasksInCurrentDirectory}
    />
  );
};

export default Directory;