import React, { useEffect } from "react";
import MainLogo from "../../logo";
const Loader: React.FC = () => {
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      const loadingElement = document.getElementById("loading");
      if (loadingElement) {
        loadingElement.className = "slideDown";
      }
    }, 3800);

    const loadingCenterTimeout = setTimeout(() => {
      const loadingCenterElement = document.getElementById("loading-center");
      if (loadingCenterElement) {
        loadingCenterElement.className = "zoomOut";
      }
    }, 3200);

    const block1Timeout = setTimeout(() => {
      const block1Element = document.getElementById("block-1");
      if (block1Element) {
        block1Element.className = "slideInUp";
      }
    }, 3800);

    return () => {
      clearTimeout(loadingTimeout);
      clearTimeout(loadingCenterTimeout);
      clearTimeout(block1Timeout);
    };
  }, []);

  return(
    <div>
    <div className="res-container">
      <div className="res-row">
        <div id="block-1 b3">
          <div id="loader-wrap">
            <div id="loading">
              <div id="loading-center">
                <div id="loading-center-absolute">
                  <MainLogo/>
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
