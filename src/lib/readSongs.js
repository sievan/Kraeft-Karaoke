import { marked } from "marked"

const songs = ["roda-havet", "gosta"]

export function readSongs() {
  songs.map(name => {
    const songmd = require(`./songs/${name}.md`)
    console.log(marked.parse(songmd))
  })
}
