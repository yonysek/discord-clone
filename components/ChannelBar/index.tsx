import { FaChevronDown, FaChevronRight, FaHashtag } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Room } from "../../types/rooms";

export default function ChannelBar() {
  const [rooms, setRooms] = useState<Room[]>();

  const fetchRooms = useCallback(async () => {
    const res = await fetch("/api/rooms");
    const data = await res.json();
    setRooms(data.data);
  }, []);

  useEffect(() => {
    fetchRooms();
  }, [fetchRooms]);

  if (!rooms) return <></>;

  const allRooms = rooms.map((room) => (
    <ChannelRooms
      key={room.id}
      id={room.id}
      roomName={room.roomName}
      rooms={room.rooms}
    />
  ));

  return (
    <div className="channel-bar">
      <ChannelName name="Channel" />
      {allRooms}
    </div>
  );
}

const ChannelName = ({ name }: { name: string }) => (
  <div className="channel-name group">
    <h1>{name}</h1>
    <FaChevronDown className="transition-all cursor-pointer group-hover:rotate-180" />
  </div>
);

const ChannelRooms = ({
  id,
  roomName,
  rooms,
}: {
  id: string;
  roomName: string;
  rooms: string[];
}) => {
  const [roomShow, setRoomShow] = useState(false);

  return (
    <div className="channel-rooms">
      <div
        className="channel-rooms-title "
        onClick={() => setRoomShow(!roomShow)}
      >
        <FaChevronRight
          size="8"
          className={`transition-all duration-150 ${
            roomShow ? "rotate-90" : ""
          }`}
        />
        <h2>{roomName}</h2>
      </div>
      <AnimatePresence>
        {roomShow && (
          <motion.div
            initial={{ y: -15, opacity: 0.8 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0.8, transition: { duration: 0.2 } }}
          >
            {rooms.map((room) => (
              <ChannelRoom key={room} roomName={room} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ChannelRoom = ({ roomName }: { roomName: string }) => (
  <div className="channel-rooms-room group">
    <FaHashtag />
    <h3>{roomName}</h3>
    <IoPersonAdd className="ml-auto transition-all opacity-0 group-hover:opacity-100" />
  </div>
);
