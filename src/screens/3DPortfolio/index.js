import React from "react";
import Header from "../../components/Header";
import { TPortfolioData } from "../../assets/data";
import PortfolioItemLeft from "../../components/PortfolioItems/PortfolioItemLeft";
import PortfolioItemRight from "../../components/PortfolioItems/PortfolioItemRight";

function TDPortfolio() {
  return (
    <div>
      <Header title="3D Portfolio" />

      {/* achievement 1 */}
      <PortfolioItemRight data={TPortfolioData[0]} />
    </div>
  );
}

export default TDPortfolio;
