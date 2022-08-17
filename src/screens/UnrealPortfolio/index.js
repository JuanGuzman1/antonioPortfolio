import React from "react";
import Header from "../../components/Header";
import { portfolioData } from "../../assets/data";
import PortfolioItemLeft from "../../components/PortfolioItems/PortfolioItemLeft";
import PortfolioItemRight from "../../components/PortfolioItems/PortfolioItemRight";

function UnrealPortfolio() {
  return (
    <div>
      <Header title="Unreal Portfolio" />

      {/* achievement 1 */}
      <PortfolioItemRight data={portfolioData[0]} />
      {/* achievement 2 */}
      <PortfolioItemLeft data={portfolioData[1]} />
      {/* achievement 3 */}
      <PortfolioItemRight data={portfolioData[2]} />
    </div>
  );
}

export default UnrealPortfolio;
