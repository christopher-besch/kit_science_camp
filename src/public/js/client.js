const socket = io();

function attach_send_button(author) {
    let send_button = document.getElementById("send");
    let new_message_input = document.getElementById("new-message-input");
    send_button.onclick = () => {
        let new_message = new_message_input.value;
        new_message_input.value = "";
        if (new_message == "")
            return;
        console.log(`sending '${new_message}'`);
        socket.emit("message", JSON.stringify({
            "author": author,
            "msg": new_message,
        }));
    };
}

function show_new_message(author, msg) {
    let messages = document.getElementById("messages");
    let new_message = document.createElement("div");
    messages.appendChild(new_message);
    new_message.innerHTML = `
    <div class="message-box">
        <div class="message message-${author == msg.author ? "left" : "right"} card">
            <div class="card-body">
                <h5 class="card-title">${msg.author}</h5>
                <p class="card-text">${msg.msg}</p>
            </div>
        </div>
    </div>
    `;
}

function setup(name) {
    let new_message = document.getElementById("new-message");
    new_message.style.display = "block";
    attach_send_button(name);

    socket.on("message", msg => {
        console.log(`receiving new message '${msg}'`)
        show_new_message(name, JSON.parse(msg));
    });
}

function get_name() {
    let new_message = document.getElementById("new-message");
    new_message.style.display = "none";

    let name_box = document.getElementById("name-box");
    let name_input = document.getElementById("name-input");
    let name_button = document.getElementById("name-button");
    name_button.onclick = () => {
        let name = name_input.value;
        name_box.style.display = "none";
        console.log(`using name '${name}.`);
        setup(name);
    };
}

get_name();

