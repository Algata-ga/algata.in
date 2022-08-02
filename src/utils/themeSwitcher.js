const setTheme = (theme_id) => {
    const themes = ["light", "dark", "noon"];
    document.documentElement.classList.add("theme-transition");
    document.documentElement.setAttribute("data-theme", themes[theme_id]);
    window.setTimeout(
        () => document.documentElement.classList.remove("theme-transition"),
        1000
    );
    localStorage.setItem("theme_id", theme_id);
};
export default setTheme;


