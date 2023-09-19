"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import YoutubePlayer from "@/components/YoutubePlayer";

export default function Home() {
  const [videoId, setVideoId] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Label htmlFor="videoId">Video ID</Label>
      <Input
        value={videoId}
        onChange={(e) => setVideoId(e.target.value)}
        id="videoId"
      />
      <div className="aspect-video w-full">
        {videoId ? (
          <YoutubePlayer videoId={videoId} className="h-full" />
        ) : (
          <Alert>
            <AlertDescription>Add a video id to get started</AlertDescription>
          </Alert>
        )}
      </div>
    </main>
  );
}
