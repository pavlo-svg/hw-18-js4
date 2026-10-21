export async function deleteStudents(id) {

    try {
        const res = await fetch(`http://localhost:3000/students/${id}`, {
            method: "DELETE",
        });
        if (!res.ok) {
            throw new Error("error");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
