import mongoose from "mongoose"

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    unique_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    main_category: {
        type: String,
        required: true,
    },
    sub_category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        required: true
    },
    no_of_ratings: {
        type: Number,
        required: true
    },
    discount_price: {
        type: String,
        required: true
    },
    actual_price: {
        type: String,
        required: true
    }
})

const Product = mongoose.model("product", ProductSchema)

export default Product