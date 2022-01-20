import React from "react";
import { ResumeObject } from "./ResumeViewerStyles";

export default function ResumeViewer({ data }) {
  return <ResumeObject data={data} type="application/pdf" />;
}
