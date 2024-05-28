// const playList = {
//     playListInfo: {
//         playListId: "1",
//         title: "Hip-Hop hits",
//         coverImgUrl: "./hip_hop_hits.jpg",
//         totalInfo: {
//             totalTrackCount: 4,
//             totalTrackDurationInSec: 733
//         }
//     },
//     tracks: [
//         {
//             trackId: "10",
//             trackTitle: "Rap God",
//             artistName: "Eminem",
//             trackCoverImgUrl: "./rap-god.jpg",
//             trackFileUrl: "./Eminem_-_Rap_God.mp3",
//         },
//         {
//             trackId: "11",
//             trackTitle: "In da Club",
//             artistName: "50 cent",
//             trackCoverImgUrl: "./in Da Club.jpg",
//             trackFileUrl: "./50_Cent_-_In_Da_Club.mp3",
//         }
//     ]
// }


// функция для отрисовки плейлиста


import {renderPlaylist} from "./components/renderPlaylist/renderPlayList.module.js";
import {playList} from "./data/data.module.js";



// Перенесённые функции -----------------------------------------------------------------------------------------

// function renderPlaylist(anyPlaylistArray) {
//     // header
//     renderHeader(anyPlaylistArray.playListInfo)
//
//     // trackList
//     const trackListElement = document.createElement("ul");
//
//     for (let i = 0; i < anyPlaylistArray.tracks.length; i++) {
//         const trackElement = createTrack(anyPlaylistArray.tracks[i]);
//         trackListElement.append(trackElement)
//     }
//     document.body.append(trackListElement);
// }

// header
// function renderHeader(anyPlaylistInfo) {
//     // title
//     const playListTitleElement = document.createElement("h1")
//     playListTitleElement.append(anyPlaylistInfo.title)
//     document.body.append(playListTitleElement);
//
//     // image
//     const playlistImageElement = document.createElement("img");
//     playlistImageElement.src = (anyPlaylistInfo.coverImgUrl);
//     playlistImageElement.style.width = "200px"
//     playlistImageElement.style.height = "300"
//     document.body.append(playlistImageElement);
// }

// renderTrack
// function createTrack(anyTrack) {
//     const trackElement = document.createElement("li")
//     const trackCoverElement = document.createElement("img")
//     trackCoverElement.src = anyTrack.trackCoverImgUrl
//     trackCoverElement.style.width = "90px"
//     trackCoverElement.style.height = "90px"
//
//     const audio = document.createElement("audio")
//     audio.src = anyTrack.trackFileUrl
//     audio.controls = true
//
//     trackElement.append(trackCoverElement)
//     trackElement.append(anyTrack.artistName + ": " + anyTrack.trackTitle)
//     trackElement.append(audio)
//
//     return trackElement
// }

// ---------------------------------------------------------------------------------------------------------------

renderPlaylist(playList)












