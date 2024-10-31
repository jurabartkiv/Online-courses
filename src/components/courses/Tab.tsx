import React from "react";

export default function Tab({ activeTab, onClick }: any) {
  return (
    <>
      <h2
        className={`filter ${activeTab === "All courses" ? "active" : ""}`}
        onClick={(e) => onClick(e)}
      >
        All courses
      </h2>
      <h2
        className={`filter ${activeTab === "The Newest" ? "active" : ""}`}
        onClick={(e) => onClick(e)}
      >
        The Newest
      </h2>
      <h2
        className={`filter ${activeTab === "Top Rated" ? "active" : ""}`}
        onClick={(e) => onClick(e)}
      >
        Top Rated
      </h2>
      <h2
        className={`filter ${activeTab === "Most Popular" ? "active" : ""}`}
        onClick={(e) => onClick(e)}
      >
        Most Popular
      </h2>
    </>
  );
}
