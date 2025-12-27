export const feedback = [
    {
        id: 1,
        message: "food is very good"
    },
    {
        id: 2,
        message: "water behavier is very good"
    }
]



export async function GET(request) {
    return Response.json({
        status : 200,
        message: "Yahoo. API created"
    })
}