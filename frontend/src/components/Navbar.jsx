import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { CircleCheckBigIcon, LogOut, UserPen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/authSlice";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/constant";
import { toast } from "sonner";
const Navbar = () => {
  const { user } = useSelector((store) => store.auth);

  const naviagte = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${USER_API_ENDPOINT}/logout`,
        {},
        {
          withCredentials: true,
        },
      );
      if (res.data.success) {
        toast.success(res.data.message);
        naviagte("/");
        dispatch(setUser(null));
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto h-16 ">
          <div>
            <Link to={"/"}>
              <h1 className="text-2xl font-bold cursor-pointer ">
                Job<span className="text-red-500">Portal</span>
              </h1>
            </Link>
          </div>
          <div>
            <ul className="flex items-center gap-5 h-full ">
              {user && user?.role === "recruiter" ? (
                <>
                  <Link to={"/"}>Company</Link>
                  <li>
                    <Link to={"/browse"}>Jobs</Link>{" "}
                  </li>
                </>
              ) : (
                <>
                  <Link to={"/"}>Home</Link>
                  <li>
                    <Link to={"/browse"}>Browse</Link>{" "}
                  </li>
                  <li>
                    <Link to={"/jobs"}>Jobs</Link>
                  </li>
                </>
              )}

              {user?.role === "student" ? (
                <Link to={"/profile/applied-jobs"}>
                  <Button
                    variant="outline"
                    className="hover:cursor-pointer bg-green-600 hover:bg-green-500 tracking-wider"
                  >
                    <CircleCheckBigIcon className="text-white font-bold"></CircleCheckBigIcon>{" "}
                    Applied Jobs
                  </Button>
                </Link>
              ) : null}
              {!user ? (
                <div className="flex items-center  gap-4">
                  <Link to={"/login"}>
                    <Button
                      variant="ghost"
                      className="cursor-pointer text-md font-semibold bg-violet-700 hover:bg-violet-800 "
                    >
                      {" "}
                      Login
                    </Button>
                  </Link>
                  <Link to={"/signup"}>
                    <Button
                      variant="ghost"
                      className="cursor-pointer text-md font-semibold bg-green-500 hover:bg-green-600"
                    >
                      Signup
                    </Button>
                  </Link>
                </div>
              ) : (
                <Popover>
                  <PopoverTrigger render={<Button variant="outline" />}>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 ">
                    <div className="flex gap-4 space-y-2">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                      </Avatar>
                      <div>
                        <h2 className="text-md tracking-wide text-gray-700 font-semibold">
                          {user.fullname.toUpperCase()}
                        </h2>
                        <p className="text-sm text-muted-foreground tracking-widest italic">
                          {user.profile?.bio}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 ">
                      {user?.role === "student" && (
                        <Link to={"/profile"}>
                          <Button
                            variant="link"
                            className="cursor-pointer w-fit  text-gray-600"
                          >
                            <UserPen /> Profile
                          </Button>
                        </Link>
                      )}

                      <>
                        <Link>
                          <Button
                            onClick={handleLogout}
                            variant="link"
                            className="cursor-pointer w-fit text-gray-600"
                          >
                            <LogOut></LogOut> Logout
                          </Button>
                        </Link>
                      </>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
