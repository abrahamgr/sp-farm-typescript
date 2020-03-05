var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
(function () {
    // Use function from main.ts file
    App.Log("Script loaded.");
    var group1 = [1, 2, 3];
    var group2 = [4, 5, 6];
    var group3 = __spreadArrays([0], group1, group2);
    App.Log("Group3", group3);
    var p = document.getElementById("p_home");
    if (p)
        p.innerText = "Loaded from Typescript";
})();
//# sourceMappingURL=script.js.map