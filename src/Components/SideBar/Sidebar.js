import React, { useState } from "react";
import EditMessage from "./EditMessage";
import { isAllNodeisConnected } from "../../utils";
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';

const Sidebar = ({ isSelected, textRef, nodeName, setNodeName, nodes, edges, setNodes }) => {
  const [emoji, setEmoji] = useState('');

  const onDragStart = (event, nodeType, content) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("content", content);
    event.dataTransfer.effectAllowed = "move";
  };

  const saveHandler = () => {
    if (isAllNodeisConnected(nodes, edges)) {
      alert("Congrats its correct");
    } else {
      alert("Please connect source nodes (Cannot Save Flow)");
    }
  };

  const addEmoji = (e) => {
    setEmoji(e.native);
  };
  const [showPicker, setShowPicker] = useState(false);

  const handleEmojiSelect = (emoji) => {
    setNodeName((prevName) => prevName + emoji.native);
  };
  return (
    <aside>
      {isSelected ? (
        <EditMessage
          textRef={textRef}
          nodeName={nodeName}
          setNodeName={setNodeName}
        />
      ) : (
        <div
          className="dndnode input"
          onDragStart={(event) => onDragStart(event, "node", "message")}
          draggable
          style={{border: "2px solid #2A2359", borderRadius: "3px", backgroundColor:"white"}}
        >
          Enter your Message
        </div>
      )}
      <div className="" >
        <div >
        <button  onClick={() => setShowPicker(!showPicker)} style={{border: "0px solid #2A2359", borderRadius: "3px", backgroundColor:"white"}}>😀 Add Emojis</button>
        <div style={{paddingTop:"20px"}}>
        {showPicker && <Picker data={data} onEmojiSelect={handleEmojiSelect} />}
        </div>
        </div>
        <div className="" style={{marginTop: "20px"}}>
        <button style={{border: "2px solid #2A2359", borderRadius: "3px", backgroundColor:"white", width:"60px", height:"40px", fontWeight:"bold"}} onClick={saveHandler}>Save</button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
