(function() {
    let shorks = 0;
    let shorksLifetime = 0;
    let autoclickers = 0;
    let cursorUpgrades = 0;
    let autoclickerUpgrade1Purchased = false;
    let autoclickerUpgrade2Purchased = false;
    let cursorUpgradeUpgradePurchased = false;
    let autoclickerProductionRate = 1;
    let priceScalingPercent = 15;

    const formattingModes = ["Normal", "Standard Form", "Abbreviated Standard Form", "Scientific"];

    const shorkCounter = document.getElementById("ShorksCount");
    const sharkImg = document.getElementById("Shark");
    const formatting = document.getElementById("SettingsFormatting");
    const body = document.getElementById("Content");
    const title = document.getElementById("Title");
    const about = document.getElementById("About");
    const aboutPanel = document.getElementById("AboutDiv");
    const close = document.getElementById("Close");
    const save = document.getElementById("Save");
    const load = document.getElementById("Load");
    const discord = document.getElementById("Discord");
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
    const settingsStatsPlaytime = document.getElementById("SettingsStatsPlaytime");
    const Autoclicker1 = document.getElementById("Autoclicker1");
    const CursorUpgrade = document.getElementById("CursorUpgrade1");
    const Upgrades = document.getElementById("Upgrades");

    let hook = true;

    let formattingMode = 0;
    let lastSave = Date.now();
    let playtime = 0;
    let saveInterval = 30;
    let loadInterval = 5;
    let shopTabOpen = 1;
    let PrestigeShopUnlocked = false;
    let shopPanelOpen = false;
    let settingsPanelOpen = false;
    let tick = 0;
    let autoclickerPrice = 100;
    let autoclickerUpgrade1Price = 1000;
    let autoclickerUpgrade2Price = 10000;
    let cursorUpgradePrice = 25;
    let cursorUpgradeUpgradePrice = 10000;

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

    sharkImg.addEventListener("click", () => addShorks(1, false));
    formatting.addEventListener("click", updateFormatting);
    about.addEventListener("click", openAbout);
    close.addEventListener("click", closeAbout);
    shop.addEventListener("click", openShop);
    settings.addEventListener("click", openSettings);
    shopNormal.addEventListener("click", openShopNormal);
    shopPrestige.addEventListener("click", openShopPrestige);
    Autoclicker1.addEventListener("click", purchaseAutoclicker1);
    CursorUpgrade.addEventListener("click", purchaseCursorUpgrade);
    discord.addEventListener("click", openDiscordLink);

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

    function addShorks(number, auto) {
        if (auto) {
            shorks += number;
            shorksLifetime += number;
        } else {
            shorks += number + cursorUpgrades;
            shorksLifetime += number + cursorUpgrades;
        }

    }

    function purchaseAutoclicker1() {
        // if shorks is over the autoclicker price, add 1 autoclicker and remove the autoclicker price from shorks
        if (shorks >= autoclickerPrice) {
            autoclickers += 1;
            shorks -= autoclickerPrice;
            // increase the autoclicker price by the priceScalingPercent
            autoclickerPrice = Math.ceil(autoclickerPrice * (priceScalingPercent / 100 + 1));
            // update the ShorksPerSecond text to show how many shorks are added per second
        } else {
            // tell the user they don't have enough shorks and format the autoclicker price depending on the formatting mode
            alert("You don't have enough Shorks to buy an Autoclicker. You need at least " + formatNumberToCorrectFormat(autoclickerPrice) + " Shorks.");
        }
    }
    function purchaseCursorUpgrade() {
        // if shorks is over the autoclicker price, add 1 autoclicker and remove the autoclicker price from shorks
        if (shorks >= cursorUpgradePrice) {
            cursorUpgrades += 1;
            shorks -= cursorUpgradePrice;
            // increase the autoclicker price by the priceScalingPercent
            cursorUpgradePrice = Math.ceil(cursorUpgradePrice * (priceScalingPercent / 100 + 3));
            // update the ShorksPerSecond text to show how many shorks are added per second
        } else {
            // tell the user they don't have enough shorks and format the autoclicker price depending on the formatting mode
            alert("You don't have enough Shorks to buy an Upgrade. You need at least " + formatNumberToCorrectFormat(cursorUpgradePrice) + " Shorks.");
        }
    }



    function updateUI() {
        let sps = autoclickers * autoclickerProductionRate;
        shorkCounter.textContent = formatNumberToCorrectFormat(shorks);
        Autoclicker1.title = "Hire a Feminine Person to Make Shorks\nCost: " + formatNumberToCorrectFormat(autoclickerPrice) + " Shorks\n You have: x" + formatNumberToCorrectFormat(autoclickers) + " Feminine People";
        CursorUpgrade.title = "Increase Shorks per click\nCost: " + formatNumberToCorrectFormat(cursorUpgradePrice) + " Shorks\n You have: x" + formatNumberToCorrectFormat(cursorUpgrades) + " Upgrades";
        ShorksPerSecond.textContent = "Shorks Per Second: " + formatNumberToCorrectFormat(sps) + "/s";
        settingsFormattingText.textContent = formattingModes[formattingMode];
        saveTimer.textContent = "Next save in " + (saveInterval - (Date.now() - lastSave) / 1000).toFixed(0) + " seconds.";
        title.title =  "V2.0 Alpha" + "\nLines of Javascript: " + (Object.keys(window).length).toLocaleString() + "\nLines of HTML: " + (document.getElementsByTagName("html")[0].innerHTML.split("\n").length).toLocaleString() + "\nThis game is still in alpha. Use at your own risk as your save may need to be deleted!";
        const seconds = Math.floor(playtime / 20);
        const days = Math.floor(seconds / 86400);
        const hours = Math.floor(seconds / 3600) % 24;
        const minutes = Math.floor(seconds / 60) % 60;
        const displaySeconds = seconds % 60;
        settingsStatsPlaytime.innerHTML = `Playtime: ${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')} (DD:HH:MM:SS)<br><br>Lifetime Shorks: ${formatNumberToCorrectFormat(shorksLifetime)}`;
    }

    function formatInt(number) {
        var temp = number;
        var illion = 1;
        while (temp >= 1000) {
            temp = temp / 1000;
            temp = temp.toFixed(2);
            illion++;
        }
        return temp + " " + illions[illion - 1] + " Shorks";
    }

    function formatIntAbbr(number) {
        var temp = number;
        var illion = 1;
        while (temp >= 1000) {
            temp = temp / 1000;
            temp = temp.toFixed(2);
            illion++;
        }
        return temp + illionsAbbr[illion - 1] + " Shorks";
    }

    function formatNumberToCorrectFormat(number) {
        if (formattingMode == 0) {
            return number.toLocaleString();
        } else if (formattingMode == 1) {
            return formatInt(number);
        } else if (formattingMode == 2) {
            return formatIntAbbr(number);
        } else if (formattingMode == 3) {
            return number.toExponential(2);
        }
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
        document.cookie = "autoclickers=" + autoclickers;
        document.cookie = "cursorUpgrades=" + cursorUpgrades;
        document.cookie = "autoclickerPrice=" + autoclickerPrice;
        document.cookie = "cursorUpgradePrice=" + cursorUpgradePrice;
        document.cookie = "autoclickerUpgrade1Purchased=" + autoclickerUpgrade1Purchased;
        document.cookie = "autoclickerUpgrade2Purchased=" + autoclickerUpgrade2Purchased;
        document.cookie = "autoclickerProductionRate=" + autoclickerProductionRate;
        document.cookie = "playtime=" + playtime;
        hook = false;
        lastSave = Date.now();
        // tell the user that their save has been saved
        console.log("saved");
    }

    /**
    * Function that loads the save data from a browser cookie when the load button is clicked.
    *
    * @return {void}
    */
    function loadGame() {
        // Split the cookies string into an array of cookies
        var cookies = document.cookie.split("; ");

        // Loop through each cookie
        for (var i = 0; i < cookies.length; i++) {
            // Split the cookie string into an array with name and value
            var cookie = cookies[i].split("=");

            // Switch on the cookie name and update the corresponding variable if the value is not NaN
            switch (cookie[0]) {
                case "shorkCounter":
                    // Update the shorks variable with the parsed value or 0 if NaN
                    const parsedShorks = parseInt(cookie[1]);
                    const isNaNShorks = isNaN(parsedShorks);
                    shorks = isNaNShorks ? 0 : parsedShorks;
                    console.log(`shorkCounter ${cookie[0]} parsed ${cookie[1]} isNaN ${isNaNShorks}`);
                    break;
                case "formattingMode":
                    // Update the formattingMode variable with the parsed value or 0 if NaN
                    const parsedFormattingMode = parseInt(cookie[1]);
                    const isNaNFormattingMode = isNaN(parsedFormattingMode);
                    formattingMode = isNaNFormattingMode ? 0 : parsedFormattingMode;
                    console.log(`formattingMode ${cookie[0]} parsed ${cookie[1]} isNaN ${isNaNFormattingMode}`);
                    break;
                case "autoclickers":
                    // Update the autoclickers variable with the parsed value or 0 if NaN
                    const parsedAutoclickers = parseInt(cookie[1]);
                    const isNaNAutoclickers = isNaN(parsedAutoclickers);
                    autoclickers = isNaNAutoclickers ? 0 : parsedAutoclickers;
                    console.log(`autoclickers ${cookie[0]} parsed ${cookie[1]} isNaN ${isNaNAutoclickers}`);
                    break;
                case "cursorUpgrades":
                    // Update the cursorUpgrades variable with the parsed value or 0 if NaN
                    const parsedCursorUpgrades = parseInt(cookie[1]);
                    const isNaNCursorUpgrades = isNaN(parsedCursorUpgrades);
                    cursorUpgrades = isNaNCursorUpgrades ? 0 : parsedCursorUpgrades;
                    console.log(`cursorUpgrades ${cookie[0]} parsed ${cookie[1]} isNaN ${isNaNCursorUpgrades}`);
                    break;
                case "autoclickerPrice":
                    // Update the autoclickerPrice variable with the parsed value or 100 if NaN
                    const parsedAutoclickerPrice = parseInt(cookie[1]);
                    const isNaNAutoclickerPrice = isNaN(parsedAutoclickerPrice);
                    autoclickerPrice = isNaNAutoclickerPrice ? 100 : parsedAutoclickerPrice;
                    console.log(`autoclickerPrice ${cookie[0]} parsed ${cookie[1]} isNaN ${isNaNAutoclickerPrice}`);
                    break;
                case "cursorUpgradePrice":
                    // Update the cursorUpgradePrice variable with the parsed value or 25 if NaN
                    const parsedCursorUpgradePrice = parseInt(cookie[1]);
                    const isNaNCursorUpgradePrice = isNaN(parsedCursorUpgradePrice);
                    cursorUpgradePrice = isNaNCursorUpgradePrice ? 25 : parsedCursorUpgradePrice;
                    console.log(`cursorUpgradePrice ${cookie[0]} parsed ${cookie[1]} isNaN ${isNaNCursorUpgradePrice}`);
                    break;
                case "autoclickerUpgrade1Purchased":
                    // Update the autoclickerUpgrade1Purchased variable with the parsed value or false if not a boolean
                    const parsedautoclickerUpgrade1Purchased = cookie[1];
                    const isNaNautoclickerUpgrade1Purchased = parsedautoclickerUpgrade1Purchased !== "true" && parsedautoclickerUpgrade1Purchased !== "false";
                    autoclickerUpgrade1Purchased = isNaNautoclickerUpgrade1Purchased ? false : parsedautoclickerUpgrade1Purchased;
                    console.log(`autoclickerUpgrade1Purchased ${cookie[0]} parsed ${cookie[1]} invalid ${isNaNautoclickerUpgrade1Purchased}`);
                    break;
                case "autoclickerUpgrade2Purchased":
                    // Update the autoclickerUpgrade2Purchased variable with the parsed value or false if not a boolean
                    const parsedautoclickerUpgrade2Purchased = cookie[1];
                    const isNaNautoclickerUpgrade2Purchased = parsedautoclickerUpgrade2Purchased !== "true" && parsedautoclickerUpgrade2Purchased !== "false";
                    autoclickerUpgrade2Purchased = isNaNautoclickerUpgrade2Purchased ? false : parsedautoclickerUpgrade2Purchased;
                    console.log(`autoclickerUpgrade2Purchased ${cookie[0]} parsed ${cookie[1]} invalid ${isNaNautoclickerUpgrade2Purchased}`);
                    break;
                case "autoclickerProductionRate":
                    // Update the autoclickerProductionRate variable with the parsed value or 0 if NaN
                    const parsedAutoclickerProductionRate = parseInt(cookie[1]);
                    const isNaNAutoclickerProductionRate = isNaN(parsedAutoclickerProductionRate);
                    autoclickerProductionRate = isNaNAutoclickerProductionRate ? 0 : parsedAutoclickerProductionRate;
                    console.log(`autoclickerProductionRate ${cookie[0]} parsed ${cookie[1]} isNaN ${isNaNAutoclickerProductionRate}`);
                    break;
                case "playtime":
                    // Update the playtime variable with the parsed value or 0 if NaN
                    const parsedPlaytime = parseInt(cookie[1]);
                    const isNaNPlaytime = isNaN(parsedPlaytime);
                    playtime = isNaNPlaytime ? 0 : parsedPlaytime;
                    console.log(`playtime ${cookie[0]} parsed ${cookie[1]} isNaN ${isNaNPlaytime}`);
                    break;
                default:
                    // Do nothing for unknown cookie names
                    console.log(`Unknown cookie ${cookie[0]}`);
                    break;
            }

            if (parsedShorks > shorksLifetime) {
                shorksLifetime = isNaNShorks ? 0 : parsedShorks;
            }
        }

        // Update the user interface to reflect the loaded values
        updateUI();

        // Set hook to true so that the game will not want the user to save before they close the page
        hook = true;

        // Log that the save has been loaded
        console.log("loaded");
    }

    // a function that clears all cookies when the clear button is clicked
    function clearCookies() {
        // warn the user that their cookies will be cleared and cancel the clear if they don't want to continue
        if (!confirm("Are you sure you want to clear your save data? This action cannot be undone!!!!")) {
            return;
        }
        // set all cookies to 0 other than the autoclicker price cookie which is set to 100 and the autoclickerUpgrade1Purchased cookie
        var otherCookies = document.cookie.split(";").filter(c => !/^(autoclickerPrice|cursorUpgradePrice|autoclickerUpgrade1Purchased|autoclickerUpgrade2Purchased|cursorUpgradeUpgradePurchased)/.test(c)).map(c => c.split("=")[0] + "=0");
        document.cookie = otherCookies.join(";") + "; autoclickerPrice=" + autoclickerPrice + "; autoclickerUpgrade1Purchased=" + autoclickerUpgrade1Purchased;
        // refresh the page to clear progress and disable the refresh warning
        hook = false;
        location.reload();
        // tell the user that their cookies have been cleared
        alert("Your save data has been cleared!");
        console.log("cleared");
    }

    // a function that opens the discord invite link in a new tab when the discord button is clicked
    function openDiscordLink() {
        window.open("https://discord.gg/N7mjssVF8Z", "_blank");
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

    // a function that adds a sub div to the Upgrades only when the previousUpgrade var is greater than or equal to the minUpgrades
    // in the sub div there is an image of the upgrade with a border that matches the other upgrades
    // the sub div has a border that matches the other upgrades like autoclicker1
    // when the sub div is hovered it changes the cursor to a pointer
    function addUpgrades(upgradeID, upgradeName, upgradePrice) {
        // if the div doesn't already exist, add it
        if (document.getElementById(upgradeID) == null) {
            if (upgradeID == "10xCursor") {
                Upgrades.innerHTML += '<div id=' + upgradeID + ' title="' + upgradeName + '&NewLine;Cost: ' + formatNumberToCorrectFormat(upgradePrice) + ' Shorks&NewLine;You have not Purchased This Upgrade" style="border: #b06a3b 5px solid; background-color: #b67f5a; width: min-content; height: 66px; cursor: pointer; display: inline-block; margin: 10px;"><img src="src/assets/textures/' + upgradeID + '.png" style="transform: translateY(-10%) scale(0.75)"></div>';
            } else {
                Upgrades.innerHTML += '<div id=' + upgradeID + ' title="' + upgradeName + '&NewLine;Cost: ' + formatNumberToCorrectFormat(upgradePrice) + ' Shorks&NewLine;You have not Purchased This Upgrade" style="border: #b06a3b 5px solid; background-color: #b67f5a; width: min-content; height: min-content; cursor: pointer; display: inline-block; margin: 10px;"><img src="src/assets/textures/' + upgradeID + '.png"></div>';
            }
        }
            
    }

    // a function that purchases an upgrade if the user has enough shorks
    function purchaseAutoclickerUpgrade1() {
        if (shorks >= autoclickerUpgrade1Price) {
            shorks -= autoclickerUpgrade1Price;
            autoclickerUpgrade1Purchased = true;
            autoclickerProductionRate++;
        } else {
            alert("Not enough Shorks!");
        }
    }

    function purchaseAutoclickerUpgrade2() {
        if (shorks >= autoclickerUpgrade2Price) {
            shorks -= autoclickerUpgrade2Price;
            autoclickerUpgrade2Purchased = true;
            autoclickerProductionRate += 5;
        } else {
            alert("Not enough Shorks!");
        }
    }

    function purchaseCursorUpgradeUpgrade() {
        if (shorks >= cursorUpgradeUpgradePrice) {
            shorks -= cursorUpgradeUpgradePrice;
            cursorUpgradeUpgradePurchased = true;
            cursorUpgrades = cursorUpgrades * 10;
        } else {
            alert("Not enough Shorks!");
        }
    }


    // a function that calls the save function every 60 seconds
    setInterval(saveGame, saveInterval * 1000); // multiply by 1000 to convert seconds to milliseconds

    const everyTick = () => {
        updateUI();
        playtime++;
        // only add shorks automatically every 20 ticks
        tick++;
        // log the tick counter
        // console.log("Tick: " + tick);
        if (tick % 20 == 0) {
            // add shorks automatically depending on the number of autoclickers and the production rate
            addShorks(autoclickers * autoclickerProductionRate, true);
            // reset the tick counter
            tick = 0;
        }
        const twoxRate = document.getElementById("2xRate");
        if (twoxRate != null) {
            // Add event listener to purchase the upgrade
            twoxRate.addEventListener("click", purchaseAutoclickerUpgrade1);
            
        }
        const fivexRate = document.getElementById("5xRate");
        if (fivexRate != null) {
            // Add event listener to purchase the upgrade
            fivexRate.addEventListener("click", purchaseAutoclickerUpgrade2);
            
        }
        const tenxCursor = document.getElementById("10xCursor");
        if (tenxCursor != null) {
            // Add event listener to purchase the upgrade
            tenxCursor.addEventListener("click", purchaseCursorUpgradeUpgrade);
        }

        // if the user has purchased the upgrade for more feminine people speed update the title
        // if twoxRate is undefined then the upgrade doesn't exist so don't update the title
        if (twoxRate != null && autoclickerUpgrade1Purchased) {
            twoxRate.title = "Purchased 2x Feminine Person Speed";
        }

        if (fivexRate != null && autoclickerUpgrade2Purchased) {
            fivexRate.title = "Purchased 5x Feminine Person Speed";
        }

        if (tenxCursor != null && cursorUpgradeUpgradePurchased) {
            tenxCursor.title = "Purchased 10x Shorks from Clicks";
        }

        // add the upgrade if 10 autoclickers have been purchased
        if (autoclickers >= 10) {
            addUpgrades("2xRate", "2x More Shorks from Feminine People", formatNumberToCorrectFormat(autoclickerUpgrade1Price), autoclickerUpgrade1Purchased);
        }

        // add the upgrade if 100 autoclickers have been purchased
        if (autoclickers >= 100) {
            addUpgrades("5xRate", "5x More Shorks from Feminine People", formatNumberToCorrectFormat(autoclickerUpgrade2Price), autoclickerUpgrade2Purchased);
        }

        if (cursorUpgrades >= 10) {
            addUpgrades("10xCursor", "10x More Shorks from Clicks", formatNumberToCorrectFormat(cursorUpgradeUpgradePrice), cursorUpgradeUpgradePurchased);
        }
    }

    setInterval(everyTick, 50); // Every 50ms = 1/20th of a second
    
})()