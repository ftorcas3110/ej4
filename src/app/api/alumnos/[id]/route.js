import getAlumnos from "@/lib/alumnos";

export function GET(request, { params }) {
    let alumnos = getAlumnos();
    let alumno = alumnos.find(alumno => alumno.id == params.id)

    return Response.json(alumno)
}

export async function PUT(request, { params }) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    let alumnos = getAlumnos();
    const pos = alumnos.findIndex(alumnos => alumnos.id == params.id)

    const netAlumno = await request.json()
    alumnos.splice(pos, 1, { id: Number(params.id), ...netAlumno })

    return Response.json(alumnos)
}


export function DELETE(request, { params }) {
    let alumnos = getAlumnos();
    const pos = alumnos.findIndex(alumno => alumno.id == Number(params.id))

    if (pos != -1)  
        alumnos.splice(pos, 1)

    return Response.json(alumnos)
}