import mongoose from "mongoose"

const cartCollection = 'cart'

const cartSchema = new mongoose.Schema({
    products:{
        type: [
            {
                product:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref: "productos"
                }
            }
        ],
        default:[]
    }
})
const cartModel = mongoose.model(cartCollection, cartSchema)

export default cartModel