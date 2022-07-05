const BREAKPOINTS = {
    desktop: 768
}

export default function useMobile() {
    const isDesktop = ref(false);

    onMounted(() => {
        updateWidth();
        window.addEventListener('resize', updateWidth);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateWidth);
    });

    function updateWidth() {
        isDesktop.value = window.innerWidth > BREAKPOINTS.desktop;
    };

    return { isDesktop }
}
