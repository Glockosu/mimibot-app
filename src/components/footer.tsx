"use client"
import { ModeToggle } from '../components/mode-toggle';
import { useRouter } from 'next/navigation';

// Custom component for the Discord link
const DiscordLink = () => {
  const router = useRouter();

  const redirectToDiscord = () => {
    // Redirect to discord.gg/dawntof
    router.push('https://discord.gg/dawntof');
  };

  return (
    <div className="flex items-center cursor-pointer" onClick={redirectToDiscord}>
      <div className="flex items-center text-slate-950 dark:text-slate-50 hover:underline">
        <svg
          className="w-4 h-4 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 15"
        >
          <path
            fillRule="evenodd"
            d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
            clipRule="evenodd"
          />
        </svg>
        Discord
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Use the custom DiscordLink component */}
          <DiscordLink />
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-slate-950 dark:text-slate-50 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">About</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;