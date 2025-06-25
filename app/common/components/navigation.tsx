import { Link } from "react-router";
import { Separator } from "~/common/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BarChart3Icon, BellIcon, LogOutIcon, MessageCircleIcon, SettingsIcon, UserIcon } from "lucide-react";

const menus = [
  {
    name: "모임현황",
    to: "/gathering",
    items: [
      {
        name: "정기모임",
        description: "월간 정기 모임 리스트",
        to: "/gathering/regular",
      },

      {
        name: "주제별 모임",
        description: "도서 주제별 모임 리스트",
        to: "/gathering/special",
      },
      {
        name: "즉흥모임",
        description: "당일 즉흥 모임 리스트",
        to: "/gathering/impromptu",
      },
    ],
  },
  {
    name: "도서정보",
    to: "/books",
    items: [
      {
        name: "도서정보",
        description: "월간 정기 모임 리스트",
        to: "/book-info/books",
      },

      {
        name: "작가정보",
        description: "도서 주제별 모임 리스트",
        to: "/book-info/author",
      },
      {
        name: "출판사정보",
        description: "당일 즉흥 모임 리스트",
        to: "/book-info/publisher",
      },
    ],
  },
  {
    name: "커뮤니티",
    to: "/community",
    items: [
      {
        name: "철학",
        description: "철학 주제 커뮤니티",
        to: "/community/philosophy",
      },

      {
        name: "소설",
        description: "국내 소설 거뮤니티",
        to: "/community/novel",
      },
      {
        name: "에세이",
        description: "국내 에세이 커뮤니티",
        to: "/community/essay",
      },
    ],
  },
];

export default function Navigation({
  isLoggedIn,
  hasNotifications,
  hasMessages,
}: {
  isLoggedIn: boolean;
  hasNotifications: boolean;
  hasMessages: boolean;
}) {
  return (
    <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
      <div className="flex items-center">
        <Link to="/" className="font-bold tracking-tighter text-lg">
          Dreampartners
        </Link>
        <Separator orientation="vertical" className="h-6 mx-4" />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                {menu.items ? (
                  <>
                    <Link to={menu.to}>
                      <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                      <ul className="grid w-[600px] font-light gap-3 p-4 grid-cols-2">
                        {menu.items?.map((item) => (
                          <NavigationMenuItem
                            key={item.name}
                            className={cn([
                              "select-none rounded-md transition-colors focus:bg-accent  hover:bg-accent",
                              (item.to === "/products/promote" || item.to === "/jobs/submit") &&
                                "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                            ])}
                          >
                            <NavigationMenuLink>
                              <Link className="p-3 space-y-1 block leading-none no-underline outline-none" to={item.to}>
                                <span className="text-sm font-medium leading-none">{item.name}</span>
                                <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>
                              </Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link className={navigationMenuTriggerStyle()} to={menu.to}>
                    {menu.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {isLoggedIn ? (
        <div className="flex items-center gap-4">
          <Button size="icon" variant="ghost" asChild className="relative">
            <Link to="/my/notifications">
              <BellIcon className="size-4" />
              {hasNotifications && <div className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full" />}
            </Link>
          </Button>
          <Button size="icon" variant="ghost" asChild className="relative">
            <Link to="/my/messages">
              <MessageCircleIcon className="size-4" />
              {hasMessages && <div className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full" />}
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/gavrakr.png" />
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="flex flex-col">
                <span className="font-medium">John Doe</span>
                <span className="text-xs text-muted-foreground">@username</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/dashboard">
                    <BarChart3Icon className="size-4 mr-2" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/profile">
                    <UserIcon className="size-4 mr-2" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/settings">
                    <SettingsIcon className="size-4 mr-2" />
                    Settings
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link to="/auth/logout">
                  <LogOutIcon className="size-4 mr-2" />
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button asChild variant="secondary">
            <Link to="/auth/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/auth/join">Join</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
