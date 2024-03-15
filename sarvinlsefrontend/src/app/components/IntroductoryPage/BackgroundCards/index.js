import React from 'react';

function BackgroundCards({ children, styles }) {
  return (
    <>
      <a
        href="#"
        class="opacity-200 bg-gray block max-w-sm rounded-lg border border-gray-200 p-6 shadow"
        style={styles}
      >
        <p class="font-normal text-gray-700 dark:text-gray-400">{children}</p>
      </a>
    </>
  );
}

export default BackgroundCards;
