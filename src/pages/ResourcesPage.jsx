import React from "react";
import Title from "../components/Title";
import SearchIcon from "@mui/icons-material/Search";
import Navbar from "../components/Navbar";
import MiniCard from "../components/MiniCard";
import DescriptionIcon from "@mui/icons-material/Description";

function ResourcesPage() {
  return (
    <div className="resources-page">
      <Navbar />
      <div className="resources-title padding-top-10 mb-5">
        <Title
          titleone={"Resources to help you grow"}
          titletwo={"as a creative entrepreneur."}
        />
      </div>
      <div className="d-flex justify-content-center padding-bottom-5">
        <div className="search-container">
          <input type="text" placeholder="Search articles…" />
          <span className="icon">
            <SearchIcon fontSize="large" />
          </span>
        </div>
      </div>

      <div className="content padding-top-5">
        <div className="cards">
          <div className="items d-flex justify-content-around flex-wrap">
            <MiniCard
              title={"Articles"}
              content={
                "Our best tips for launching and growing your creative business online."
              }
              buttonText={"Learn More"}
              icon={<DescriptionIcon />}
            />
            <MiniCard
              title={"Articles"}
              content={
                "Our best tips for launching and growing your creative business online."
              }
              buttonText={"Learn More"}
              icon={<DescriptionIcon />}
            />
            <MiniCard
              title={"Articles"}
              content={
                "Our best tips for launching and growing your creative business online."
              }
              buttonText={"Learn More"}
              icon={<DescriptionIcon />}
            />
          </div>
        </div>

        <div className="articles padding-top-10">
          <div className="title padding-bottom-5">
            <Title
              titleone={"Most insighful articles"}
              titletwo={"for start off"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcesPage;
