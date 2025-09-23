window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    // Linger for 4 seconds (3s animation + 1s pause)
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        mainContent.style.opacity = '1';

        // Remove splash screen from the DOM after transition
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 1500); // This should match the transition duration in CSS
    }, 4000);
});
