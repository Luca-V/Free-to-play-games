import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request, context) {
    const { id } = context.params

    const data = await axios.get(`https://www.freetogame.com/api/game?id=${id}`);

    return NextResponse.json(data.data);
}