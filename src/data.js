import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const navigationList = [
  {
    text: "Youtube Downloader",
    url: "/",
    description:
      "A simple example of linking to another page within a Gatsby site"
  },
  {
    text: "Youtube to MP3",
    url: "/youtube-to-mp3",
    description:
      "A simple example of linking to another page within a Gatsby site"
  },
  {
    text: "Youtube to MP4",
    url: "/youtube-to-mp4",
    description:
      "A simple example of linking to another page within a Gatsby site"
  }
]

export const bestDescription = [
  { description: "YT1s YouTube Downloader helps you save Youtube videos to your device. You can choose from a variety of formats and qualities to download." },
  { description: "YT1s.com is a utility website for downloading user-uploaded videos from YouTube. First published in 2020, it has a vast, diverse, worldwide community of users. It is used by journalists and human rights organizations to save eyewitness videos, by educators to save videos for classroom use, by YouTubers to save backup copies of their own uploaded videos, and by users worldwide to watch videos on hardware that can’t run a standard web browser, or to watch videos in their full resolution over slow or unreliable Internet connections. YT1s.com stands in place of a Web browser and performs a similar function with respect to user-uploaded videos. Importantly, YT1s.com does not decrypt video streams that are encrypted with commercial DRM technologies, that are used by subscription video sites." }
]

export const links = [
  {
    text: "Fast and easy to use",
    url: (<StaticImage src="./images/clock.svg" loading="eager" alt="clock" width={200} quality={100}/>),
    style: { background: "#d2e3fc" },
    description:
      "Using our Youtube downloader is the fast and easy way to download and save any YouTube video to MP3 or MP4. Simply copy YouTube URL, paste it on the search box and click on \"Convert\" button. No register accounts needed."
  },
  {
    text: "Without limitation",
    url: (<StaticImage src="./images/limit.svg" loading="eager" alt="limit" width={200} quality={100}/>),
    style: { background: "#fad2cf" },
    description:
      "Download and convert YouTube videos as much as you want without limitation and always free."
  },
  {
    text: "100% Safe and Clean",
    url: (<StaticImage src="./images/safe.svg" loading="eager" alt="safe" width={200} quality={100}/>),
    style: { background: "#ceead6" },
    description:
      "With the rising awareness of device security, people attach great importance to personal data. The service is totally clean with no virus under intense supervision based on security database."
  },
  {
    text: "Full platforms supported",
    url: (<StaticImage src="./images/platform.svg" loading="eager" alt="platform" width={200} quality={100}/>),
    style: { background: "#feefc3" },
    description:
      "We support all device platforms. Easy to convert YouTube videos to MP3 files regardless of whether you are using Windows, Mac or Linux, Android, iPhone."
  },
  {
    text: "Full file format supported",
    url: (<StaticImage src="./images/support.svg" loading="eager" alt="support" width={200} quality={100}/>),
    style: { background: "#ffd5ec" },
    description:
      "We support all video and audio formats conversion. You can easily convert YouTube videos to MP3, 3GP, MP4, WMA, M4A, FLV, WEBM and MO formats, etc."
  },
  {
    text: "Cloud support",
    url: (<StaticImage src="./images/cloud.svg" loading="eager" alt="cloud" width={200} quality={100}/>),
    style: { background: "#d1f4ff" },
    description:
      "We support uploading the converted files to your DropBox and Google Drive."
  }
]

export const typeIcon = [
  { url: (<StaticImage src="./images/icon1.svg" loading="eager" alt="icon1" quality={100}/>) },
  { url: (<StaticImage src="./images/icon2.svg" loading="eager" alt="icon2" quality={100}/>) },
  { url: (<StaticImage src="./images/icon3.svg" loading="eager" alt="icon3" quality={100}/>) },
  { url: (<StaticImage src="./images/icon4.svg" loading="eager" alt="icon4" quality={100}/>) },
  { url: (<StaticImage src="./images/icon5.svg" loading="eager" alt="icon5" quality={100}/>) }
]

export const typeDesc = "Download Youtube videos with YT1s YouTube Downloader. By using our downloader you can easily convert YouTube videos to MP3, MP4, 3GP, WEBM, M4A files... and download them for free - this service works for computers, tablets and mobile devices. The videos are always converted in the highest available quality."

export const stepCount = [
  {
    number: 1,
    description: "Paste YouTube url or enter keywords into the search box.",
    style: { background: "#d2e3fc", color: "#4285f4" }
  },
  {
    number: 2,
    description: "Choose output MP4 or MP3 format you want to convert and click Download button.",
    style: { background: "#fad2cf", color: "#ed6357" }
  },
  {
    number: 3,
    description: "Wait until the conversion is completed and download the file. Very easy and fast.",
    style: { background: "#ceead6", color: "#34a853" }
  }
]

export const queAns = [
  {
    que: "What is the fastest way to download Youtube videos?",
    ans: [{ ans: "Access the Youtube URL you need to download." },
      { ans: "Add \"pp\" after the word \"youtube\" then click \"Enter\". For example: youtube.com/watch?v=1PJIqpLInrw => youtubePP.com/watch?v=1PJIqpLInrw." },
      { ans: "Select the file format you wish then click to \"Download\" button." }]
  },
  {
    que: "Is there any limit on the amount of downloaded files applied for users?",
    ans: [{ ans: "No. Our website allows users to convert and download unlimited amount of file and for free." }]
  },
  {
    que: "What are the supported video/audio formats?",
    ans: [{ ans: "We offer a ton of conversion options and allow you to download MP4, 3GP, MP3 format. You can watch video right after that on your device without installing any other software." }]
  },
  {
    que: "What are the compatible devices for the conversion?",
    ans: [{ ans: "We offer the service that is compatible with all PC devices, smart phones and tablets." }]
  },
  {
    que: "How to download Youtube video to Android mobile phone?",
    ans: [{ ans: "Access Youtube from your browser or open Youtube app on your Android device; after that, coppy the video URL you wish to download." },
      { ans: "Paste the URL into the search box. You also can enter keyword to look for the video you wish." },
      { ans: "Select the format you wish to download then tap \"Download\". After a few seconds, you can download the file." }]
  },
  {
    que: "Where do the downloaded files get saved?",
    ans: [{ ans: "Files you've downloaded are automatically saved in the Downloads folder or the \"download history\" section on your device." }]
  },
];

export const footerList = [
  {
    text: "Contact us",
    url: "/",
  },
  {
    text: "Privacy Policy",
    url: "/",
  },
  {
    text: "Terms of service",
    url: "/",
  }
]