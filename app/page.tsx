import { ChevronRightIcon } from "@heroicons/react/16/solid";
import {
  LightBulbIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

const aboutMeFacts = [
  "Was born in Chicago in 1984, whoops.. I’m getting old.. 😆",
  "I’m a life lover, I cherish each moment of my life as if it was the last one ! 😍",
  "You won’t get bored with me ! Haha I have so much energy that I’ll wake up you better than a cup of coffee would 😇",
];

export default function Home() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-center">
        Hey, I’m Anna
      </h2>
      <div className="mt-1 flex flex-col  sm:flex-wrap sm:space-x-6 text-center">
        <div className="mt-2 flex items-center text-sm text-gray-500 justify-center">
          Hairdresser since 2008, based in New York City
        </div>
      </div>
      <div className="mt-6">
        <div className="flex flex-row gap-2 mb-4">
          <h3 className="text-xl font-semibold leading-6 text-gray-800">
            About Me
          </h3>
          <LightBulbIcon height={22} width={22} className="text-pink-500/75" />
        </div>
        <ul className="flex flex-col gap-4">
          {aboutMeFacts.map((fact, i) => {
            return (
              <li
                key={i}
                className="flex flex-row marker:text-color items-center"
              >
                <ChevronRightIcon
                  height={16}
                  width={16}
                  className="font-bold text-pink-500/75 min-w-6 md:min-w-8"
                />{" "}
                <p className="text-gray-600">{fact}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-6">
        <div className="flex flex-row gap-2 mb-4">
          <h3 className="text-xl font-semibold leading-6 text-gray-800">
            Contact Me
          </h3>
          <ChatBubbleLeftEllipsisIcon
            height={22}
            width={22}
            className="text-pink-500/75"
          />
        </div>
        <p className="mt-2 text-gray-600">
          Interested in a new look or just want to say hello? Feel free to reach
          out to me via email at
          <a
            href="mailto:anna@hairbyanna.com"
            className="text-pink-500 hover:underline ml-1"
          >
            anna@hairbyanna.com
          </a>
          or follow me on Instagram
          <a
            href="https://instagram.com/hairbyanna"
            className="text-pink-500 hover:underline ml-1"
          >
            @hairbyanna
          </a>
          .
        </p>
      </div>
    </div>
  );
}
