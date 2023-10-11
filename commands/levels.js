import discordjs from "discord.js"

import { createCanvas } from "canvas"

//interaction = intac
/**
 * @param {import("discord.js").Interaction} intac
 */
export default (intac) => {
    intac.reply({ content: "Test!", files: [{ attachment: render() }] })
}

const render = (stats) => {
    const canvas = createCanvas(200, 80)
    const ctx = canvas.getContext("2d")

    ctx.fillText("Test", 10, 10)

    return canvas.toBuffer()
}