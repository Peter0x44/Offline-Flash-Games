// Dynamically load Ruffle based on environment
(function() {
    // Check if we're running in Electron
    const isElectron = typeof window !== 'undefined' && 
                       window.process && 
                       window.process.type === 'renderer';
    
    // Create script element
    const script = document.createElement('script');
    
    if (isElectron) {
        // Load from local node_modules in Electron
        script.src = 'node_modules/@ruffle-rs/ruffle/ruffle.js';
    } else {
        // Load from CDN when served via HTTP
        script.src = 'https://unpkg.com/@ruffle-rs/ruffle';
    }
    
    // Configure Ruffle after it loads
    script.onload = function() {
        window.RufflePlayer = window.RufflePlayer || {};
        window.RufflePlayer.config = {
            autoplay: "on",
            unmuteOverlay: "hidden",
            splashScreen: false,
            // Enable local storage for save data
            localStorage: true,
            maxExecutionDuration: 15,
            // Disable opening URLs when clicked in Flash content
            openUrlMode: "deny"
        };
    };
    
    // Add error handler
    script.onerror = function() {
        console.error('Failed to load Ruffle from:', script.src);
    };
    
    // Append to document head
    document.head.appendChild(script);
})();
