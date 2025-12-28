import { connect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";


export async function GET(request) {
    const feedbackCollection = connect("next_collection");
    const result = await feedbackCollection.find().toArray();
    return Response.json(result)
}


export async function POST(request) {
    const { message } = await request.json();
    if (!message || typeof message !== 'string') {
        return Response.json({
            status: 400,
            message: "Please send a message"
        })
    }

    const newFeedback = { message, data: new Date().toISOString() };
    console.log(newFeedback);

    const feedbackCollection = connect("next_collection");
    const result = await feedbackCollection.insertOne(newFeedback);
    revalidatePath("/feedback");
    return Response.json(result);
}
