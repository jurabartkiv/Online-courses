import React from "react";

interface MainTitleProps {
  title: string;
}

export default function MainTitle(props: MainTitleProps) {
  return <div>{props.title}</div>;
}
