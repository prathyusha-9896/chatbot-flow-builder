import React, { memo } from "react";

import { Handle, Position } from "reactflow";
import { style } from "./MessageNodeStyles";

const Node = ({ data, selected }) => {
  let customTitle = { ...style.title, color: 'white' };
  customTitle.backgroundColor = "#2A2359";
  return (
    <div className="text-updater-node">
      <div style={{ ...style.body, ...(selected ? style.selected : []) }}>
        <div className="heading" style={customTitle}>{data.heading}</div>
        <div style={style.contentWrapper}>{data.content}</div>
        <div className="emoji">{data.emoji}</div>
      </div>
      <Handle type="source" position={Position.Right} id="b" />
      <Handle type="target" position={Position.Left} id="a" />
    </div>
  );
};

export default memo(Node);
