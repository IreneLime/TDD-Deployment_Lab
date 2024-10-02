(function () {
    console.log("ready!"); // sanity check
  })();

const postElements = document.getElementsByClassName("entry");

for (var i = 0; i < postElements.length; i++) {
    // Delete on click
    postElements[i].addEventListener("click", function () {
        // Obtain location within html
        const postId = this.getElementsByTagName("h2")[0].getAttribute("id");
        const node = this;
        // Fetch delete post
        fetch(`/delete/${postId}`)
            .then(function (resp) {
                return resp.json();
            })
            .then(function (result) {
            if (result.status === 1) {
                // Data removal from the database
                node.parentNode.removeChild(node);
                console.log(result);
            }
            location.reload();
            })
            .catch(function (err) {
                console.log(err);
            });
    });
}