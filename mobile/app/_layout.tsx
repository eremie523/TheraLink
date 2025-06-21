import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerShown: false,
    contentStyle: {
      backgroundColor: "#f0fdf4",
      paddingBottom: 30
    }
  }} />;
}
