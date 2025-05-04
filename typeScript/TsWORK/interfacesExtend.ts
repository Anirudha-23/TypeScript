interface user{
    name: string,
    email: string,
    password: number 
}
interface admin extends user{     
    age: Number
}
function anirudha(obj: admin) {
    obj.name="Ani",
    obj.email="ani@gmail.com",
    obj.password=525
    obj.age= 5;
}