import {defineSchema, defineTable} from "convex/server";
import {v} from "convex/values";

export default defineSchema({
    podcasts:defineTable({
        audioStorageId:v.optional(v.id('_storage')),
        user:v.id('users'),

    }),
    users:defineTable({
        email:v.string(),
        imageUrl:v.string(),
        clerkId:v.string(),
        name:v.string(),
        
    })
})