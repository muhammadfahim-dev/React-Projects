import React, { useEffect } from "react";

function Bar({ marks }) {

  return (
    <div className="w-100 border mt-5 h-3 rounded-full overflow-hidden mb-6">
      <div
        className={`bg-blue-500 h-full`}
        style={{ width: `${marks * 25}%` }}
      ></div>
    </div>
  );
}

export default Bar;
