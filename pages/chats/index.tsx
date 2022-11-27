import type { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <div className="grid grid-cols-chats gap-4">
      <div className="border border-black">
        <div>Channels</div>
        <div>
          <div># General</div>
          <div># Weapons</div>
          <div># Combat</div>
        </div>
      </div>
      <div className="border border-black">
        <div>Messages</div>
      </div>
      <div className="border border-black">Members</div>
    </div>
  );
};

export default Chats;
