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
import { LogOut, UserPen } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  const { user } = useSelector((store) => store.auth);

  const handleLogout = () => {};
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
              <Link to={"/"}>Home</Link>
              <li>
                <Link to={"/browse"}>Browse</Link>{" "}
              </li>
              <li>
                <Link to={"/jobs"}>Jobs</Link>
              </li>
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
                        <h2 className="text-md">Aamir khan</h2>
                        <p className="text-sm text-muted-foreground tracking-widest italic">
                          Best coder in the world!
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <Link to={"/profile"}>
                        <Button
                          variant="link"
                          className="cursor-pointer w-fit  text-gray-600"
                        >
                          <UserPen /> Profile
                        </Button>
                      </Link>

                      <>
                        <Link>
                          <Button
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
