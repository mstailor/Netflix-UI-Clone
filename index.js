function navigateToPage() {
    var select = document.getElementById("language");
    var selectedValue = select.options[select.selectedIndex].value;
    window.location.href = selectedValue;
}
