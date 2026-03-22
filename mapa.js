fetch("/api-key")
    .then(r => r.text())
    .then(key => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=iniciarMapa`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    });