import React from "react";
import "./HomeSplit.scss";

export default function HomeSplit({
  left,
  right,
}) {
  return (
    <section className="home-split">
      <div
        className="home-split__panel home-split__panel--left"
        style={{
          clipPath: "polygon(0 0, 58% 0, 45% 100%, 0% 100%)",
        }}
      >
        <div className="home-split__panel-inner">
          <div className="home-split__content">{left}</div>
        </div>
      </div>

      <div
        className="home-split__panel home-split__panel--right"
        style={{
          clipPath: "polygon(58% 0, 100% 0, 100% 100%, 45% 100%)",
        }}
      >
        <div className="home-split__right-bg">
          {right}
        </div>
        <div className="home-split__panel-inner home-split__panel-inner--right">
          <div className="home-split__content home-split__content--right" />
        </div>
      </div>

      <div
        className="home-split__divider home-split__divider--light"
        style={{
          clipPath: "polygon(56.8% 0, 58.2% 0, 45.2% 100%, 43.8% 100%)",
        }}
      />
      <div
        className="home-split__divider home-split__divider--dark"
        style={{
          clipPath: "polygon(58.2% 0, 60.2% 0, 47.2% 100%, 45.2% 100%)",
        }}
      />

      <div className="home-split__vignette" />

      <div className="home-split__mobile">
        <div className="home-split__mobile-pane home-split__mobile-pane--left">{left}</div>
        <div className="home-split__mobile-pane home-split__mobile-pane--right">
          {right}
        </div>
      </div>
    </section>
  );
}
