export default function login () {
    return `<form action = "/submit" method = "post">
            <input type="text" name="username" placeholder="Username">
            <input type="password" name="password" placeholder="Password">
            <button>Login</button>
            </form>
            <a href ="/">Home Page</a>`

}