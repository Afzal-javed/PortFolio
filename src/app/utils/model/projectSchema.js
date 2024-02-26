const { default: mongoose } = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    srcLink: {
        type: String,
        required: true
    },
    liveUrl: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const Projects = mongoose.models.Projects || mongoose.model("Projects", projectSchema)