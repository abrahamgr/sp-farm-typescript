(() => {
    // Use function from main.ts file
    App.Log("Script loaded.");
    const group1: number[] = [1, 2, 3];
    const group2: number[] = [4, 5, 6];
    const group3: number[] = [0, ...group1, ...group2];
    App.Log("Group3", group3);
    const p = document.getElementById("p_home");
    if (p)
        p.innerText = "Loaded from Typescript";
})();