import React from "react";
import Header from "../../components/Header";
import { portfolioData } from "../../assets/data";
import PortfolioItemLeft from "../../components/PortfolioItems/PortfolioItemLeft";
import PortfolioItemRight from "../../components/PortfolioItems/PortfolioItemRight";

function Portfolio() {
  return (
    <div>
      <Header title="Portfolio" />

      {/* achievement 1 */}
      <PortfolioItemRight data={portfolioData[0]} />
      {/* achievement 2 */}
      <PortfolioItemLeft data={portfolioData[1]} />
      {/* achievement 1 */}
      <PortfolioItemRight data={portfolioData[2]} />
      {/* achievement 2 */}
      <PortfolioItemLeft data={portfolioData[3]} />
    </div>
  );
}

export default Portfolio;
