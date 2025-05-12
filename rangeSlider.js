document.querySelectorAll('.cf-thumb').forEach(thumb => {
    let isDragging = false;
    thumb.addEventListener('mousedown', () => { isDragging = true; });
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const parent = thumb.parentElement;
            const rect = parent.getBoundingClientRect();
            let percentage = ((e.clientX - rect.left) / rect.width) * 100;
            percentage = Math.max(0, Math.min(100, percentage));
            thumb.style.left = `${percentage}%`;
            parent.querySelector('.cf-bar').style.width = `${percentage}%`;
            const cfValue = 0.1 + (percentage / 100) * 0.9;
            parent.querySelector('.cf-value').innerText = cfValue.toFixed(1);
        }
    });
    document.addEventListener('mouseup', () => { isDragging = false; });
});