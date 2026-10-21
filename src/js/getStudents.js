
export async function getStudents() {
    try {
        const res = await fetch("http://localhost:3000/students");
        if (res.status !== 200) {
            throw new Error("error");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
