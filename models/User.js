const {Schema, model} = require("mongoose");

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email:{
            type: String,
            unique: true,
            required: true,
            match: [
                /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,
                "Invalid Email, please try again",    
            ],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            },
        ],
        friends: [
            {
            type: Schema.Types.ObjectId,
            ref: "User",
            },        
        ],    
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// get count of friends

userSchema.virtual("countfriends").get(function () {
    return this.friends.length;
});

// create model from schema

const User = model("User", userSchema);

module.exports = User;