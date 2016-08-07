console.log("qeqwrq");
$(document).ready(function () {
    $("#resolution").change(function () {
        console.log("fadsfa")
        var val = $("#resolution").val();
        console.log(val);
        if (!val) {
            return;
        }
        chrome.tabs.executeScript({
            code: "document.body.style.width='" + val + "'",
        });
    });
});

