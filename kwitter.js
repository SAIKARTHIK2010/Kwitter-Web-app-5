function adduser(){
    username=document.getElementById("user_name").nodeValue
    localStorage.setItem("user_name", username)
    window.location="kwitter_room.html"
}

console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];