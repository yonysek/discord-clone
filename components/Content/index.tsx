import {
  BsPlusCircleFill,
  BsGiftFill,
  BsEmojiLaughingFill,
} from "react-icons/bs";
import { AiOutlineFileGif } from "react-icons/ai";
import Image from "next/image";

// Chatting room with hardcoded messages
export default function Content() {
  return (
    <div className="pb-10 overflow-x-hidden">
      <Text
        name="Katelynn"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        time="19/07/2004"
      />

      <Text
        name="Ciaroh"
        text="Lorem ipsum dolor sit amet, consectet."
        time="yesterday"
      />

      <Text name="Creame" text="Lorem." time="3 hours ago" />
      <Text
        name="Darwin"
        text="Lorem ipsum dolor sit amet, consectet."
        time="hour and half ago"
      />
      <Text name="Calvin" text="Lorem ipsum." time="hour ago" />
      <Text
        name="Aliya"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur."
        time="half hour ago"
      />
      <Text
        name="Rumaysa"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor."
        time="few minutes ago"
      />
      <Text
        name="Anastasia"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem."
        time="few minutes ago"
      />
      <Text name="Jenny" text="Lorem...." time="2 minutes ago" />
      <Text name="Tyler" text="Lorem ip." time="minute ago" />
      <Text name="Abel" text="Lorem ipsum dolor." time="few seconds ago" />
      <Text name="Nik" text="Lor." time="just now" />
      <TextInput />
    </div>
  );
}

const Text = ({
  name,
  text,
  time,
}: {
  name: string;
  text: string;
  time: string;
}) => {
  const imgUrl = `https://robohash.org/${Math.floor(
    Math.random() * 10000
  )}?set=set4`;

  // Text content with Next Image so the webpage loading time is faster.
  return (
    <div className="p-4 text-black content-text dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
      <Image
        loader={() => imgUrl}
        src={imgUrl}
        alt="profile picture"
        className="bg-gray-200 rounded-full border-1"
        width="48"
        height="48"
      />
      <div>
        <h3 className="font-bold">
          {name} <span className="text-gray-500">{time}</span>
        </h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

const TextInput = () => {
  return (
    <div className="content-input-text">
      <BsPlusCircleFill size="20" className="topnav-icon" />
      <input
        type="text"
        placeholder="Enter a message..."
        className="w-full bg-transparent outline-none"
      />
      <BsGiftFill size="20" className="topnav-icon" />
      <AiOutlineFileGif size="24" className="topnav-icon" />
      <BsEmojiLaughingFill size="20" className="topnav-icon" />
    </div>
  );
};
