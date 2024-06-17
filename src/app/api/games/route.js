import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    const data = await axios.get('https://www.freetogame.com/api/games');

    return NextResponse.json(data.data);
}