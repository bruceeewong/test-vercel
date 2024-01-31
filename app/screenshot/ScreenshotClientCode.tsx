"use client";

import { Suspense, useCallback, useEffect } from "react";
import { debounce } from "next/dist/server/utils";
import { message } from "antd";
import DOMPurify from "dompurify";
import { useSearchParams } from "next/navigation"; // if displaying data

const ScreenshotCode = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const searchParams = useSearchParams();

  const getScreenshotName = () => {
    let screenshot = searchParams.get("screenshot") || "screenshot";
    const screenshotName = DOMPurify.sanitize(screenshot?.toString());
    return screenshotName;
  };

  async function captureScreen() {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        displaySurface: "browser",
      },
    });
    return mediaStream;
  }

  async function takeScreenshot() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
      messageApi.error("Your browser doesn't support screen capturing");
      return;
    }
    let mediaStream: MediaStream;
    try {
      mediaStream = await captureScreen();
      if (!mediaStream) {
        throw new Error("No media stream");
      }
    } catch (e: any) {
      messageApi.error(`Failed to capture screen: ${e?.message}`);
      console.error(e);
      return;
    }

    const video = document.createElement("video");
    video.srcObject = mediaStream;
    video.play();

    // Wait for the video to be loaded
    await new Promise((resolve) => (video.onloadedmetadata = resolve));

    // Set canvas size to video frame size
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw video frame to canvas
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      messageApi.error("Failed to capture screen: no canvas context");
      return;
    }
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Stop all video tracks to release the captured screen
    mediaStream.getTracks().forEach((track) => track.stop());

    // Create an image from the canvas
    const image = canvas.toDataURL("image/png");

    // Optional: Create a link to download the image
    const link = document.createElement("a");
    link.href = image;
    link.download = `${getScreenshotName()}.png`;
    link.click();

    window.close();
  }

  const handleScreenshot = useCallback(
    debounce(() => {
      takeScreenshot();
    }, 1000),
    [],
  );

  useEffect(() => {
    handleScreenshot();
  }, []);

  return <>{contextHolder}</>;
};

export default function ScreenshotClientCode() {
  return (
    <Suspense fallback={null}>
      <ScreenshotCode />
    </Suspense>
  );
}
