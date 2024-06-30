import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
const data = [
  {
    name: "Adithya",
    phone: "9823234343",
    location: "Chennai",
    time: "2 hours ago",
  },
  {
    name: "Rahul",
    phone: "9845123456",
    location: "Bangalore",
    time: "3 hours ago",
  },
  {
    name: "Priya",
    phone: "9876543210",
    location: "Mumbai",
    time: "1 hour ago",
  },
  {
    name: "Sneha",
    phone: "9812345678",
    location: "Delhi",
    time: "4 hours ago",
  },
  {
    name: "Arjun",
    phone: "9832123456",
    location: "Hyderabad",
    time: "30 minutes ago",
  },
  {
    name: "Vikram",
    phone: "9823456789",
    location: "Kolkata",
    time: "5 hours ago",
  },
  { name: "Anita", phone: "9843567890", location: "Pune", time: "6 hours ago" },
  {
    name: "Karan",
    phone: "9812783456",
    location: "Jaipur",
    time: "7 hours ago",
  },
  {
    name: "Meera",
    phone: "9832145678",
    location: "Ahmedabad",
    time: "8 hours ago",
  },
  {
    name: "Deepak",
    phone: "9856734210",
    location: "Chandigarh",
    time: "9 hours ago",
  },
];
export default function Component() {
  return (
    <div className="flex flex-col w-full h-screen min-h-screen  bg-gray-100">
      <header className="flex items-center justify-between h-16 px-4 bg-green-600 text-white">
        <div className="text-lg font-semibold">My Customers</div>
        <div className="flex items-center space-x-2">
          <MailsIcon className="w-6 h-6" />
          <SettingsIcon className="w-6 h-6" />
        </div>
      </header>
      <main className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-bold flex items-center space-x-2">
            <UsersIcon className="w-6 h-6" />
            <span>525</span>
          </div>
          <div className="relative">
            <Input
              type="search"
              placeholder="Search by name"
              className="pl-8 pr-4 py-2 border rounded-full"
            />
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <Select>
            <SelectTrigger id="filter" className="text-muted-foreground">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="recent">Recent</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger id="sort" className="text-muted-foreground">
              <SelectValue placeholder="Recent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Recent</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-4">
          <ScrollArea className="h-[69vh]">
            {data.map((item, index) => (
              <Card
                key={index}
                className="flex mt-4 items-center p-4 space-x-4"
              >
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>
                    {item.name[0]}
                    {item.name[1]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-bold">{item.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.phone}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.location}
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center space-x-2">
                    <MessageCircleIcon className="w-6 h-6 text-muted-foreground" />
                    <PhoneCallIcon className="w-6 h-6 text-muted-foreground" />
                    <PhoneIcon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.time}
                  </div>
                </div>
              </Card>
            ))}{" "}
          </ScrollArea>
        </div>
      </main>
      <footer className="flex items-center justify-around h-16 bg-white border-t">
        <Button
          variant="ghost"
          className="flex flex-col items-center space-y-1"
        >
          <UsersIcon className="w-6 h-6" />
          <span className="text-xs">Customers</span>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-col items-center space-y-1"
        >
          <LayoutDashboardIcon className="w-6 h-6" />
          <span className="text-xs">Dashboard</span>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-col items-center space-y-1"
        >
          <BookAIcon className="w-6 h-6" />
          <span className="text-xs">Bookings</span>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-col items-center space-y-1"
        >
          <LogInIcon className="w-6 h-6" />
          <span className="text-xs">Account</span>
        </Button>
      </footer>
      <div className="absolute bottom-16 right-4">
        <Button className="bg-green-600 text-white rounded-full p-4">
          <ExpandIcon className="w-6 h-6" />
          <span className="ml-2">Add New Customer</span>
        </Button>
      </div>
    </div>
  );
}

function BookAIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      <path d="m8 13 4-7 4 7" />
      <path d="M9.1 11h5.7" />
    </svg>
  );
}

function ExpandIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
    </svg>
  );
}

function LayoutDashboardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

function LogInIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}

function MailsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="13" x="6" y="4" rx="2" />
      <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
      <path d="M2 8v11c0 1.1.9 2 2 2h14" />
    </svg>
  );
}

function MessageCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function PhoneCallIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.05 2a9 9 0 0 1 8 7.94" />
      <path d="M14.05 6A5 5 0 0 1 18 10" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
