import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NotificationsScreen } from "./src/features/notifications/screens/notifications.screen";

export default function App() {
  return (
    <>
      <NotificationsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
