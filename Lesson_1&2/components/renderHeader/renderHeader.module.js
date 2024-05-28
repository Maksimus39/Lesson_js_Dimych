export function renderHeader(anyPlaylistInfo) {
    // title
    const playListTitleElement = document.createElement("h1")
    playListTitleElement.append(anyPlaylistInfo.title)
    document.body.append(playListTitleElement);

    // image
    const playlistImageElement = document.createElement("img");
    playlistImageElement.src = (anyPlaylistInfo.coverImgUrl);
    playlistImageElement.style.width = "200px"
    playlistImageElement.style.height = "300"
    document.body.append(playlistImageElement);
}