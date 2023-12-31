import getAlumnos from "@/lib/alumnos";

export function GET() {
    let alumnos = getAlumnos();
    return Response.json(alumnos)
}


export async function POST(request) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    let alumnos = getAlumnos();
    let sig = Math.max(...alumnos.map(u => u.id)) + 1

    const newProducto = await request.json()
    alumnos.push({ id: sig, ...newProducto })
    return Response.json(alumnos)
}