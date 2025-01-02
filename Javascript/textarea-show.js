function toggleTextareaWithSlide() {
    const textareaContainer = document.getElementById('textarea-container');
    const chevronIcon = document.getElementById('chevron-icon');
    const isExpanded = textareaContainer.classList.contains('expanded');

    // Toggle slide container
    if (isExpanded) {
        textareaContainer.classList.remove('expanded');
        chevronIcon.classList.remove('rotated');
    } else {
        textareaContainer.classList.add('expanded');
        chevronIcon.classList.add('rotated');
    }
}
