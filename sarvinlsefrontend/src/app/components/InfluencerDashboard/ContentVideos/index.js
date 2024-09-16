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

const index = () => {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://sarvindevbackend.onrender.com/api/user/get_all_reels", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLinks(res.data.data);
      })
      .catch((error) => {
        console.log("Error in fetching reel/shorts links : ", error);
      });
  }, []);

  const renderEmbed = (link) => {
    if (link.includes("instagram")) {
      return <InstagramEmbed url={link} width={328} height={500} className="mb-5" />;
    } else if (link.includes("youtube")) {
      return <YouTubeEmbed url={link} width={328} height={500} className="mb-5" />;
    } else if (link.includes("facebook")) {
      return <FacebookEmbed url={link} width={328} height={500} className="mb-5" />;
    } else if (link.includes("linkedin")) {
      return <LinkedInEmbed url={link} postUrl={link} width={328} height={500} className="mb-5" />;
    } else if (link.includes("twitter") || link.includes("x.com")) {
      return <XEmbed url={link} width={328} height={500} className="mb-5" />;
    } else {
      return <div>Unsupported link type: {link}</div>;
    }
  };

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>{renderEmbed(link)}</div>
      ))}

      {/* <InstagramEmbed
          url="https://www.instagram.com/p/CUbHfhpswxt/"
          width={328}
          height={500}
        />
        <InstagramEmbed
          url="https://www.instagram.com/reel/C_voz1zBz8T/?utm_source=ig_web_copy_link"
          width={328}
          height={500}
        />
        <YouTubeEmbed
          url="https://www.youtube.com/watch?v=HpVOs5imUN0"
          width={328}
          height={500}
        />

        <LinkedInEmbed
          url="https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384"
          postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
          width={328}
          height={500}
        />
        <XEmbed
          url="https://twitter.com/PixelAndBracket/status/1356633038717923333"
          width={328}
          height={500}
        />
        <YouTubeEmbed
          url="https://youtu.be/zCsR-mlRR8M?si=DRHILYQQ4-yyU4Ms"
          width={328}
          height={500}
        />
        <FacebookEmbed
          url="https://www.facebook.com/andrewismusic/posts/451971596293956"
          width={328}
          height={500}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CUbHfhpswxt/"
          width={328}
          height={500}
        />
        <YouTubeEmbed
          url="https://www.youtube.com/watch?v=HpVOs5imUN0"
          width={328}
          height={500}
        /> */}
    </>
  );
};

export default index;
