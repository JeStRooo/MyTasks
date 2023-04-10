import React from "react";

export type buttonType = {
  children: React.ReactNode,
  type: "button" | "submit" | "reset",
  onClick: () => void,
  disabled?: boolean
}