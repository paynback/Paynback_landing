"use client";

import { useState, useEffect } from "react";

export default function LastUpdatedDate() {
  const [dateStr, setDateStr] = useState("");
  
  useEffect(() => {
    const d = new Date();
    setDateStr(
      d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);
  
  if (!dateStr) return <span className="opacity-0">Loading date...</span>;
  
  return <span className="font-medium text-white/90">{dateStr}</span>;
}
