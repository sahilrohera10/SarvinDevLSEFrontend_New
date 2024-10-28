import React, { useEffect, useState } from "react";
import {
  InstagramEmbed,
  FacebookEmbed,
  LinkedInEmbed,
  PinterestEmbed,
  YouTubeEmbed,
  XEmbed,
} from "react-social-media-embed";
import axios from "axios";

const index = ({ links = [] }) => {
  const renderEmbed = (link) => {
    if (link.includes("instagram")) {
      return (
        <InstagramEmbed url={link} width={128} height={200} className="m-3" />
      );
    } else if (link.includes("youtube")) {
      return (
        <YouTubeEmbed url={link} width={128} height={200} className="m-3" />
      );
    } else if (link.includes("facebook")) {
      return (
        <FacebookEmbed url={link} width={128} height={200} className="m-3" />
      );
    } else if (link.includes("linkedin")) {
      return (
        <LinkedInEmbed
          url={link}
          postUrl={link}
          width={128}
          height={200}
          className="m-3 "
        />
      );
    } else if (link.includes("twitter") || link.includes("x.com")) {
      return <XEmbed url={link} width={128} height={200} className="m-3" />;
    } else {
      return <div>Unsupported link type: {link}</div>;
    }
  };

  return (
    <div class="flex gap-2 w-full">
      {links.map((link, index) => (
        <div class="border border-zinc-200 rounded bg-gray-200" key={index}>
          {renderEmbed(link)}
        </div>
      ))}
    </div>
  );
};

export default index;
