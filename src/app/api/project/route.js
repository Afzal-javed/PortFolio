import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Projects } from "@/app/utils/model/projectSchema";
import DB from "@/app/utils/DB";

export const GET = async (req, res) => {
    try {
        await DB();
        const project = await Projects.find();
        return NextResponse.json({ project }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ msg: "Internal Server error" }, { statue: 500 })
    }
}
export const POST = async (req, res) => {
    const body = await req.json();
    const { title, desc, image, srcLink, liveUrl } = body;
    // const imgBuffer = Buffer.from(image, 'base64');
    // console.log(imgBuffer);
    try {
        await DB();
        if (!title || !desc || !image || !srcLink || !liveUrl) {
            return NextResponse.json({ msg: "Please send the all Data" }, { status: 401 });
        } else {
            const isAlreadyExist = await Projects.findOne({ liveUrl });
            if (isAlreadyExist) {
                return NextResponse.json({ msg: "Project Already Exist" }, {
                    status: 400,
                });
            } else {
                const newProject = new Projects({
                    title,
                    desc,
                    image,
                    srcLink,
                    liveUrl,
                })
                await newProject.save();
                return NextResponse.json({ msg: "Project Uploaded Successfully" }, { status: 200 });
            }
        }
    } catch (error) {
        return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
    }
}