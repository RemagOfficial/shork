(function() {
    let shorks = 0;
    let autoclickers = 999;

    const shorkCounter = document.getElementById("ShorksCount");
    const sharkImg = document.getElementById("Shark");
    const formatting = document.getElementById("SettingsFormatting");
    const body = document.getElementById("Content");
    // const title = document.getElementById("Title");
    const about = document.getElementById("About");
    const aboutPanel = document.getElementById("AboutDiv");
    const close = document.getElementById("Close");
    const save = document.getElementById("Save");
    const load = document.getElementById("Load");
    const clear = document.getElementById("Clear");
    const saveTimer = document.getElementById("SaveTimer");
    const shop = document.getElementById("Shop");
    const shopPanel = document.getElementById("ShopDiv");
    const shopNormal = document.getElementById("ShopNormal");
    const shopPrestige = document.getElementById("ShopPrestige");
    const shopNormalUpgrades = document.getElementById("ShopNormalUpgrades");
    const shopPrestigeUpgrades = document.getElementById("ShopPrestigeUpgrades");
    const settings = document.getElementById("Settings");
    const settingsPanel = document.getElementById("SettingsDiv");
    const settingsFormattingText = document.getElementById("SettingsFormattingText");
    const Autoclicker1 = document.getElementById("Autoclicker1");

    let hook = true;

    let formattingMode = 0;
    let lastSave = Date.now();
    let saveInterval = 30;
    let loadInterval = 5;
    let shopTabOpen = 1;
    let PrestigeShopUnlocked = false;
    let shopPanelOpen = false;
    let settingsPanelOpen = false;
    let tick = 0;
    let autoclickerPrice = 100;

    var illions = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion", "decillion", "undecillion", "duodecillion", "tredecillion", "quattuordecillion", "quindecillion", "sexdecillion", "septendecillion", "octodecillion", "novemdecillion", "vigintillion", "unvigintillion", "duovigintillion", "trevigintillion", "quattuorvigintillion", "quinvigintillion", "sexvigintillion", "septenvigintillion", "octovigintillion", "nonvigintillion", "trigintillion", "untrigintillion", "duotrigintillion", "tretrigintillion", "quattuortrigintillion", "quintrigintillion", "sextrigintillion", "septentrigintillion", "octotrigintillion", "novemtrigintillion", "quadragintillion", "unquadragintillion", "duoquadragintillion", "trequadragintillion", "quattuorquadragintillion", "quinquadragintillion", "sexquadragintillion", "septenquadragintillion", "octoquadragintillion", "novemquadragintillion", "quinquagintillion", "unquinquagintillion", "duoquinquagintillion", "trequinquagintillion"];
    var illionsAbbr = ["", "k", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "O", "N", "D", "Ud", "DuD", "TrD", "QaD", "QiD", "SxD", "SpD", "OD", "ND", "V", "UnV", "DuV", "TrV", "QaV", "QiV", "SxV", "SpV", "OV", "NV", "Tg", "UnT", "DuT", "TrT", "QaT", "QiT", "SxT", "SpT", "OT", "NT", "Dg", "UnD", "DuDg", "TrDg", "QaDg", "QiDg", "SxDg", "SpDg", "ODg", "NDg", "Sg", "UnSg", "DuSg", "TrSg", "QaSg", "QiSg", "SxSg", "SpSg", "OSg"];



    // funny message in the console when the game is loaded to confuse the player if they open the console
    document.addEventListener('DOMContentLoaded', function() {

        console.log('Shork Clicker loaded!');
        console.log('Why are you looking at the console?');
        console.log('Theres nothing to see here!');
        // wait the load interval then call the load game function
        setTimeout(loadGame, loadInterval * 1000);

    });

    function handleBeforeUnload(event) {
        if (hook) {
            event.preventDefault();
            event.returnValue = 'Warning: Game does not autosave. Use download button.';
        }
    }

    window.addEventListener('beforeunload', handleBeforeUnload);

    sharkImg.addEventListener("click", addShorksClicks);
    formatting.addEventListener("click", updateFormatting);
    about.addEventListener("click", openAbout);
    close.addEventListener("click", closeAbout);
    shop.addEventListener("click", openShop);
    settings.addEventListener("click", openSettings);
    shopNormal.addEventListener("click", openShopNormal);
    shopPrestige.addEventListener("click", openShopPrestige);
    Autoclicker1.addEventListener("click", purchaseAutoclicker1);


    // Add event listeners to load the game save when the load button is clicked
    load.addEventListener("click", loadGame);

    // Add event listeners to save the game when the save button is clicked
    save.addEventListener("click", saveGame);

    // Add event listeners to clear the cookies
    clear.addEventListener("click", clearCookies);


    /**
     * Updates the formatting mode of the application.
     *
     * This function increments the formatting mode by 1, and wraps
     * it around to 0 if it exceeds 3.
     *
     * @return {void} This function does not return anything.
     */
    function updateFormatting() {
        // Increment the formatting mode and wrap it around to 0 if it exceeds 3
        formattingMode = (formattingMode + 1) % 4;
    }

    function addShorksClicks() {
        shorks += 1;
    }

    function purchaseAutoclicker1() {
        // if shorks is over the autoclicker price, add 1 autoclicker and remove the autoclicker price from shorks
        if (shorks >= autoclickerPrice) {
            autoclickers += 1;
            shorks -= autoclickerPrice;
            // increase the autoclicker price by 20%
            autoclickerPrice = Math.ceil(autoclickerPrice * 1.2);
            // update the autoclicker price text in the autoclicker1 title to reflect the new price
            Autoclicker1.title = "Hire a Feminine Person to Make Shorks\nCost: " + autoclickerPrice + " Shorks\n You have: x" + autoclickers + " Feminine People";
            // update the ShorksPerSecond text to show how many shorks are added per second
        } else {
            // tell the user they don't have enough shorks
            alert("You don't have enough Shorks to buy an Autoclicker. You need at least 100 Shorks.");
        }
    }
    function addShorksAuto(number) {
        // add shorks based on the number of autoclickers with a delay of 10ms between each addition
        for (var i = 0; i < number; i++) {
            setTimeout(addShorksClicks, i * 10);
            // log number of shorks added
            console.log("added " + number + " shorks");
        }
    };



    function updateUI() {
        if (formattingMode == 0) {
            shorkCounter.textContent = shorks.toLocaleString() + " Shorks";
            ShorksPerSecond.textContent = "Shorks Per Second: " + autoclickers.toLocaleString() + "/s";
            settingsFormattingText.textContent = "Normal";
        } else if (formattingMode == 1) {
            shorkCounter.textContent = formatInt(shorks);
            ShorksPerSecond.textContent = "Shorks Per Second: " + formatInt(autoclickers) + "/s";
            settingsFormattingText.textContent = "Standard Form";
        } else if (formattingMode == 2) {
            shorkCounter.textContent = formatIntAbbr(shorks);
            ShorksPerSecond.textContent = "Shorks Per Second: " + formatIntAbbr(autoclickers) + "/s";
            settingsFormattingText.textContent = "Abbreviated Standard Form";
        } else if (formattingMode == 3) {
            shorkCounter.textContent = shorks.toExponential(2) + " Shorks";
            ShorksPerSecond.textContent = "Shorks Per Second: " + autoclickers.toExponential(2) + "/s";
            settingsFormattingText.textContent = "Scientific";
        }
        // update the save timer
        saveTimer.textContent = "Next save in " + (saveInterval - (Date.now() - lastSave) / 1000).toFixed(0) + " seconds.";
    }

    function formatInt(number) {
        var temp = number;
        var illion = 1;
        while (temp >= 1000) {
            temp = temp / 1000;
            illion++;
        }
        return temp + " " + illions[illion - 1] + " Shorks";
    }

    function formatIntAbbr(number) {
        var temp = number;
        var illion = 1;
        while (temp >= 1000) {
            temp = temp / 1000;
            illion++;
        }
        return temp + illionsAbbr[illion - 1] + " Shorks";
    }

    // a function that opens the about page by dimming the background and making the about panel div visible
    function openAbout() {
        body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        // make the about panel div visible
        aboutPanel.style.visibility = "visible";
    }

    // a function that closes the about page by undimming the background and making the about panel div invisible
    function closeAbout() {
        body.style.backgroundColor = "rgba(0, 0, 0, 0)";
        aboutPanel.style.visibility = "hidden";
    }
    function logger() {
        console.log("clicked");
    }

    // a function that saves the shork counter and formatting mode to a browser cookie when the save button is clicked
    function saveGame() {
        document.cookie = "shorkCounter=" + shorks;
        document.cookie = "formattingMode=" + formattingMode;
        hook = false;
        lastSave = Date.now();
        // tell the user that their save has been saved
        console.log("saved");
    }

    // a function that loads the shork counter and formatting mode from a browser cookie when the load button is clicked
    function loadGame() {
        // get the shork counter and formatting mode from the cookie using their names
        var cookies = document.cookie.split("; ");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].split("=");
            if (cookie[0] == "shorkCounter") {
                shorks = parseInt(cookie[1]);
            } else if (cookie[0] == "formattingMode") {
                formattingMode = parseInt(cookie[1]);
            }
        }
        updateUI();
        // set hook to true so that the game will not want the user to save before they close the page
        hook = true;
        // tell the user that their save has been loaded
        console.log("loaded");
    }

    // a function that clears all cookies when the clear button is clicked
    function clearCookies() {
        // warn the user that their cookies will be cleared and cancel the clear if they don't want to continue
        if (!confirm("Are you sure you want to clear your save data? This action cannot be undone.")) {
            return;
        }
        // clear all cookies
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            // set all cookies to an empty string
            document.cookie = cookies[i].split("=")[0] + "=";
            // refresh the page to clear progress and disable the refresh warning
            hook = false;
            location.reload();
        }
        // tell the user that their cookies have been cleared
        alert("Your save data has been cleared!");
        console.log("cleared");
    }

    // a function that moves the shop button over to the left side of the screen when the shop button is clicked and moves it back to the right side of the screen when the shop button is clicked again and makes the shop panel visible
    function openShop() {
        if (shopPanel.style.visibility == "hidden" && !settingsPanelOpen) {
            shopPanel.style.visibility = "visible";
            shopNormalUpgrades.style.visibility = "visible";
            shop.style.right = "90%";
            shopPanelOpen = true;
        } else {
            shopPanel.style.visibility = "hidden";
            shopNormalUpgrades.style.visibility = "hidden";
            shopPrestigeUpgrades.style.visibility = "hidden";
            shop.style.right = "0%";
            shopPanelOpen = false;
        }
    }

    // a function that sets a variable to 1 when the ShopNormal div is clicked only if the variable isn't already set to 1 and makes the ShopNormalUpgrades div visible and the ShopPrestigeUpgrades div invisible
    function openShopNormal() {
        if (shopTabOpen != 1) {
            shopTabOpen = 1;
            shopNormalUpgrades.style.visibility = "visible";
            shopPrestigeUpgrades.style.visibility = "hidden";
            if (shopPanel.style.visibility == "hidden") {
                shopNormalUpgrades.style.visibility = "hidden";
            }
        }
    }

    // a function that sets a variable to 2 when the ShopPrestige div is clicked only if the variable isn't already set to 2 and makes the ShopPrestigeUpgrades div visible and the ShopNormalUpgrades div invisible only if Prestige is unlocked
    function openShopPrestige() {
        if (PrestigeShopUnlocked) {
            if (shopTabOpen != 2) {
                shopTabOpen = 2;
                shopPrestigeUpgrades.style.visibility = "visible";
                shopNormalUpgrades.style.visibility = "hidden";
                if (shopPanel.style.visibility == "hidden") {
                    shopPrestigeUpgrades.style.visibility = "hidden";
                }
            }
        } else {
            alert("This tab is not yet unlocked!");
        }
    }

    // a function that moves the settings button over to the left side of the screen when the settings button is clicked and moves it back to the right side of the screen when the settings button is clicked again and makes the settings panel visible
    function openSettings() {
        if (settingsPanel.style.visibility == "hidden" && !shopPanelOpen) {
            settingsPanel.style.visibility = "visible";
            settings.style.right = "90%";
            settingsPanelOpen = true;
        } else {
            settingsPanel.style.visibility = "hidden";
            settings.style.right = "0%";
            settingsPanelOpen = false;
        }
    }

    // a function that calls the save function every 60 seconds
    setInterval(saveGame, saveInterval * 1000); // multiply by 1000 to convert seconds to milliseconds

    const everyTick = () => {
        updateUI();
        // only add shorks automatically every 20 ticks
        tick++;
        // log the tick counter
        // console.log("Tick: " + tick);
        if (tick % 20 == 0) {
            // add shorks automatically
            addShorksAuto(autoclickers);
            // reset the tick counter
            tick = 0;
        }
    }

    setInterval(everyTick, 50); // Every 50ms = 1/20th of a second
    
})()