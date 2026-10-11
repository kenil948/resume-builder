import { useState, useRef, useEffect } from "react";
import EditorToolbar from "../../Pages/EditorToolbar";
import { useResumeEditor } from "../../hooks/useResumeEditor";
import { FiZoomIn } from "react-icons/fi";

const RightPanel = ({ form, template, ref, className = "" }) => {
  const { isEditMode } = useResumeEditor();
  const { watch } = form;
  const [zoomLevel, setZoomLevel] = useState("fit");
  const [containerWidth, setContainerWidth] = useState(800);
  const [contentHeight, setContentHeight] = useState(1100);

  const scrollContainerRef = useRef(null);
  const containerRef = useRef(null);
  const paperRef = useRef(null);

  const resumeData = watch();
  const SelectedTemplateComponent = template.component;

  // Track container width
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === containerRef.current) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Track content height for scaled wrapper bounds
  useEffect(() => {
    if (!paperRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === paperRef.current) {
          setContentHeight(entry.contentRect.height);
        }
      }
    });
    observer.observe(paperRef.current);
    return () => observer.disconnect();
  }, []);

  const PAPER_WIDTH = 800;
  const availableWidth = Math.max(containerWidth - 32, 280);
  const autoFitScale = Math.min((availableWidth - 4) / PAPER_WIDTH, 1.0);

  let currentScale = 1.0;
  if (zoomLevel === "fit") {
    currentScale = autoFitScale;
  } else if (zoomLevel === "60%") {
    currentScale = 0.6;
  } else if (zoomLevel === "80%") {
    currentScale = 0.8;
  } else if (zoomLevel === "100%") {
    currentScale = 1.0;
  }

  const scaledWidth = PAPER_WIDTH * currentScale;
  const isWiderThanContainer =
    zoomLevel !== "fit" && scaledWidth > containerWidth - 24;

  // Reset scroll position to 0 whenever zoom level changes so left edge is always visible
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [zoomLevel, currentScale]);

  const scaledWrapperHeight =
    currentScale < 1.0 ? Math.ceil(contentHeight * currentScale) + 8 : "auto";

  return (
    <div
      ref={containerRef}
      className={`w-full lg:w-[55%] h-[calc(100vh-120px)] lg:h-[calc(100vh-70px)] bg-[#d7d3c8] print:h-auto px-2 md:px-4 lg:px-6 py-2 md:py-4 lg:py-6 overflow-y-auto flex flex-col ${className}`}
    >
      {isEditMode && (
        <div className="mb-4 lg:mb-27 flex items-center justify-center">
          <EditorToolbar />
        </div>
      )}

      {/* Mobile & Tablet Zoom Controls (< lg) */}
      <div className="lg:hidden w-full flex items-center justify-between bg-[#efece5] border border-[#e3e5e8] px-3 py-1.5 rounded-lg mb-2 sm:mb-3 shadow-xs flex-shrink-0">
        <span className="flex items-center gap-1.5 text-xs text-[#5a5965] font-semibold">
          <FiZoomIn size={14} /> Zoom:
        </span>
        <div className="flex gap-1">
          {["fit", "60%", "80%", "100%"].map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setZoomLevel(level)}
              className={`px-2 py-0.5 text-[11px] font-semibold rounded transition-colors ${
                zoomLevel === level
                  ? "bg-[#1a2744] text-white"
                  : "bg-white text-[#5a5965] hover:text-[#1a1a2e]"
              }`}
            >
              {level === "fit" ? "Auto Fit" : level}
            </button>
          ))}
        </div>
      </div>

      {/* Preview Container Wrapper */}
      <div
        ref={scrollContainerRef}
        className={`w-full print:overflow-visible flex-1 flex pb-4 sm:pb-6 ${
          zoomLevel === "fit" ? "overflow-x-hidden" : "overflow-x-auto"
        } ${isWiderThanContainer ? "justify-start" : "justify-center"}`}
      >
        <div
          style={{
            height:
              typeof scaledWrapperHeight === "number"
                ? `${scaledWrapperHeight}px`
                : "auto",
            width:
              currentScale < 1.0
                ? `${Math.ceil(PAPER_WIDTH * currentScale)}px`
                : `${PAPER_WIDTH}px`,
            flexShrink: 0,
          }}
          className={`relative transition-all duration-150 print:!h-auto print:!w-full print:!overflow-visible ${currentScale < 1.0 ? "overflow-hidden" : ""}`}
        >
          <div
            ref={(node) => {
              paperRef.current = node;
              if (typeof ref === "function") ref(node);
              else if (ref) ref.current = node;
            }}
            style={{
              width: `${PAPER_WIDTH}px`,
              transform: currentScale !== 1.0 ? `scale(${currentScale})` : "none",
              transformOrigin: "top left",
            }}
            className="bg-white shadow-md print:shadow-none print:!transform-none print:!w-full min-w-[320px]"
          >
            <SelectedTemplateComponent resumeData={resumeData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
