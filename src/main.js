(function() {
    let shorks = 0;
    const shorkCounter = document.getElementById("ShorksCount");
    const sharkImg = document.getElementById("Shark");
    const formatting = document.getElementById("formatting");

    let standardForm = false;

    var illions = [" ", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion", "decillion", "undecillion", "duodecillion", "tredecillion", "quattuordecillion", "quindecillion", "sexdecillion", "septendecillion", "octodecillion", "novemdecillion", "vigintillion", "unvigintillion", "duovigintillion", "trevigintillion", "quattuorvigintillion", "quinvigintillion", "sexvigintillion", "septenvigintillion", "octovigintillion", "nonvigintillion", "trigintillion", "untrigintillion", "duotrigintillion", "tretrigintillion", "quattuortrigintillion", "quintrigintillion", "sextrigintillion", "septentrigintillion", "octotrigintillion", "novemtrigintillion", "quadragintillion", "unquadragintillion", "duoquadragintillion", "trequadragintillion", "quattuorquadragintillion", "quinquadragintillion", "sexquadragintillion", "septenquadragintillion", "octoquadragintillion", "novemquadragintillion", "quinquagintillion", "unquinquagintillion", "duoquinquagintillion", "trequinquagintillion"];

    sharkImg.addEventListener("click", incrementShorkCounter);
    formatting.addEventListener("click", updateFormatting);

    function updateFormatting() {
        standardForm = !standardForm;
    }

    function incrementShorkCounter() {
        console.log(standardForm);
        shorks += 100;
        if (standardForm == true) {
            shorkCounter.textContent = formatInt(shorks);
        } else {
            shorkCounter.textContent = shorks.toLocaleString();
        }
    }

    function formatInt(number) {
        var temp = number;
        var illion = 1;
        while (temp >= 1000) {
            temp = temp / 1000;
            illion++;
        }
        return temp + " " + illions[illion - 1];
        }
})()