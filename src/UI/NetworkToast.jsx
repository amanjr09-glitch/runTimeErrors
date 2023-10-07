import { Alert, Snackbar } from "@mui/material";
import React, { useState, useEffect } from "react";

const NetworkToast = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        function onlineHandler() {
            setIsOnline(true);
        }

        function offlineHandler() {
            setIsOnline(false);
        }

        window.addEventListener("online", onlineHandler);
        window.addEventListener("offline", offlineHandler);


        return () => {
            window.removeEventListener("online", onlineHandler);
            window.removeEventListener("offline", offlineHandler);
        };
    }, []);


    return (
        <Snackbar
            anchorOrigin={{
                vertical: "top",
                horizontal: "center"
            }}
            open={!isOnline}
        >
            <Alert severity="error">You are offline. Please check your internet connection.</Alert>
        </Snackbar>
    );
}

export default NetworkToast;