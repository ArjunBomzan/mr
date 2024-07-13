export function useWindowSize(props) {
    const [windowSize, setWindowSize] = props?.useState({
        width: undefined,
        height: undefined,
    });
    props?.useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}
