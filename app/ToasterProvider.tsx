"use client";

import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
  return (
    <Toaster
      position="top-right"
      containerStyle={{
        top: 70,
        right: 20,
      }}
      toastOptions={{
        style: {
          background: "#fff",
          color: "#043042",
          border: "1px solid #f97316",
          borderRadius: "12px",
          padding: "12px 16px",
          animation: "toast-slide-in 0.4s ease-out",
        },
        success: {
          iconTheme: {
            primary: "#f97316",
            secondary: "#fff",
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#fff",
          },
        },
      }}
    />
  );
}
