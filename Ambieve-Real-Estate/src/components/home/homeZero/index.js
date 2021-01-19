import React from 'react';
import Header1 from "../../Header1";
import Footer1 from "../../Footer1";
import PageContent from "./content";

export default function HomeZero() {
  return (
    <>
        <div className="page-wrapper">
            <Header1 />
            <PageContent />
            <Footer1 />
        </div>
    </>
  )
}
