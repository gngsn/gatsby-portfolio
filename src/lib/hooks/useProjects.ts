import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { RootState, actions } from "../../modules";

import storage from "../storage";

export default function useHeader() {
    const dispatch = useDispatch();
    const projects = useSelector((state: RootState) => state.core.projects);
    const { setProjects: setProjectsAction } = actions;

    const setProjects = useCallback((projects = [], save = false) => {
        dispatch(setProjectsAction(projects));
        if (save)
            storage.setItem("PROJECTS", projects);
    }, [dispatch]);

    return { projects, setProjects };
}