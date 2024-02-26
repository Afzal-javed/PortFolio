
import DB from "@/app/utils/DB";
import { User } from "@/app/utils/model/userSchema";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req, res) => {
    const body = await req.json();
    const { email, password } = body;
    try {
        await DB();
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ msg: "User does not exist" }, { status: 404 })
        } else {
            const isMatchPassword = await bcrypt.compare(password, user.password)
            if (!isMatchPassword) {
                return NextResponse.json({ msg: "Invalid Credential" }, { status: 401 })
            } else {
                const payload = {
                    id: user._id,
                    email: user.email
                }
                const JWT = process.env.NEXT_PUBLIC_JWT
                jwt.sign(payload, JWT, { expiresIn: 84600 }, async (err, token) => {
                    if (err) {
                        console.error('Error generating JWT:', err);
                    } else {
                        await User.updateOne({ _id: user.id }, { $set: { token } });
                        user.token = token;
                        await user.save();
                    }
                });
                return NextResponse.json({ user: user }, { status: 200 });
            }
        }
    } catch (error) {
        console.error('Internal Server Error:', error);
        return NextResponse.json({ msg: "Internal server error" }, { status: 500 })
    }
}