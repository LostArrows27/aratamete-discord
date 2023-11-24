"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { useParams, useRouter } from "next/navigation";

interface ServerSearchProps {
  data: {
    label: string;
    type: "channel" | "member";
    data:
      | {
          icon: React.ReactNode;
          name: string;
          id: string;
        }[]
      | undefined;
  }[];
}

const ServerSearch = ({ data }: ServerSearchProps) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const params = useParams();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);

    return () => {
      document.removeEventListener("keydown", down);
    };
  }, []);

  const onClick = ({
    id,
    type,
  }: {
    id: string;
    type: "channel" | "member";
  }) => {
    setOpen(false);

    if (type === "channel") {
      router.push(`/servers/${params?.serverId}/conversations/${id}`);
    }

    if (type === "member") {
      router.push(`/servers/${params?.serverId}/channels/${id}`);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="group gap-x-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 flex items-center w-full px-2 py-2 transition rounded-md"
      >
        <Search className="text-zinc-500 dark:text-zinc-400 w-4 h-4 mr-2" />
        <p className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 text-sm font-semibold transition">
          Search
        </p>
        <kbd className="px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto bg-muted inline-flex items-center h-5 gap-1 border rounded pointer-events-none select-none">
          <span className="text-xs">CTRL</span> K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search all channels and members" />
        <CommandList>
          <CommandEmpty>No Results Found</CommandEmpty>
          {data.map(({ label, type, data }) => {
            if (!data?.length) return null;
            return (
              <CommandGroup key={label} heading={label}>
                {data?.map(({ icon, name, id }) => {
                  return (
                    <CommandItem
                      onSelect={() => {
                        onClick({ id, type });
                      }}
                      key={id}
                    >
                      {icon} <span>{name}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            );
          })}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default ServerSearch;
