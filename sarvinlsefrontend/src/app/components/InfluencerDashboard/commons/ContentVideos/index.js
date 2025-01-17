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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/get_all_reels`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLinks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error in fetching reel/shorts links : ", error);
        setLoading(false);
      });
  }, []);

  const renderEmbed = (link) => {
    if (link.includes("instagram")) {
      return (
        <InstagramEmbed url={link} width={328} height={500} className="mb-5" />
      );
    } else if (link.includes("youtube")) {
      return (
        <YouTubeEmbed url={link} width={328} height={500} className="mb-5" />
      );
    } else if (link.includes("facebook")) {
      return (
        <FacebookEmbed url={link} width={328} height={500} className="mb-5" />
      );
    } else if (link.includes("linkedin")) {
      return (
        <LinkedInEmbed
          url={link}
          postUrl={link}
          width={328}
          height={500}
          className="mb-5"
        />
      );
    } else if (link.includes("twitter") || link.includes("x.com")) {
      return <XEmbed url={link} width={328} height={500} className="mb-5" />;
    } else {
      return <div>Unsupported link type: {link}</div>;
    }
  };
  if (loading) {
    return (
      <>
        <div class=" flex justify-center align-middle mb-5 mt-20 w-full h-full">
          <svg
            aria-hidden="true"
            class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>

        <div class="flex justify-center font-semibold mb-20">
          Loading...Exciting Deals Are Ready to Come
        </div>
      </>
    );
  }

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
