"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { useState } from "react";
import axios from "axios";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const LeaveServerModal = () => {
  const { isOpen, onClose, type, data, onOpen } = useModal();

  const [loading, setLoading] = useState(false);

  const { server } = data;

  const router = useRouter();

  const isModalOpen = isOpen && type === "leaveServer";

  const leaveServer = async () => {
    try {
      setLoading(true);
      await axios.patch(`/api/servers/${server?.id}/leave`);
      onClose();
      router.refresh();
      router.push("/");
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
            Leave Server
          </DialogTitle>
          <DialogDescription className="text-zinc-500 text-center">
            Are you sure you want to leave{" "}
            <span className=" font-semibold text-indigo-500">
              {server?.name}?
            </span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="px-6 py-4 bg-gray-100">
          <div className="flex items-center justify-between w-full">
            <Button
              disabled={loading}
              variant={"ghost"}
              onClick={() => {
                onClose();
              }}
            >
              Cancel
            </Button>
            <Button
              disabled={loading}
              variant={"primary"}
              onClick={leaveServer}
            >
              Confirm
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
