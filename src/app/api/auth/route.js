import DB from "@/app/utils/DB";
import { User } from "@/app/utils/model/userSchema";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req, res) => {
    const body = await req.json();
    const { firstName, lastName, email, password } = body
    try {
        await DB();
        const isAlreadyExist = await User.findOne({ email })
        if (isAlreadyExist) {
            return NextResponse.json({ msg: "Email already exist" }, { status: 400 })
            // res.status(400).send("Email already exists");
        } else {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(password, salt)
            const newUser = new User({
                firstName,
                lastName,
                email,
                password: hashed
            })
            newUser.save();
            return NextResponse.json({ msg: "user register successfully" }, { status: 200 })
        }
    } catch (error) {
        // res.status(500).send("Internal server error")
        return NextResponse.json({ msg: "Internal Server error" }, { status: 500 })
    }
}