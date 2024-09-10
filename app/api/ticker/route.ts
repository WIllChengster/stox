import { NextRequest, NextResponse} from 'next/server'

export async function GET(req: NextRequest) {
  
  const ticker = req.nextUrl.searchParams.get('ticker')
  const dataRaw = await fetch(`https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${process.env.polygonKey}`)
  
  const data = await dataRaw.json()
  console.log(data);
  
  return NextResponse.json(data)
}