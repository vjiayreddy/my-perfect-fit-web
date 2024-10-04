import React, { memo } from "react";

interface FilterComponentProps {
  onChange: any;
}

const FilterComponent = ({ onChange }: FilterComponentProps) => {
  console.count("FilterComponent");

  return (
    <input
      type="text"
      placeholder="Filter colors..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default memo(FilterComponent);
