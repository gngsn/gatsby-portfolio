import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { RootState, actions } from "../../modules";

import storage from "../storage";

export default function useHeader() {
    const dispatch = useDispatch();
    const menu = useSelector((state: RootState) => state.header.menu);
    const { setMenu: setMenuAction } = actions;

    const setMenu = useCallback((select = "HOME", save = false) => {
        dispatch(setMenuAction(select));
        if (save)
            storage.setItem("CURRENT_MENU", select);
    }, [dispatch]);

    return { menu, setMenu };
}