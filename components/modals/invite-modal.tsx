"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check, Copy, RefreshCw, SettingsIcon } from "lucide-react";
import { useOrigin } from "@/hooks/use-origin";
import { useState } from "react";
import axios from "axios";
import { cn } from "@/lib/utils";

export const InviteModal = () => {
  const { isOpen, onClose, type, data, onOpen } = useModal();

  const origin = useOrigin();

  const [copied, setCopied] = useState(false);

  const [loading, setLoading] = useState(false);

  const { server } = data;

  const inviteUrl = `${origin}/invite/${server?.inviteCode}`;

  const isModalOpen = isOpen && type === "invite";

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const onNew = async () => {
    try {
      setLoading(true);

      const response = await axios.patch(
        `/api/servers/${server?.id}/invite-code`
      );

      onOpen("invite", { server: response.data });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 overflow-hidden text-black bg-white">
        <DialogHeader className="px-6 pt-8">
          <DialogTitle className="text-2xl font-bold text-center">
            Invite Friends
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <Label className="text-zinc-50 dark:text-secondary/70 text-xs font-bold uppercase">
            Server Invite Link
          </Label>
          <div className="gap-x-2 flex items-center mt-2">
            <Input
              disabled={loading}
              className="bg-zinc-300/50 focus-visible:ring-0 focus-visible:ring-offset-0 text-black border-0"
              value={inviteUrl}
            />
            <Button onClick={onCopy}>
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>
          <Button
            onClick={onNew}
            disabled={loading}
            variant={"link"}
            size={"sm"}
            className=" text-zinc-500 mt-4 text-xs"
          >
            Generate a new link
            <RefreshCw
              className={cn("w-4 h-4 ml-2", loading && "animate-spin")}
            />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
