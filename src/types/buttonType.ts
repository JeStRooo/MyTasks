import React from "react";

export type buttonType = {
  children?: React.ReactNode,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
  disabled?: boolean
}