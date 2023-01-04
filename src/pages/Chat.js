import React from "react";
import Footer from "../component/Footer";
import NavCust from "../component/NavCust";
import { Search } from "react-feather";
import http from "../helpers/http";
import { useSelector } from "react-redux";

const Message = ({ adminList, selectChat }) => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const [chat, setChat] = React.useState([]);
  console.log(chat);
  React.useEffect(() => {
    const getChat = async () => {
      try {
        const response = await http(token).get("/chats/user");
        setChat(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getChat();
  }, [selectChat, token]);
  return (
    <div className="pb-10 lg:basis-3/5 relative">
      <h1 className="text-3xl font-bold text-[#4F5665] bg-white rounded-box py-5 px-11 mb-10">
        {adminList?.map((admin) => {
          return admin.id === selectChat ? admin.firstName : <></>;
        })}
      </h1>
      <div className="overflow-y-auto lg:h-[80%] min-h-[400px] lg:pr-2">
        {chat?.map((item) => {
          return item.fromUserId !== selectChat ? (
            <div className="flex flex-row-reverse bg-white rounded-box p-5 mb-3">
              <div className="ml-3">
                {user?.picture ? (
                  <img
                    src={user.picture}
                    alt="user1"
                    className="w-[70px] h-[70px] rounded-full mx-auto object-cover"
                  />
                ) : (
                  <img
                    src={require("../assets/images/user-testi-1.png")}
                    alt="user1"
                    className="w-[70px] h-[70px] rounded-full mx-auto object-cover"
                  />
                )}
              </div>
              <div className="flex flex-col text-end">
                <h3 className="font-bold">{user?.firstName}</h3>
                <p className="text-sm">{item.message}</p>
              </div>
              <p className="text-sm text-gray-400 grow">{item.createdAt} PM</p>
            </div>
          ) : (
            <div className="flex bg-white rounded-box p-5 mb-3">
              <div className="mr-3">
                <img
                  src={require("../assets/images/user-testi-1.png")}
                  alt="user1"
                />
              </div>
              <div className="flex flex-col grow">
                <h3 className="font-bold">Joson</h3>
                <p className="text-sm">
                  Hey, I’m Jason, Let’s talk and share what’s on your thoughts!
                </p>
              </div>
              <p className="text-sm text-gray-400">02.14 PM</p>
            </div>
          );
        })}
      </div>
      <form className="absolute bottom-0 w-full flex">
        <input type="text" className="w-full py-3 rounded-box px-3" />
        <button className="btn btn-accent ml-2" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

const Chat = () => {
  const [adminList, setAdminList] = React.useState([]);
  const { token } = useSelector((state) => state.auth);
  const [selectChat, setSelectChat] = React.useState(null);

  React.useEffect(() => {
    const getAdmin = async () => {
      try {
        const response = await http(token).get("/chats/admin");
        setAdminList(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getAdmin();
  }, [token]);

  return (
    <>
      <NavCust />
      <main className="relative">
        <img
          className="absolute z-[-1] w-[100%] h-[100%]"
          src={require("../assets/images/bg-chat.png")}
          alt=""
        />
        <div className="px-[5%] md:px-[10%] lg:px-[10%] pt-[5%] pb-[10%] md:pb-[10%] lg:py-[5%]">
          <section className="flex flex-col lg:flex-row gap-5">
            <div className="bg-[#6A4029] rounded-box text-white py-10 px-8 lg:basis-2/5">
              <div className="flex items-center relative justify-center">
                <Search className="absolute left-4 text-black" />
                <input
                  type="text"
                  placeholder="Search Chat"
                  className="input w-full rounded-full pl-12 bg-[#EFEEEE] text-black"
                />
              </div>
              <p className="text-center my-5">
                Choose a staff you want to talk with
              </p>
              <div className="flex flex-col gap-3">
                {adminList?.map((admin) => (
                  <div
                    className="flex items-start border-b border-white pb-3 cursor-pointer hover:bg-[#4F5665]"
                    key={admin.id}
                    onClick={() => setSelectChat(admin.id)}
                  >
                    <div className="w-20 basis-1/5">
                      {admin.picture ? (
                        <img
                          src={admin.picture}
                          alt="user1"
                          className="w-[70px] h-[70px] rounded-full mx-auto object-cover"
                        />
                      ) : (
                        <img
                          src={require("../assets/images/user-testi-1.png")}
                          alt="user1"
                          className="w-[70px] h-[70px] rounded-full mx-auto object-cover"
                        />
                      )}
                    </div>
                    <div className="flex flex-col basis-4/5">
                      <h3 className="font-bold">{admin?.firstName}</h3>
                      <p className="text-sm">
                        Hey, I’m {admin?.firstName}, can I help you? Just chat
                        me if you have some trouble in ordering, happy shopping!
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {selectChat === null ? (
              <div className="bg-white rounded-b-lg lg:rounded-lg p-5 pb-10 lg:basis-3/5">
                <h1 className="text-3xl font-bold text-[#4F5665]">Room Chat</h1>
                <div className="flex justify-center items-center lg:h-[70%] text-center">
                  <p className="text-gray-500 w-[80%]">
                    You have no conversation, start chat other staff! Have a
                    good day!
                  </p>
                </div>
              </div>
            ) : (
              <Message adminList={adminList} selectChat={selectChat} />
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Chat;
