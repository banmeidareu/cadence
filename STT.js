var TTSlang = 'Kate'; //defaults to UK english
var deflang = document.getElementById("lang");

switch (deflang) {
    case 'العربية':
        TTSlang = 'Laila';
        break;
    case '广东话':
        TTSlang = 'Sin-ji';
        break;
    case 'français':
        TTSlang = 'Aurelie';
        break;
    case 'deutsch':
        TTSlang = 'Anna';
        break;
    case 'हिंदी':
        TTSlang = 'Lekha';
        break;
    case '普通话':
        TTSlang = 'Tian-tian';
        break;
} //basic switch of some of the languages


record("What should I translate?", { voice: TTSlang }, {
    beep = true,
    // probably don't need this: recordURI: "http://example.com/recording.js",
    transcriptionOutURI: "temphtaddress" //replace this
});