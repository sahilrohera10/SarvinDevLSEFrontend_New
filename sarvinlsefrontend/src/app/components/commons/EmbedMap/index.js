"use client";

import React from "react";

const EmbedMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14043.41815429853!2d79.3916043!3d28.36324705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1705822154648!5m2!1sen!2sin"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default EmbedMap;
