import React from "react";
import PropTypes from "prop-types";
import './css/yt.css'
const YoutubeEmbed = ({ embedId }) => (
  <>
  
  <div className="video-responsive">
    <iframe
      width="853"
      height="450"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  </>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
