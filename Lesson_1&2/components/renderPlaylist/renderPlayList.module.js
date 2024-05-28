import {renderHeader} from "../renderHeader/renderHeader.module.js";
import {createTrack} from "../createTrack/createTrack.module.js";

export function renderPlaylist(anyPlaylistArray) {
    // header
    renderHeader(anyPlaylistArray.playListInfo)

    // trackList
    const trackListElement = document.createElement("ul");

    for (let i = 0; i < anyPlaylistArray.tracks.length; i++) {
        const trackElement = createTrack(anyPlaylistArray.tracks[i]);
        trackListElement.append(trackElement)
    }
    document.body.append(trackListElement);
}