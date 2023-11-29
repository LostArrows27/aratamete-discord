"use client";
import {
  ControlBar,
  WidgetState,
  useParticipants,
  LayoutContextProvider,
  ParticipantLoop,
  ParticipantAudioTile,
  Chat,
  ChatToggle,
  ChatEntry,
  useChatToggle,
} from "@livekit/components-react";
import "@livekit/components-styles";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const AudioUI = () => {
  const [widgetState, setWidgetState] = useState<WidgetState>({
    showChat: false,
    unreadMessages: 0,
  });
  const participants = useParticipants();
  // const chat = useChatToggle()
  return (
    <LayoutContextProvider onWidgetChange={setWidgetState}>
      <div className="lk-audio-conference">
        <div className="lk-audio-conference-stage">
          <ParticipantLoop participants={participants}>
            <ParticipantAudioTile />
          </ParticipantLoop>
        </div>
        <ControlBar
          controls={{
            microphone: true,
            screenShare: false,
            camera: false,
            chat: true,
          }}
        />
        {widgetState.showChat && <Chat />}
        {/* <Sheet
          open={widgetState.showChat}
          onOpenChange={() => {
            setWidgetState((prev) => ({ ...prev, showChat: !prev.showChat }));
          }}
        >
          <SheetContent side={"right"} className="flex gap-0 p-0 remove-button">
      
            <Chat />
          </SheetContent>
        </Sheet> */}
      </div>
    </LayoutContextProvider>
  );
};
