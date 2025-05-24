import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            default: "NOT GIVEN"
        },
        isBlocked: {
            type: Boolean,
            default: false
        },
        role: {
            type: String,
            default: "user",
        }, 
        isEmailVerified: {
            type: Boolean,
            default: false
        },
        image: {
            type: String,
            default: "https://img.freepik.com/vecteurs-libre/cercle-bleu-utilisateur-blanc_78370-4707.jpg?t=st=1748070759~exp=1748074359~hmac=184d2ecbd330372ba4ebb4d7cbde6ea070b07a0c1be240e64a62833c8fcbcac6&w=1380"
        }
    }
);

const User = mongoose.model("users", userSchema)

export default User