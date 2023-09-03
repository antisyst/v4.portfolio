import React, { useEffect, useRef } from "react";
import MainLogo from "../../logo";

const Loader: React.FC = () => {
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const loadingCenterRef = useRef<HTMLDivElement | null>(null);
  const block1Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      if (loadingRef.current) {
        loadingRef.current.className = "slideDown";
      }
    }, 3800);

    const loadingCenterTimeout = setTimeout(() => {
      if (loadingCenterRef.current) {
        loadingCenterRef.current.className = "zoomOut";
      }
    }, 3200);

    const block1Timeout = setTimeout(() => {
      if (block1Ref.current) {
        block1Ref.current.className = "slideInUp";
      }
    }, 3800);

    return () => {
      clearTimeout(loadingTimeout);
      clearTimeout(loadingCenterTimeout);
      clearTimeout(block1Timeout);
    };
  }, []);

  return (
    <div>
      <div className="res-container">
        <div className="res-row">
          <div id="block-1 b3" ref={block1Ref}>
            <div id="loader-wrap">
              <div id="loading" ref={loadingRef}>
                <div id="loading-center" ref={loadingCenterRef}>
                  <div id="loading-center-absolute">
                    <MainLogo />
                    <div id="object" />
                    <div id="loader" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="res-container">
        <div className="res-row">
          <div id="block-1">
            <div id="block-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
