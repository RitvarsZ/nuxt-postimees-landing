const BREAKPOINTS = {
    desktop: 768
}

export default function useMobile() {
    const isDesktop = ref(false);
    onMounted(() => {
        updateWidth();
        window.addEventListener('resize', updateWidth);
    });

    const updateWidth = () => {
        isDesktop.value = window.innerWidth > BREAKPOINTS.desktop;
    };

    return { isDesktop }
}
