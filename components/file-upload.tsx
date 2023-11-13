"use client";

import { FileIcon, X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";

import "@uploadthing/react/styles.css";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const fileType = value?.split(".").pop();

  console.log(value);

  if (value && fileType !== "pdf") {
    return (
      <div className="relative w-20 h-20">
        <Image fill src={value} alt="Upload" className="rounded-full" />
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 absolute top-0 right-0 p-1 text-white rounded-full shadow-sm"
          type="button"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  if (value && fileType === "pdf") {
    return (
      <div className="bg-background/10 relative flex items-center p-2 mt-2 rounded-md">
        <FileIcon className="fill-indigo-200 stroke-indigo-400 w-10 h-10" />
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-indigo-400 hover:underline ml-2 text-sm text-indigo-500"
        >
          {value}
        </a>
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 -top-2 -right-2 absolute p-1 text-white rounded-full shadow-sm"
          type="button"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};
