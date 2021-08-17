import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { RootState, actions } from "../../modules";

import storage from "../storage";

export default function useTheme() {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.core.theme);
    const { setTheme: setThemeAction } = actions;

    const setTheme = useCallback((theme = "light") => {
        dispatch(setThemeAction(theme));
        storage.setItem("THEME", theme);
    }, [dispatch]);

    return { theme, setTheme };
}