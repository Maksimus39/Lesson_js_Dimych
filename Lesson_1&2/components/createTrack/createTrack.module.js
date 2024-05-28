export function createTrack(anyTrack) {
    const trackElement = document.createElement("li")
    const trackCoverElement = document.createElement("img")
    trackCoverElement.src = anyTrack.trackCoverImgUrl
    trackCoverElement.style.width = "90px"
    trackCoverElement.style.height = "90px"

    const audio = document.createElement("audio")
    audio.src = anyTrack.trackFileUrl
    audio.controls = true

    trackElement.append(trackCoverElement)
    trackElement.append(anyTrack.artistName + ": " + anyTrack.trackTitle)
    trackElement.append(audio)

    return trackElement
}