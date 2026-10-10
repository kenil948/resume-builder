// import React from 'react'

import {
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
} from "react-icons/fa";
import { useResumeEditor } from "../hooks/useResumeEditor";
import getFieldStyle from "../utils/getFieldStyle";

const EditorToolbar = () => {
  const fontFamilies = [
    "Arial",
    "Calibri",
    "Cambria",
    "Georgia",
    "Helvetica",
    "Segoe UI",
    "Times New Roman",
    "Verdana",
    "Tahoma",
    "Garamond",
    "Trebuchet MS",
    "Palatino Linotype",
    "Book Antiqua",
    "Courier New",
    "Lucida Console",
    "Lucida Sans Unicode",
    "Candara",
    "Consolas",
    "Impact",
    "Comic Sans MS",
  ];

  const fontSizes = [
    8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 28, 30, 32, 36, 40,
    44, 48, 56, 64, 72,
  ];

  const lineHeights = [1, 1.2, 1.5, 1.75, 2, 2.5];

  const letterSpacings = [0, 0.5, 1, 1.5, 2, 3, 4];

  const {
    selectedField,
    updateFieldStyle,
    resetFieldStyle,
    editingStyle,
  } = useResumeEditor();

  const updateStyle = (property, value) => {
    if (!selectedField) return;

    updateFieldStyle({
      field: selectedField,
      property,
      value,
    });
  };

  const currentStyle = selectedField
    ? getFieldStyle(editingStyle, selectedField)
    : {};

  const isDisabled = !selectedField;

  const isBold = currentStyle.fontWeight === "700";
  const isItalic = currentStyle.fontStyle === "italic";
  const isUnderline = currentStyle.textDecoration === "underline";
  const isLeftAlign = currentStyle.textAlign === "left";
  const isCenter = currentStyle.textAlign === "center";
  const isRightAlign = currentStyle.textAlign === "right";
  const isJustify = currentStyle.textAlign === "justify";

  const toggleStyle = (property, activeValue) => {
    if (!selectedField) return;

    const currentValue = currentStyle[property];

    updateFieldStyle({
      field: selectedField,
      property,
      value: currentValue === activeValue ? undefined : activeValue,
    });
  };

  return (
    <div
      id="editor-toolbar"
      className="fixed w-[51%] overflow-x-auto top-21 z-50 flex items-center gap-2 bg-white shadow-xl border border-zinc-200 rounded-xl px-4 py-7"
    >
      <div className="group relative">
        <select
          value={currentStyle.fontFamily || ""}
          disabled={isDisabled}
          className={`h-10 px-2 rounded-md border border-zinc-300 outline-none ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
          onChange={(e) => updateStyle("fontFamily", e.target.value)}
        >
          <option value="" disabled>
            Font
          </option>
          {fontFamilies.map((font) => {
            return (
              <option key={font} value={font}>
                {font}
              </option>
            );
          })}
        </select>
        <span className="absolute -top-6.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Font Style
        </span>
      </div>
      <div className="group relative">
        <select
          value={currentStyle.fontSize?.replace("px", "") || ""}
          disabled={isDisabled}
          onChange={(e) => updateStyle("fontSize", `${e.target.value}px`)}
          className={`h-10 px-2 rounded-md border border-zinc-300 outline-none cursor-pointer ${
            isDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <option value="" disabled>
            Size
          </option>

          {fontSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        <span className="absolute -top-6.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Font Size
        </span>
      </div>

      <div className="h-8 w-px bg-zinc-300"></div>

      <div className="group relative">
        <button
          disabled={isDisabled}
          className={`w-10 h-10 rounded-md border transition-colors font-bold ${isBold ? "bg-blue-500 text-white border-blue-500" : "border-zinc-300 hover:bg-zinc-100"} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => toggleStyle("fontWeight", "700")}
        >
          B
        </button>
        <span className="absolute -top-6.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Bold
        </span>
      </div>

      <div className="group relative">
        <button
          disabled={isDisabled}
          className={`w-10 h-10 rounded-md border transition-colors italic ${isItalic ? "bg-blue-500 text-white border-blue-500" : "border-zinc-300 hover:bg-zinc-100"} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => toggleStyle("fontStyle", "italic")}
        >
          I
        </button>
        <span className="absolute -top-6.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Italic
        </span>
      </div>

      <div className="group relative">
        <button
          disabled={isDisabled}
          className={`w-10 h-10 rounded-md border transition-colors underline ${isUnderline ? "bg-blue-500 text-white border-blue-500" : "border-zinc-300 hover:bg-zinc-100"} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => toggleStyle("textDecoration", "underline")}
        >
          U
        </button>
        <span className="absolute -top-6.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Underline
        </span>
      </div>

      <div className="h-8 w-px bg-zinc-300"></div>

      <div className="group relative">
        <input
          value={currentStyle.color || ""}
          disabled={isDisabled}
          type="color"
          className={`w-15 h-10 cursor-pointer ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
          onChange={(e) => updateStyle("color", e.target.value)}
        />
        <span className="absolute -top-6.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Font Color
        </span>
      </div>

      <div className="group relative">
        <input
          value={currentStyle.backgroundColor || ""}
          disabled={isDisabled}
          type="color"
          className={`w-15 h-10 cursor-pointer ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
          onChange={(e) => updateStyle("backgroundColor", e.target.value)}
        />
        <span className="absolute -top-6.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Background Color
        </span>
      </div>
      
      <div className="h-8 w-px bg-zinc-300"></div>

      <div className="group relative">
        <button
          disabled={isDisabled}
          className={`w-10 h-10 flex items-center justify-center transition-colors rounded-md border ${isLeftAlign ? "bg-blue-500 text-white border-blue-500" : "border-zinc-300 hover:bg-zinc-100"} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""} `}
          onClick={() => toggleStyle("textAlign", "left")}
        >
          <FaAlignLeft />
        </button>
        <span className="absolute -top-6.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Align Text Left
        </span>
      </div>

      <div className="group relative">
        <button
          disabled={isDisabled}
          className={`w-10 h-10 flex items-center justify-center transition-colors rounded-md border ${isCenter ? "bg-blue-500 text-white border-blue-500" : "border-zinc-300 hover:bg-zinc-100"} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => toggleStyle("textAlign", "center")}
        >
          <FaAlignCenter />
        </button>
        <span className="absolute -top-6.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Center
        </span>
      </div>

      <div className="group relative">
        <button
          disabled={isDisabled}
          className={`w-10 h-10 flex items-center justify-center transition-colors rounded-md border ${isRightAlign ? "bg-blue-500 text-white border-blue-500" : "border-zinc-300 hover:bg-zinc-100"} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => toggleStyle("textAlign", "right")}
        >
          <FaAlignRight />
        </button>
        <span className="absolute -top-6.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Align Text Right
        </span>
      </div>

      <div className="group relative">
        <button
          disabled={isDisabled}
          className={`w-10 h-10 flex items-center justify-center transition-colors rounded-md border ${isJustify ? "bg-blue-500 text-white border-blue-500" : "border-zinc-300 hover:bg-zinc-100"} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => toggleStyle("textAlign", "justify")}
        >
          <FaAlignJustify />
        </button>
        <span className="absolute -top-6.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Justify
        </span>
      </div>

      <div className="h-8 w-px bg-zinc-300"></div>

      <div className="group relative">
        <select
          value={currentStyle.lineHeight || ""}
          disabled={isDisabled}
          className={`h-10 w-34 px-3 rounded-md border border-zinc-300 outline-none ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
          onChange={(e) => updateStyle("lineHeight", e.target.value)}
        >
          <option value="" disabled>
            Line Height
          </option>
          {lineHeights.map((height) => {
            return (
              <option key={height} value={height}>
                {height}
              </option>
            );
          })}
        </select>
        <span className="absolute -top-6.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Line Height
        </span>
      </div>
      <div className="group relative">
        <select
          value={currentStyle.letterSpacing?.replace("px", "") || ""}
          disabled={isDisabled}
          className={`h-10 w-34 px-3 rounded-md border border-zinc-300 outline-none ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
          onChange={(e) => updateStyle("letterSpacing", `${e.target.value}px`)}
        >
          <option value="" disabled>
            Letter Spacing
          </option>
          {letterSpacings.map((spacing) => {
            return (
              <option value={spacing} key={spacing}>
                {spacing}
              </option>
            );
          })}
        </select>
        <span className="absolute -top-6.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Letter Spacing
        </span>
      </div>

      <div className="h-8 w-px bg-zinc-300"></div>

      <button
        disabled={isDisabled}
        onClick={() => {
          if (!selectedField) return;
          resetFieldStyle(selectedField);
        }}
        className={`h-10 px-4 rounded-md border border-red-300
                    text-red-500 hover:bg-red-50 ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        Reset
      </button>
    </div>
  );
};

export default EditorToolbar;
