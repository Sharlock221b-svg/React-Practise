import man1 from "../images/man2.png"

export default function Info() {
    return (
        <header>
            <img src={man1} class="photo"></img>
            <h3>Dhairya Upadhyay</h3>
            <p class="dev">Frontend Developer</p>
            <p class="lin">Upadhyay.website</p>
            <button>Email</button>
        </header>
    )
}