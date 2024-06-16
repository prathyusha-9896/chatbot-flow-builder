import React, { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const EditMessage = ({ textRef, nodeName, setNodeName }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleEmojiSelect = (emoji) => {
    setNodeName((prevName) => prevName + emoji.native);
  };

  return (
    <div className="updatenode__controls">
      <label className=""  ></label>
      <textarea
        ref={textRef}
        value={nodeName}
        onChange={(evt) => setNodeName(evt.target.value)}
      />
    </div>
  );
};

export default EditMessage;
